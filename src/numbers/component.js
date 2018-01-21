import React from 'react';

export default function Numbers({ numbers, fetchStatus, onFetch,
                                onCancelFetch }) {
  return (
    <div>
      <form>
        <div>Status: { fetchStatus }</div>
        <select name="prefix" size="5">
          <option value="">Any</option>
          <option value="800">800</option>
          <option value="888">888</option>
          <option value="877">877</option>
          <option value="866">866</option>
        </select>
        <select name="category" size="5">
          <option value="">Any</option>
          <option value="Medical">Doctors</option>
          <option value="Bailbonds">Bailbonds</option>
          <option value="Snoring">Snoring</option>
          <option value="Pain">Pain</option>
        </select>
        <input type="text"/>
        <button onClick={ onFetch }>Fetch Numbers</button>
        <button onClick={ onCancelFetch }>Cancel</button>
      </form>
      <ul>
          {numbers.map(number => {
      return <div>
              <li key={ number._id }>
                <h3>Number: {number.number}</h3>
                <button onClick={ () => console.log(number.category) } >
                  { number.name }
                </button>
              </li>
            </div>
          })}
      </ul>
    </div>
  );
}
