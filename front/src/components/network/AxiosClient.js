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
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setLists(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          '/list'
        );
        setLists(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchLists();
  }, []);

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
    {lists.map(user => ( 
      <tr key={user.id}>
       <td> {user.id}</td>
       <td><Link to="/detail"> {user.btitle} </Link></td>
        <td> {user.content}</td>
        <td>{user.sysdate}</td>
      </tr>
    ))}
   </tbody>
   </table>
   
   </>
  );
}

export default  AxiosClient;
