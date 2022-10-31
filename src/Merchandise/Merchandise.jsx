import React from 'react';
import PriceTable from './components/PriceTable';
import { Products } from './components/product';
import SizeChart from './components/SizeChart';
import { contents } from './contents';
import './Merch.css';




const Merchandise = () => {
  return (
    <>
        <div className="Items"> </div>
          <div className='bg-text'>
          <button className="text">Merchandise</button> 
          </div>


          <div className='page-contain'>
          <div className="inner-text">
          <p>An exclusive range of TEDxNITD high-quality merchandise to inspire and remind you of the event.</p>
          <p>Available to order online for delivery directly to you or to the collection at the event if you are attending on Date. Items are in limited stock and are available subject to the availability</p>
          </div>
          <hr className='line'/>
         
          <div className='Card'>
                {contents.map(contents => (
                    <Products 
                        key={contents.id}
                        image={contents.image}
                    />
                ))}
            </div>
            <SizeChart />
            <PriceTable/>
            <div className="btn-contain">
            <a href="https://www.amazon.com/" class="btn effect04" data-sm-link-text="NOW" ><span>BUY</span></a>
            </div>
          </div> 
        
      </>
  )
}

export default Merchandise