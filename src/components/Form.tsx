import React from 'react'

const Form = () => {
  return (
    <>  
        <div className="card" style={{width: '18rem'}}>
            <h5 className="card-header">Add new expense</h5>
            <div className='card-body'>
            <form action="">
                <label htmlFor="expense" className='form-label' >Description :</label>
                <input type="text" className='form-control form-control-lg' />

                <label htmlFor="date" className='form-label'>Date :</label>
                <input type="date" className='form-control form-control-lg' />

                <label htmlFor="amount" className='form-label' >Amount :</label>
                <input type="number" className='form-control form-control-lg' />

                <label htmlFor="note" className='form-label' >Note :</label>
                <textarea className='form-control' rows={2}/> 

                <select className="form-select mt-3">
                    <option selected>Expense category</option>
                    <option value="1">Grocery</option>
                    <option value="2">Shopping</option>
                    <option value="3">Leisure</option>
                    <option value="4">Household & Services</option>
                    <option value="5">Other</option>
                </select>

                <button className="btn btn-primary btn-sm p-2 mt-3">Add expense
                </button>
            </form>
            </div>
        </div>
        
       
        
    </>
  )
}

export default Form