function Stepthree({data, setData, progress, setProgress}) {
  function handleChange(e) {
    if(e.target.type === 'checkbox') {
      setData({...data, [e.target.id]: e.target.checked});
    } else {
      setData({...data, [e.target.id]: e.target.value});
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setProgress({...progress, stepthree: true});
    console.log(data.firstName, data.lastName);
  }

  function handleBack() {
    setProgress({...progress, stepone: true, steptwo: false});
  }

  return (
    <>
      <h1 className="text-xl">Preferences</h1>
      <form className="step three" onSubmit={handleSubmit}>
            <input type="checkbox" id="notifs" checked={!!data.notifs || false} onChange={handleChange}/>
            <label htmlFor="notifs">Send notifications</label>
            <input type="checkbox" id="shareInfo" checked={!!data.shareInfo || false} onChange={handleChange}/>
            <label htmlFor="shareInfo">Share info</label>
            <select
            id="preference"
            value={data.preference || 'Email'} onChange={handleChange}
            required
          >
            <option value="email">Email</option>
            <option value="Text">Text</option>
          </select>
          <button className="backBtn" onClick={handleBack} className='mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Back</button>
          <input type="submit" value="Register" className='mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'/>
        </form>
    </>
  );
}

export default Stepthree;
