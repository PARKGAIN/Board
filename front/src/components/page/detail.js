import React, { useState ,useEffect } from 'react';
import axios from 'axios';


function Detail({match}) {
 // const id = props.lists;
 const id =match.params;
  const [title,setTitle]= useState('');
  const [content,setContent]= useState('');

 //값이 다 undefined로 옴 
  useEffect(() => {
    try{
        const res = axios.get('/detail/get',{
          params :{
            'id' : id
          }
        })
        setTitle(res.data.btitle);
        //console.log(res.btitle);
        setContent(res.data.content);
        console.log(res);
    } catch(e) {
        console.error(e.message)
    }
},[])
console.log(title);
console.log(content);
  return (
    <>
    <h2>상세보기</h2>
        <label htmlFor='title'>제목</label>
        <input type='text' name='title' defaultValue={title} />
                
      <div>
        <label htmlFor='content'>내용</label>
        <input type='text' name='title'  defaultValue={content} />
      </div>
    </>
  )
}

export default Detail