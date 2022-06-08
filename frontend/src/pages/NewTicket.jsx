import React from 'react'
import {useState} from 'react'
import {useSelector} from 'react-redux'


function NewTicket() {
  const {user} = useSelector((state) => state.auth)
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [product, setProduct] = useState('')
  const [description, setDescription] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <>
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