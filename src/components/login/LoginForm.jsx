function LoginForm({ handleInputChange, handleLogin, setIsRegister }) {
  return (
    <form className='login-form' onSubmit={(e) => handleLogin(e)}>
      <h1>Login</h1>
      <div className='login-input-div'>
        <span class='material-symbols-outlined'>mail</span>
        <input
          className='login-form-input'
          type='email'
          label='Email'
          variant='outlined'
          name='email'
          onChange={(e) => handleInputChange(e)}
          placeholder='email'
        ></input>
      </div>

      <div className='login-input-div'>
        <span class='material-symbols-outlined'>key</span>
        <input
          className='login-form-input'
          type='password'
          label='Password'
          variant='outlined'
          name='password'
          onChange={(e) => handleInputChange(e)}
          placeholder='password'
        ></input>
      </div>

      <button
        id='login-submit-button'
        className='button-reset greenButton'
        type='submit'
        variant='contained'
      >
        <span class='material-symbols-outlined'>login</span>
        Login
      </button>

      <div className='login-no-account'>
        Don't have an account yet?{' '}
        <span
          className='login-register-link'
          onClick={() => {
            setIsRegister(true);
          }}
        >
          Register
        </span>
      </div>
    </form>
  );
}

export default LoginForm
