import logo from './logo.svg';
import './App.css';
import Routers from './routers/routers';
import Header from './component/navbar/Header';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routers/>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
