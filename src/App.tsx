import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import 'react-phone-number-input/style.css';
import RegisterContainer from './containers/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginContainer from './containers/Login';
import AuthProvider from './hook/AuthProvider';
import DashBoardContainer from './containers/Dashboard';
import Home from './containers/Home';
import 'antd/dist/antd.css';



function App() {  
  return (
   
    <div id="app-root">
      <div className='container-app'>

      <BrowserRouter>
      <AuthProvider>
      <Routes>

      <Route path='/login' element={<LoginContainer />} />
      <Route path='/dashboard' element={<DashBoardContainer />} />
      <Route index element={<Home />} />

      </Routes>
      </AuthProvider>
      </BrowserRouter>
  
      </div>

    </div>

  );
}

export default App;
