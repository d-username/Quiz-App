function RegisterForm({ handleInputChange, handleRegister }) {
  return (
    <form className='login-form' onSubmit={(e) => handleRegister(e)}>
      <h1>Register</h1>

      <label>name</label>
      <input
        className='login-form-input'
        type='text'
        label='name'
        name='name'
        onChange={(e) => handleInputChange(e)}
        placeholder='name'
      ></input>

      <label>email</label>
      <input
        className='login-form-input'
        type='email'
        label='Email'
        name='email'
        onChange={(e) => handleInputChange(e)}
        placeholder='email'
      ></input>

      <label>password</label>
      <input
        className='login-form-input'
        type='password'
        label='Password'
        name='password'
        onChange={(e) => handleInputChange(e)}
        placeholder='password'
      ></input>

      <button
        id='register-submit-button'
        className='button-reset greenButton'
        type='submit'
        variant='contained'
      >
        <span class='material-symbols-outlined'>login</span>
        Register
      </button>

    </form>
  );
}

export default RegisterForm;
