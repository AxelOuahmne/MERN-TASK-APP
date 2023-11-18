import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Spinner from '../Layouts/Spinner';
import axios from 'axios';
import {  toast } from 'react-toastify';

const  Create = ()=> {
   const [title,setTitle]=useState('') ;
   const [description,setDiscription]=useState('');
   const [error,setError]=useState('');
   const [loading ,setLoading] = useState(false);
   const navigate = useNavigate() ;
   const CreateTask = async(e)=>{
    e.preventDefault();
    setLoading(true);
    const task = {title,description};
    try{
      await axios.post('http://localhost:5000/tasks',task)
    setLoading(false)
    toast.success('Your task has been added !',{
      position: toast.POSITION.TOP_RIGHT
      
    });
    navigate('/')

    }catch(error) {
  
        if(error.response.status === 422) {
          setError(error.response.data. message)
        
        }
        console.log(error)
    }
   }
  return (
    <div className='container'>
      <div className="row my-5">
        <div className="col-md-6 mx-auto">
          {
            error && <div className="alert alert-danger">
              {error}
            </div>
          }
          <div className="card">
            <div className="card-header bg-white text-center">
              <h6 className="mt-2">Create new task</h6>
            </div>
            <div className="card-body">
              <form className='mt-5' onSubmit={(e)=>{CreateTask(e)}}>
                <div className="mb-2">
                  <input type="text" name='title' value={title} onChange={(e)=>setTitle(e.target.value)} className='form-control' placeholder='Title*'/>
                </div>
                <div className="mb-2">
                  <textarea  name='description' value={description}  onChange={(e)=>setDiscription(e.target.value)}  className='form-control' placeholder='Description*'> </textarea>
                </div>
                <div className="mb-2">
                 {
                  loading ? <Spinner></Spinner>
                  :  <button className='btn btn-primary'>Create</button>
                 }
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Create