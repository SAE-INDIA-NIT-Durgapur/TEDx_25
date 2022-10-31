import React from 'react'
import '../Merch.css'


const SizeChart = () => {
  return (
    <div>
    <h4>
      Size Chart
    </h4>

    <table class="t-container">
      <thead>
        <tr>
          <th scope="col"><h1>Size</h1></th>
          <th scope="col"><h1>Chest</h1></th>
          <th scope="col"><h1>Length</h1></th>
          <th scope="col"><h1>Sleeve Length</h1></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td >S</td>
          <td>38''</td>
          <td>26''</td>
          <td>7.5''</td>
        </tr>

        <tr>
          <td >M</td>
          <td>40''</td>
          <td>27''</td>
          <td>8''</td>
        </tr>

        <tr>
          <td >L</td>
          <td>42''</td>
          <td>28''</td>
          <td>8''</td>
        </tr>

        <tr>
          <td >XL</td>
          <td>44''</td>
          <td>29''</td>
          <td>8.5''</td>
        </tr>

        <tr>
          <td>2XL</td>
          <td>46''</td>
          <td>30''</td>
          <td>9''</td>
        </tr>

        <tr>
          <td>3XL</td>
          <td>48''</td>
          <td>31''</td>
          <td>9.5''</td>
        </tr>
      </tbody>
    </table>
    <h2 className='me-text'>
      Note: All measurements are in inches
    </h2>
  </div>
  )
}

export default SizeChart