import React,{ useCallback, useMemo, useState,createContext, useContext,useEffect } from 'react';
import { getUserProfileServices, IAuthRequestSignIn, loginWithUserPass } from '../services/authencation';
import { ACCESS_TOKEN_KEY } from '../utils/constant';
import { useNavigate,useLocation } from "react-router-dom";
import { UserEntity } from '../interfaces/user';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { fromUnixTime } from 'date-fns';
import { url } from '../services/request';


interface ContextType{

  user:UserEntity | null

}
const initialState:ContextType = {
  user:null

  
};

export const AuthContext = createContext(initialState);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const CheckLoggedUser = () => {
  const token = localStorage.getItem('_u');
  return !!token;
};
export const INIT_PAGE = [
  '/login',
  '/',
];

interface AuthProviderProps{
  children: React.ReactNode
}

const AuthProvider:React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserEntity | null>(null);
  const Router = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

const getData = async() =>{

try {
  const result = await getUserProfileServices();
  if(result.data.status){
    setUser(result.data.data);
  }
} catch (error) {
  console.log(error);
}

}


  useEffect(() => {
    const authFunction = async () => {
      const token = localStorage.getItem('_u');
      const refreshToken = localStorage.getItem('_uRefresh');
      if (!token) {
        if (!INIT_PAGE.includes(location.pathname)) {
          Router('/login');
        }
        setLoading(false);
      } else {
        const jwt = jwtDecode(token ?? '') as any;
        const expired = fromUnixTime(jwt.exp);
        if (expired.getTime() > new Date().getTime()) {
          setLoading(false);
          if (!user) {
            getData();
          }
          if (['/login', '/register'].includes(location.pathname)) {
            Router('/dashboard');
          }
        } else {
          if (!refreshToken) {
            localStorage.removeItem('_u');
            setUser(null);
            if (!INIT_PAGE.includes(location.pathname)) {
              Router('/login');
            }
          } else {
            let jwtToken = '';
            axios
              .post(`${url}/api/v1/auth/refresh_token`, {
                refresh_token: refreshToken,
              })
              .then((res) => {
                jwtToken = res.data.data.access_token;
                localStorage.setItem('_uRefresh', res.data.data.refresh_token);
                localStorage.setItem('_u', jwtToken);
              })
              .catch((error) => {
                localStorage.removeItem('_uRefresh');
                localStorage.removeItem('_u');
                if (!INIT_PAGE.includes(location.pathname)) {
                  Router('/login'
                  );
                }
              });
          }

          setLoading(false);
        }
      }
    };

    authFunction();
  }, [Router, user]);


  const params = useMemo(() => {
    return {
      user
    };
  }, [user]);

  return <AuthContext.Provider value={params}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
