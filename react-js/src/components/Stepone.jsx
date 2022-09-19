function Stepone({data, setData, progress, setProgress}) {
  function handleChange(e) {
    setData({...data, [e.target.id]: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(e.target.password.value !== e.target.confirmPw.value) {
      console.log('password mismatch!');
      document.querySelector('.pw').style.color = 'red';
      return;
    } else {
      document.querySelector('.pw').style.color = 'revert';
    }
    setProgress({...progress, stepone: true});
  }

  return (
    <>
      <h1 className="text-xl">Account</h1>
      <form className="step one flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="firstName" className='font-bold text-sm mt-2'>First Name</label>
        <input id="firstName" placeholder="First Name" value={data.firstName || ''} onChange={handleChange} className='rounded w-full border'/>
        <label htmlFor="lastName" className='font-bold text-sm mt-2'>Last Name</label>
        <input id="lastName" placeholder="Last Name" value={data.lastName || ''} onChange={handleChange}
        className='rounded w-full border'/>
        <label htmlFor="userName" className='font-bold text-sm mt-2'>Username *</label>
        <input
          id="userName"
          placeholder="Username"
          value={data.userName || ''} onChange={handleChange}
          className='rounded w-full border'
          required
        />
        <label htmlFor="email" className='font-bold text-sm mt-2'>Email Address *</label>
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          value={data.email || ''} onChange={handleChange}
          className='rounded w-full border'
          required
        />
        <label htmlFor="password" className='pw font-bold text-sm mt-2'>Password *</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={data.password || ''} onChange={handleChange}
          className='rounded w-full border'
          required
        />
        <label htmlFor="confirmPw" className='font-bold text-sm mt-2'>Confirm Password *</label>
        <input
          type="password"
          id="confirmPw"
          placeholder="Confirm Password"
          className='rounded w-full border'
          required
        />
        <input type="submit" value="Next Step" className='mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'/>
      </form>
    </>
  );
}

export default Stepone;
