import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import AxiosClient from '../network/AxiosClient';
import { Link, useParams } from 'react-router-dom';

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
    <h2>상세보기</h2>
        <label htmlFor='title'>제목</label>
        <input type='text' name='title' defaultValue={title} />
                
      <div>
        <label htmlFor='content'>내용</label>
        <input type='text' name='title'  defaultValue={content} />
      </div>
      <button>글 수정</button>
     <button><Link to={`detail/delete/${id}`}>글 삭제</Link></button>
    </>
  )
}

export default Detail