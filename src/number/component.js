import React from 'react';

export default function Number({ number, fetchStatus }) {
  return (
    <div>
      <div>Status: { fetchStatus }</div>
      { numberDetails(number) }
    </div>
  )
}

function numberDetails(number) {
  if (!number) { return; }
  return (
    <div>
      <h3> {number.name}  {number.number}</h3>
      <h3>Category: { number.category }</h3>
      <h3> Unavailable Markets {number.unavailableMarkets} </h3>
    </div>
  )
}
