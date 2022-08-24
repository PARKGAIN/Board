import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Write() {
    const [제목,제목작성] = useState('');
    const [내용,내용작성] = useState('');

    //useEffect(()=>{
    // axios.post(
    //     '/posts/post',{
    //         btitle: 제목,
    //         content: 내용
            
    //     }).then(function(response){
    //         console.log(response);
    //     }).catch(function(error){
    //         console.log(error);
    //     })
    
    //},[]);

    function sendData(){
        axios.post(
            '/posts/post',{
                btitle: 제목,
                content: 내용
                
            }).then(function(response){
                console.log(response);
            }).catch(function(error){
                console.log(error);
            })
        }
    

  return (
    <>
        <div>제목</div>
        <input
        type="text"
        value={제목}
        onChange={(e)=>{제목작성(e.target.value); }}/>
        <div>내용</div>
        <textarea 
        value={내용}
         onChange={(e)=>{내용작성(e.target.value);}}/>
        <br/>
        <button onClick={sendData}>글쓰기</button>
    </>
  )
}

export default Write