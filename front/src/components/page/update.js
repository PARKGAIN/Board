import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useState } from 'react';

function Update() {
    const { id } = useParams();
    const [제목,제목수정]= useState('');
    const [내용,내용수정]= useState('');

    function updateData(){
      axios.put(
          '/detail/put',{
            id:id,
              btitle: 제목,
              content: 내용
              
          }).then(function(response){
              console.log(response);
          }).catch(function(error){
              console.log(error);
          })
      }
      console.log(id,제목,내용);

  return (
    <>
    <div className='detail_content'>
    <label htmlFor='title'>제목&nbsp;:&nbsp;</label>
    <input type='text' 
    name='title' 
     onChange={(e)=>{제목수정(e.target.value);}} 
     value={제목}/>
    </div>        
  <div className='detail_content'>
    <label htmlFor='content'>내용&nbsp;:&nbsp;</label>
    <input type='text' name='title'    onChange={(e)=>{내용수정(e.target.value);}} value={내용} />
  </div>
  <button onClick={updateData}>수정하기</button>
  </>
  )
}

export default Update