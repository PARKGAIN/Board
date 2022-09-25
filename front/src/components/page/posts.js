import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Pagination from './Pagination';

function Posts() {
  const [lists, setLists] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;


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
   <label>
        페이지 당 표시할 게시물 수:&nbsp;
        <select
          type="number"
          value={limit}
          onChange={({ target: { value } }) => setLimit(Number(value))}
        >
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label>
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
    
    {lists.slice(offset, offset + limit).map(lists=>(
      <tr key={lists.id}>
        <td> <Link to={`detail/get/${lists.id}`}>{lists.id}</Link></td>
        <td>{lists.btitle} </td>
        <td> {lists.content}</td>
        <td>{lists.sysdate}</td>
      </tr>
 
))}
   </tbody>
   </table>
   <div className='btn_center'>
   <Link to="posts/post"><button className='write_btn'>글작성</button></Link>
   </div>

      <footer>
        <Pagination
          total={lists.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
   </>
  );
  console.log(lists.row_num);
}

export default  Posts;
