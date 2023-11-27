import React, { useState } from 'react';
import './style.css';
const Insert = () => {
    const handleOnSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const datas = {name,phone,email};

fetch('http://localhost:5000/postData',{
    method: 'POST',
    body: JSON.stringify(datas),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
.then(res => res.json())
.then(data =>{
    console.log(data)
    alert('Data Inserted SuccessFully')
    event.target.reset();

})



    }
    return (
        <div className='insertContainer'>
            <h1 className='text-center mt-4 text-primary'>Insert Form</h1>

            <div className='insertRow'>
                <form onSubmit={handleOnSubmit} className='insertForm'>
                    <input name='name' type='text' placeholder='Enter Name'  required/><br></br>
                    <input name='email' type='email' placeholder='Enter Email' required /><br></br>
                    <input name='phone' type='text' placeholder='Enter Phone' required /><br></br>
                    <button  type="submit" className='btn mt-2 btn-primary'>Insert Data</button>
                </form>
            </div>
        </div>
    );
};

export default Insert;