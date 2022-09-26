import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import 'react-phone-number-input/style.css';
import RegisterContainer from './containers/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {  
  return (
   
    <div id="app-root">
      <div className='container-app'>
      <BrowserRouter>
    
      <Routes>
      <Route index element={<RegisterContainer />} />
      </Routes>
        </BrowserRouter>
      </div>

    </div>

  );
}

export default App;
