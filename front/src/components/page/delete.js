import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Delete() {
    const { id } = useParams();
    //값 삭제

   useEffect(()=>{
    const delData =async() => {
  axios.delete(`/detail/delete?id=${id}`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  
  // async await 함수를 사용할 때, 

try {
	const data = await axios.delete(`/detail/delete?id=${id}`);
} catch {
	// 오류 발생시 실행
}
}},[])
    
  return (
    <div>삭제됨</div>
  )
}

export default Delete