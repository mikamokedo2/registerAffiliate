import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import 'react-phone-number-input/style.css';
import RegisterContainer from './containers/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginContainer from './containers/Login';
import AuthProvider from './hook/AuthProvider';
import DashBoardContainer from './containers/Dashboard';




function App() {  
  return (
   
    <div id="app-root">
      <div className='container-app'>

      <BrowserRouter>
      <AuthProvider>
      <Routes>


      <Route path='/login' element={<LoginContainer />} />
      <Route path='/dashboard' element={<DashBoardContainer />} />
      <Route index element={<RegisterContainer />} />


      </Routes>
      </AuthProvider>
      </BrowserRouter>
  
      </div>

    </div>

  );
}

export default App;
