import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';


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
        setError(e); //에러처리 찾아보기
      }
      setLoading(false);
    };

    fetchLists();
  }, []);


  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>; //리액트에서는 if문 잘 안쓰고 삼항연산자-> 한 번 찾아보
  if (!lists) return null;
  
  return (
    <>

    <table className='board_style'>
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
   <Link to="posts/post"><button className='write_btn'>글작성</button></Link>
   </>
  );
}

export default  AxiosClient;
