import React from 'react';

export default function Numbers({ numbers, fetchStatus, onFetch,
                                onCancelFetch, onSearchFieldFilled, onFetchNumber }) {
  return (
    <div>
      <form className="Form">
        <div>Status: { fetchStatus }</div>
        <select name="prefix"  autoFocus="true"  onChange={ onSearchFieldFilled }>
          <option value="">Any</option>
          <option value="800">800</option>
          <option value="888">888</option>
          <option value="877">877</option>
          <option value="866">866</option>
        </select>
        <select name="category" autoFocus="true" onChange={ onSearchFieldFilled }>
          <option value="">Any</option>
          <option value="Medical">Doctors</option>
          <option value="Bailbonds">Bailbonds</option>
          <option value="Snoring">Snoring</option>
          <option value="Pain">Pain</option>
          <option value="Pain">Music</option>
          <option value="Pain">Movies</option>
          <option value="Pain">Tax</option>
          <option value="Pain">Pain</option>
          <option value="Pain">Childcare</option>
          <option value="Pain">Cleaning</option>
          <option value="Pain">Communication</option>
          <option value="Pain">Technology</option>
          <option value="Pain">Dental</option>
          <option value="Pain">Education</option>

        </select>
        <input type="text" autoFocus="true" name="name" onChange={ onSearchFieldFilled } />
        <button onClick={ onCancelFetch }>Cancel</button>
      </form>
      <div className="Feature">
          {numbers.map(number => {
            return <div className="Numbers">
                <h3 >{number.number}</h3>
                <button onClick={ () => onFetchNumber(number.name) } >
                  { number.name }
                </button>
            </div>
          })}
      </div>
    </div>
  );
}
