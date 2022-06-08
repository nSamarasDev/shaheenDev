import React from 'react'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {createTicket, reset} from '../features/tickets/ticketSlice'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'


function NewTicket() {
  const {user} = useSelector((state) => state.auth)
  const {isLoading, isError, isSuccess, message} = useSelector((state) => state.ticket)


  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [product, setProduct] = useState('')
  const [description, setDescription] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    if(isSuccess) {
      dispatch(reset())
      navigate('/tickets')
    }

    dispatch(reset())
  }, [dispatch, isError, isSuccess, navigate, message])

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createTicket({product, description}))
  }

  if(isLoading) {
    return <Spinner />
  }


  return (
    <>
      <BackButton url='/' />
        <section className='heading'>
          <h1>Create New Ticket</h1>
          <p>Please fill out the form below</p>
        </section>

        <section className='form'>
          <div className='form-group'>
            <label htmlFor='name'>Employee Name</label>
            <input type="text" className="form-control" value={name} disabled />
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Employee Email</label>
            <input type="text" className="form-control" value={email} disabled />
            </div>
         <form onSubmit={onSubmit}>
           <div className="form-group">
           <label htmlFor="product">Ticket Options</label>
              <select 
              name="product" 
              id="product" 
              value={product} 
              onChange={(e) => setProduct(e.target.value)}>
                <option value=""></option>
                <option value="adminstrative">Adminstrative</option>
                <option value="mechanical">Mechanical</option>
                <option value="financial">Financial</option>
              </select>
           </div>
            <div className='form-group'>
              <label htmlFor='description'>Description of the issue</label>
              <textarea 
                name='description' 
                id='description' 
                className='form-control'
                placeholder='Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
            <div className='form-group'>
              <button className='btn btn-block'>Submit</button>
            </div>
          </form>
        </section>
    </>
  )
}

export default NewTicket