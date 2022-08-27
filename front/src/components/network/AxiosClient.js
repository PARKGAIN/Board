import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Detail from '../page/detail';



function AxiosClient() {
  const [lists, setLists] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        setError(null);
        setLists(null);
        setLoading(true);
        const response = await axios.get(
          '/list'
        );
         
        setLists(response.data); 
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchLists();
  }, []);

  console.log(lists);


  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!lists) return null;
  
  return (
    <>
    <table>
    <thead>
      <tr>
        <th>글 번호</th>
        <th>제목</th>
        <th>내용</th>
        <th>작성일</th>
      </tr>
    </thead>
    <tbody>
    
    {lists.map(lists=>(
      <tr key={lists.id}>
        <td> <Link to={`detail/get/${lists.id}`}>{lists.id}</Link></td>
        <td>{lists.btitle} </td>
        <td> {lists.content}</td>
        <td>{lists.sysdate}</td>
      </tr>
 
))}
 
   </tbody>
   </table>
   <button>글 수정</button>
   <button>글 삭제</button>
   </>
  );
}

export default  AxiosClient;
