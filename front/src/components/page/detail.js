import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Detail() {
 const { id } = useParams();
  const [title,setTitle]= useState('');
  const [content,setContent]= useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 useEffect(() => {
  const fetchLists =async() => {
    try{
        const res =await  axios.get('/detail/get',{
          params :{
            'id' : id
          }
        })
        setTitle(res.data[0].btitle); 
        setContent(res.data[0].content);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchLists();
   
  }, []);


  return (
    <>
    <h2 className='detail_header'>상세보기</h2>
        <div className='detail_content'>
        <label htmlFor='title'>제목&nbsp;:&nbsp;</label>
        <input type='text' name='title' value={title} onChange={(e)=>{setTitle(e.target.value);}} />
        </div>        
      <div className='detail_content'>
        <label htmlFor='content'>내용&nbsp;:&nbsp;</label>
        <input type='text' name='title'  value={content}  onChange={(e)=>{setContent(e.target.value);}} />
      </div>
      <div className='btn_center'>
      <button className='update_btn'><Link to={`detail/put/${id}`}>글 수정</Link></button>
     <button className='delete_btn'><Link to={`detail/delete/${id}`}>글 삭제</Link></button>
     </div>
    </>
  )
}

export default Detail