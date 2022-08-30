import logo from './logo.svg';
import './App.css';
import AxiosClient from './components/network/AxiosClient';
import { Route, Routes } from 'react-router-dom';



function App(props) {
  return (
    <>
      <p className='Header'>💻게시판💻</p>
      <AxiosClient/>
    </>
  );
}

export default App;
