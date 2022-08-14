import logo from './logo.svg';
import './App.css';
import AxiosClient from './components/network/AxiosClient';


function App() {
  return (
    <div className="App">
      <p>게시판</p>
      <AxiosClient/>
    </div>
  );
}

export default App;
