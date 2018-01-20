import React from 'react';

export default function Numbers({ numbers, fetchStatus, onFetch,
                                onCancelFetch }) {
  return (
    <div>
      <div>Status: { fetchStatus }</div>
      <button onClick={ onFetch }>Fetch Numbers</button>
      <button onClick={ onCancelFetch }>Cancel</button>
      <ul>
        {
          numbers.map(number => (
            <li key={ number.id }>
              <button onClick={ () => console.log(number.category) } >
                { number.number } { number.category }
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
