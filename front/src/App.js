import logo from './logo.svg';
import './App.css';
import Posts from './components/page/posts';
import { Route, Routes } from 'react-router-dom';



function App(props) {
  return (
    <>
      <p className='Header'>💻게시판💻</p>
      <Posts/>
    </>
  );
}

export default App;
