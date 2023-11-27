import React, { useEffect, useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom';
const Home = () => {
    const [data,setData]  = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/getData')
        .then(res => res.json())
        .then(info => setData(info));
    })

const handleOnDelete = (id) => {
  fetch(`http://localhost:5000/deleteData/${id}`,{
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(result => 
    {
        if(result.deletedCount > 0){
            const filter = data.filter(dats => dats._id !== id);
            setData(filter);
        }
    }
    )
}


    return (
        <div className='container'>
            <h1 className='homeContainer mt-5 text-primary'>Welcome to CRUD operation</h1>
            <div>
            <table class="table mt-4 table-success table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   
   {
    data.map((datas,index) =>  <tr 
    datas={datas} 
    key={datas._id}
    
    >
        <th scope="row">{index + 1}</th>
        <td>{datas.name}</td>
        <td>{datas.email}</td>
        <td>{datas.phone}</td>
        <td className=''>
        <Link to={`/view/${datas._id}`}><button className='btn btn-primary btn-sm m-1'>View</button></Link>  
        <Link to={`/edit/${datas._id}`}><button className='btn btn-secondary btn-sm m-1'>Update</button></Link>  
            <button onClick={() => handleOnDelete(datas._id)} className='btn btn-danger btn-sm m-1'>Delete</button>
        </td>
      </tr>)
   }
    
  </tbody>
           </table>
            </div>
        </div>
    );
};

export default Home;