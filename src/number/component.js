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
      <h3> {number[0].name}  {number[0].number}</h3>
      <h3>Category: { number[0].category }</h3>
      <h3> Unavailable Markets {number[0].unavailable_markets} </h3>
      <h3>URL: <a href={number[0].url}></a></h3>
    </div>
  )
}
