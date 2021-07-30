import React from 'react';

class Login extends React.Component {

  render(){
    const {value , handleChange} = this.props;
    return (
      <label htmlFor="Login-input"> Login:
        <input type="email" value={ value } onChange={ handleChange } name='login' id='Login-input' />
      </label>
    );
  }
}

export default Login;