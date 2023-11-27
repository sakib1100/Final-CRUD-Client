import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const [edit,setEdit] = useState('');
    const {id} = useParams();
useEffect(() => {
    fetch(`http://localhost:5000/fetchData/${id}`)
    .then(res => res.json())
    .then(data => setEdit(data))
},[])
const navigate = useNavigate();
const handleUpdate = (e) => {
e.preventDefault();
const name = e.target.name.value;
const email = e.target.email.value;
const phone = e.target.phone.value;
const data = {name,email,phone};

fetch(`http://localhost:5000/updateData/${id}`, {
  method: 'PUT',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {
    console.log(json)
    alert("Data Updated Successfully.")
    navigate('/')
  });


}
    return (
       <div>
        <h3 className='text-center text-primary mt-4'>Update Informaion</h3>
         <div className='d-flex justify-content-center mt-4'>
<form onSubmit={handleUpdate} className='w-25 rounded shadow-xl border p-4'>
  <div class="mb-3">
    <input name="name" defaultValue={edit.name} type='text' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div class="mb-3">
    <input name='email' defaultValue={edit.email} type="email" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3">
    <input name='phone' defaultValue={edit.phone} type="text" class="form-control" id="exampleInputPassword1" />
  </div>
  
  <button type="submit" class="btn btn-success">Update</button>
</form>
        </div>
       </div>
    );
};

export default Edit;