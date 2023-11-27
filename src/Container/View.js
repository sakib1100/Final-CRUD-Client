import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const View = () => {
    const [data,setData] = useState('');
    const {id} = useParams();

useEffect(() => {
    fetch(`http://localhost:5000/fetchData/${id}`)
    .then(res => res.json())
    .then(show => setData(show))
})


    return (
       <div>
        <h3 className='text-center mt-4 text-primary'>Profile of {data.name}</h3>
         <div className='d-flex justify-content-center'>
          <div class="card mt-5 text-dark bg-opacity-25  bg-success" >
  <div class="card-body shadow-lg">
    <p>Id - {id}</p>
    <h5 class="card-title">Name: {data.name}</h5>
    <h6 class="card-subtitle mb-2  mt-3"> Email: {data.email}</h6>
    <p class="card-text font-bold">Phone: {data.phone}</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
        </div>
       </div>
    );
};

export default View;