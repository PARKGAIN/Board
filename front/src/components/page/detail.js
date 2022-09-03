import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Posts from './posts';

function Detail() {
 // const id = props.lists;
 const { id } = useParams();
 //const id =match.params;
  const [title,setTitle]= useState('');
  const [content,setContent]= useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

//값 받아오기
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
        <input type='text' name='title' defaultValue={title} />
        </div>        
      <div className='detail_content'>
        <label htmlFor='content'>내용&nbsp;:&nbsp;</label>
        <input type='text' name='title'  defaultValue={content} />
      </div>
      <div className='btn_center'>
      <button className='update_btn'>글 수정</button>
     <button className='delete_btn'><Link to={`detail/delete/${id}`}>글 삭제</Link></button>
     </div>
    </>
  )
}

export default Detail