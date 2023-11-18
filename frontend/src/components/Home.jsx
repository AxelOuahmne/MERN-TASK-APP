import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from '../components/Layouts/Spinner'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


function Home() {
  const [loading ,setLoading] = useState(false);
  const [tasks ,setTasks] = useState([])
  const DeleteTask = async (id) =>{
    try {
        await axios.delete(`http://localhost:5000/tasks/${id}`)
        let updateTasks =[...tasks];
        updateTasks = tasks.filter(task=>task._id !== id);
        setTasks(updateTasks)
        toast.success('Your task has been Deleted !', {
          position: toast.POSITION.TOP_RIGHT
        });
      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    const fetchTask = async()=>{
      setLoading(true)
      try{
        const response = await axios.get('http://localhost:5000/tasks');
        console.log(response.data)
        setTasks(response.data)
        setLoading(false)

      }catch(error){
        setLoading(false)
        console.log(error)
      }
    }
    fetchTask();
  },[]);

  return (
    <div className='container'>
      <div className="row my-5">
        {
          loading?<Spinner />: tasks.map(task=>(
            <div className="col-md-4 mb-5" key={task._id}>
              <div className="card">
                <div className="card-header bg-white text-cenetr">
                  <h6 className={`mt-2 ${task.done?'done':''}`}>{task.title.toUpperCase ()}</h6>
                </div>
                <div className="card-body">
                  <p className={`text-muted ${task.done?'done':''}`}>{task.description}</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <Link  to={`/edit/${task._id}`} className='btn btn-warning'><i className="fas fa-edit"></i></Link>
                  <button className='btn btn-danger' onClick={()=>DeleteTask(task._id)}><i className="fas fa-trash"></i></button>
                </div>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home
