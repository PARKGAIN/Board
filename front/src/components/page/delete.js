import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate,  useParams } from 'react-router-dom';
import  { useState} from 'react';

function Delete() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

    useEffect(() => {
      const fetchLists =async() => {
        try{
            const res =await  axios.delete('/detail/delete',{
              params :{
                'id' : id
              }
            })
            alert("삭제 완료 되었습니다.");
            navigate("/");
          } catch (e) {
            setError(e);
          }
          setLoading(false);
        };
    
        fetchLists();
      }, []);
      

    
  return (
    <>
    </>
  )
}

export default Delete