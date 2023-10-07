import logo from './logo.svg';
import './App.css';
import Routers from './routers/routers';
import Header from './component/navbar/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Routers/>
    </div>
  );
}

export default App;
