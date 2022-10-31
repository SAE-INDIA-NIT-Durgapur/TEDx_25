import React from 'react'

const PriceTable = () => {
  return (
    <div className="ptable table price-table">
    <h4 style={{ marginBottom: "20px" }}>Price Guide</h4>
    <table className="t-container">
      <thead>
        <tr>
          <th scope="col">Ticket</th>
          <th scope="col">T-Shirt</th>
          <th scope="col">Ticket + Tshirt</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td>INR 99/-</td>
          <td>INR 299/-</td>
          <td>INR 349/-</td>
        </tr>
   
        
      </tbody>
    </table>
    

    <h2>
      Note: T-Shirt price inclusive of shipping
      <br/>
      Discount INR 50 for NIT Durgapur Students.
    </h2>
  </div>
  )
}

export default PriceTable