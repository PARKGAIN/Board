import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useState } from 'react';

function Update() {
    const { id } = useParams();
   const {title} = useParams();
   const {content} = useParams();
    const [제목,제목수정]= useState('');
    const [내용,내용수정]= useState('');

    console.log(title);
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
  return (
    <>
    <h3 className='update_header'>글 수정화면</h3>
    <div className='detail_content'>
    <label htmlFor='title'>제목&nbsp;:&nbsp;</label>
    <input type='text' 
    name='title' 
     onChange={(e)=>{제목수정(e.target.value);}} 
     defaultValue={title}/>
     
    </div>        
  <div className='detail_content'>
    <label htmlFor='content'>내용&nbsp;:&nbsp;</label>
    <input type='text' name='title'  onChange={(e)=>{내용수정(e.target.value);}} value={content} />
  </div>
  <button onClick={updateData} className='update_btn'>수정하기</button>
  </>
  )
}

export default Update