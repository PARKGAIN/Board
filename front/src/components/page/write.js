import axios from 'axios';
import React, {useState } from 'react'
import {useNavigate} from 'react-router-dom'


function Write() {
    const navigate = useNavigate();
    const [제목,제목작성] = useState('');
    const [내용,내용작성] = useState('');

    function sendData(){
        axios.post(
            '/posts/post',{
                btitle: 제목,
                content: 내용
            }).then(function(response){
                console.log(response);
                navigate("/");
            }).catch(function(error){
                console.log(error);
            })
        }
const nullCheck = ()=> {
    if(JSON.stringify(제목,undefined)!=null){
        sendData();
    }
    else{
       alert("제목을 입력해주세요" );
    }
}

  return (
    <>
        <h2>글 작성 페이지</h2>
        <div className='div__center'>
        <div>제목</div>
        <input 
        name='titleinput'
        type="text"
        value={제목}
        onChange={(e)=>{제목작성(e.target.value); }}/>
        <div>내용</div>
        <textarea 
        name='contentinput'
        value={내용}
         onChange={(e)=>{내용작성(e.target.value);}}/>
        <br/>
       <button onClick={()=>{nullCheck()}}>글쓰기</button>
        </div>
    </>
  )
}
export default Write;