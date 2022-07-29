function LoginForm({ handleInputChange, handleLogin }) {
  return (
    <form className='login-form' onSubmit={(e) => handleLogin(e)}>
      <h1>login</h1>
      <label>email</label>
      <input
        className='login-form-input'
        type='email'
        label='Email'
        variant='outlined'
        name='email'
        onChange={(e) => handleInputChange(e)}
        placeholder='email'
      ></input>
      <label>password</label>
      <input
        className='login-form-input'
        type='password'
        label='Password'
        variant='outlined'
        name='password'
        onChange={(e) => handleInputChange(e)}
        placeholder='password'
      ></input>

      <button id='login-submit-button' type='submit' variant='contained'>
        Login
      </button>
    </form>
  );
}

export default LoginForm
