import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import  { useState} from 'react';

function Delete() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
    //값 삭제

    useEffect(() => {
      const fetchLists =async() => {
        try{
            const res =await  axios.get('/detail/delete',{
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
      
      //delete 파라메터 때문에 안된 것일 수 있음
    
  return (
    <div>삭제됨</div>
  )
}

export default Delete