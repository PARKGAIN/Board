import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Delete() {
    const { id } = useParams();
    //값 삭제
function del(){
   
    axios .delete(`detail/delete/${id}`)
    //성공
      .then((res) => {
            console.log(res)
      })
    //실패
      .catch((err) => {
            console.log('err')
      })
    }
  return (
    <div>delete</div>
  )
}

export default Delete