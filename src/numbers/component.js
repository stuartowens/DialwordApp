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
          <option value="Pain">Employment</option>
          <option value="Pain">Education</option>
          <option value="Pain">Farming</option>
          <option value="Pain">Flooring</option>
          <option value="Pain">Flowers</option>
          <option value="Pain">Food</option>
          <option value="Pain">Funeral</option>
          <option value="Pain">Furniture</option>
          <option value="Pain">Gambling</option>
          <option value="Pain">Gaming</option>
          <option value="Pain">Gardening</option>
          <option value="Pain">Golf</option>
          <option value="Pain">Heating</option>
          <option value="Pain">Holidays</option>
          <option value="Pain">Home Improvement</option>
          <option value="Pain">Industry</option>
          <option value="Pain">Insurance</option>
          <option value="Pain">Investments</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Legal</option>
          <option value="Pain">Lending</option>
          <option value="Pain">Lifestyles</option>
          <option value="Pain">Locksmith</option>
          <option value="Pain">Lumber Sales</option>
          <option value="Pain">Mailing</option>
          <option value="Pain">Marketing</option>
          <option value="Pain">Martial Arts</option>
          <option value="Pain">Medical</option>
          <option value="Pain">Medical-Addiction</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>
          <option value="Pain">Laundry</option>


          <option value="Pain">Laundry</option>

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
