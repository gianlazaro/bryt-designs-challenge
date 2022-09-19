function Steptwo({data, setData, progress, setProgress}) {
  function handleChange(e) {
    setData({...data, [e.target.id]: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    setProgress({...progress, steptwo: true});
  }

  function handleBack() {
    setProgress({...progress, stepone: false, steptwo: false});
  }

  return (
    <>
      <h1 className="text-xl">Address</h1>
      <form className="step two flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="address" className='font-bold text-sm mt-2'>Address *</label>
            <input
              id="address"
              placeholder="Address"
              value={data.address || ''}
              onChange={handleChange}
              className='rounded w-full border'
              required
            />
            <label htmlFor="addresspt2" className='font-bold text-sm mt-2'>Apartment, Suite, etc.</label>
            <input
              id="addresspt2"
              placeholder="Apartment, Suite, etc."
              value={data.addresspt2 || ''}
              onChange={handleChange}
              className='rounded w-full border'
            />
            <label htmlFor="country" className='font-bold text-sm mt-2'>Country *</label>
            <select
              id="country"
              value={data.country || ''}
              onChange={handleChange}
              className='rounded w-full border'
              required
            >
            <option value="country1">Country #1</option>
            <option value="country2">Country #2</option>
            <option value="country3">Country #3</option>
            <option value="country4">Country #4</option>
            </select>
            <label htmlFor="city" className='font-bold text-sm mt-2'>City *</label>
            <input id="city" placeholder="City" className='rounded w-full border' required />
            <label htmlFor="zipcode" className='font-bold text-sm mt-2'>Zipcode *</label>
            <input
              id="zipcode"
              placeholder="Zipcode"
              value={data.zipcode || ''}
              onChange={handleChange}
              className='rounded w-full border'
              required
            />
            <label htmlFor="company" className='font-bold text-sm mt-2'>Company</label>
            <input id="company" value={data.company || ''} onChange={handleChange} placeholder="Company" className='rounded w-full border'/>
            <label htmlFor="phone" className='font-bold text-sm mt-2'>Phone Number</label>
            <input type="number" id="phone" value={data.phone || ''} onChange={handleChange} placeholder="Phone" className='rounded w-full border' />
          <button className="backBtn" onClick={handleBack} className='mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Back</button>
          <input type="submit" value="Next Step" className='mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'/>
        </form>
    </>
  );
}

export default Steptwo;
