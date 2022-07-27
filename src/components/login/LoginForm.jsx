function LoginForm({handleChange, handleSubmit}) {
    return (
      <form 
          className='login-form' 
          onSubmit={handleSubmit}>
        <input
          className='login-form-input' 
          type='email' 
          label='Email'
          variant='outlined' 
          name='email' 
          onChange={handleChange} >
        </input>
        <input
          className='login-form-input'
          type='password'
          label='Password'
          variant='outlined'
          name='password'
          onChange={handleChange}
        >
        </input>

        <button id='login-submit-button' type='submit' variant='contained'>
          Login
        </button>
      </form>
    );
}

export default LoginForm
