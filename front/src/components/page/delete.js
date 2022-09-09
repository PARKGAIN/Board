import React, { useEffect } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import  { useState} from 'react';
import App from '../../App';

function Delete() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
    //값 삭제

    useEffect(() => {
      const fetchLists =async() => {
        try{
            const res =await  axios.delete('/detail/delete',{
              params :{
                'id' : id
              }
            })
          } catch (e) {
            setError(e);
          }
          setLoading(false);
        };
    
        fetchLists();
      }, []);
      

    
  return (
    <>
    <div className='delete_msg'>삭제 완료 되었습니다</div>
    {/* <button>목록화면 가기</button> */}
    </>
  )
}

export default Delete