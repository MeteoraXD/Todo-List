const Logout =() => {
  const handleLogout = () => {
    localStorage.removeItem('token');
  }
return (<div >
  <button onClick = {handleLogout} >Logout</button>
</div>)
};

export default Logout;