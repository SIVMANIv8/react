import React from 'react';

export default function User(props) {
  return(
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>  
    </div>
  );
}

export const Customer = () => {
  return (
    <div>
      <h1>Customer</h1>
    </div>
  );
}

export const Order = () => {
  return (
    <div>
      <h1>Order</h1>
    </div>
  );
}

export const Track = () => {
  return (
    <div>
      <h1>Track</h1>
    </div>
  );
}