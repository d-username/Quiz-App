function RegisterForm({
  handleInputChange,
  handleRegister,
  setIsRegister,
  isSuccessREGVisible,
}) {
  return (
    <form className='login-form' onSubmit={(e) => handleRegister(e)}>
      <h1>Register</h1>

      {isSuccessREGVisible && (
        <div className='register-success-notification'>
          <span class='material-symbols-outlined'>check_circle</span>success
        </div>
      )}

      <div className='register-input-div'>
        <span class='material-symbols-outlined'>person</span>
        <input
          className='login-form-input'
          type='text'
          label='name'
          name='name'
          onChange={(e) => handleInputChange(e)}
          placeholder='name'
        ></input>
      </div>

      <div className='register-input-div'>
        <span class='material-symbols-outlined'>mail</span>
        <input
          className='login-form-input'
          type='email'
          label='Email'
          name='email'
          onChange={(e) => handleInputChange(e)}
          placeholder='email'
        ></input>
      </div>

      <div className='register-input-div'>
        <span class='material-symbols-outlined'>key</span>
        <input
          className='login-form-input'
          type='password'
          label='Password'
          name='password'
          onChange={(e) => handleInputChange(e)}
          placeholder='password'
        ></input>
      </div>

      <button
        id='register-submit-button'
        className='button-reset greenButton'
        type='submit'
        variant='contained'
      >
        <span class='material-symbols-outlined'>login</span>
        Register
      </button>

      <div className='login-no-account'>
        Do you already have an account?{' '}
        <span
          className='login-register-link'
          onClick={() => {
            setIsRegister(false);
          }}
        >
          Login
        </span>
      </div>
    </form>
  );
}

export default RegisterForm;
