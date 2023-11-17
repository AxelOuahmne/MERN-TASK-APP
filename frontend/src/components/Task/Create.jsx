import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Spinner from '../Layouts/Spinner';

const  Create = ()=> {
   const [title,setTitle]=useState('') ;
   const [description,setDiscription]=useState('');
   const [error,setError]=useState('');
   const [loading ,setLoading] = useState(false);
   const navigation = useNavigate()
  return (
    <div className='container'>
      <div className="row my-5">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-header bg-white text-center">
              <h6 className="mt-2">Create new task</h6>
            </div>
            <div className="card-body">
              <form className='mt-5'>
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