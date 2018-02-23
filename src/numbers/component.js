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
          <option value="Pain">Medical - Audiology</option>
          <option value="Pain">Medical - Cardiology</option>
          <option value="Pain">Medical - Chiropractic</option>
          <option value="Pain">Medical - Cosmetic</option>
          <option value="Pain">Medical - Dental</option>
          <option value="Pain">Medical - Dermatology</option>
          <option value="Pain">Medical - DNA</option>
          <option value="Pain">Medical - Drugs</option>
          <option value="Pain">Medical - ENT</option>
          <option value="Pain">Medical - Internal Medicine</option>
          <option value="Pain">Medical - Neurology</option>
          <option value="Pain">Medical - Nursing</option>
          <option value="Pain">Medical - Nutrition</option>
          <option value="Pain">Medical - OBGYN</option>
          <option value="Pain">Medical - Oncology</option>
          <option value="Pain">Medical - Opthamology</option>
          <option value="Pain">Medical - Orthopedics</option>
          <option value="Pain">Medical - Otology</option>
          <option value="Pain">Medical - Pain Medicine</option>
          <option value="Pain">Medical - Pathology</option>
          <option value="Pain">Medical - Pediatrics</option>
          <option value="Pain">Medical - Podiatry</option>
          <option value="Pain">Medical - Radiology</option>
          <option value="Pain">Medical - Sleep Medicine</option>
          <option value="Pain">Medical - Surgeons</option>
          <option value="Pain">Medical - Surgery</option>
          <option value="Pain">Medical - Urology</option>
          <option value="Pain">Medical - Wound Care</option>
          <option value="Pain">Moving</option>
          <option value="Pain">Moving Companies</option>
          <option value="Pain">Outdoor Advertising</option>
          <option value="Pain">Packing Companies</option>
          <option value="Pain">Photography</option>
          <option value="Pain">Plumbing</option>
          <option value="Pain">Printing</option>
          <option value="Pain">Promotion</option>
          <option value="Pain">Radio</option>
          <option value="Pain">Real Estate</option>
          <option value="Pain">Religion</option>
          <option value="Pain">Retail</option>
          <option value="Pain">Scuba Diving</option>





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
