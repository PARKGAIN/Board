import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useState } from 'react';

function Update() {
    const { id } = useParams();
    const {title} = useParams();
    const {content} = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLists =async() => {
          try{
              const res =await  axios.put('/detail/put',{
                title: title,
                content: content
              })
            } catch (e) {
              setError(e);
            }
            setLoading(false);
          };
      
          fetchLists();
        }, []);



  return (
    <div>정보수정화면</div>
  )
}

export default Update