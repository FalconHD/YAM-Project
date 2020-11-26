import React, { Component } from 'react';
import css from '../../style.css';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login ,register } from '../../actions/auth';
import LoginSvg  from '../../login.svg'
import LoginSvg1  from '../../login1.svg'

export  class SignInUp extends Component {
    state = {
        username: '',
        password: '',
        password: '', 
        password2:''
      };
    
      static propTypes = {
        login: PropTypes.func.isRequired,
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
      };

    componentDidMount(){
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');
    
        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });
    
        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });

    }
    onSubmit1 = (e) => {
        e.preventDefault();
        const { username, email, password, password2 } = this.state;
        if (password !== password2) {
          console.log("password not matched")
        } else {
          const newUser = {
            username,
            password,
            email,
          };
          this.props.register(newUser);
        }
      };

      onSubmit2 = (e) => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
      };
    
      onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  


    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/leads/CovCity" />;
          }
          const { username, email, password, password2 } = this.state;


       return (
        <div className="rgbody">
        <div className="login-svg">
            <img className="Logsvg" src={LoginSvg}></img>
        </div>
        <div className="rgContainer" id="container">
            <div className="rgform-container rgsign-up-container">
                <form onSubmit={this.onSubmit1} className="rgform">
                    <h1 className="rgh1">Create Account</h1>
                    <div className="rgsocial-container">
                        <a className="rga" href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a className="rga" href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a className="rga" href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span className="rgspan">or use your email for registration</span>
                    <input className="rginput" value={username} name ='username' onChange={this.onChange} type="text" placeholder="Name" />
                    <input className="rginput" value={email} name ='email' onChange={this.onChange}  type="email" placeholder="Email" />
                    <input className="rginput" value={password} name ='password' onChange={this.onChange}  type="password" placeholder="Password" />
                    <input className="rginput" value={password2} name ='password2' onChange={this.onChange}  type="password" placeholder="Confirm Password" />
                    <button  className="rgbutton">Sign Up</button>
                </form>
            </div>
            <div className="rgform-container rgsign-in-container">
                <form onSubmit={this.onSubmit2} className="rgform" action="#">
                    <h1 className="rgh1">Sign in</h1>
                    <div className="rgsocial-container">
                        <a className="rga" href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a className="rga" href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a className="rga" href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span className="rgspan">or use your account</span>
                    <input className="rginput" value={username} name ='username' onChange={this.onChange}  type="text" placeholder="Name" />
                    <input className="rginput" value={password} name ='password' onChange={this.onChange}  type="password" placeholder="Password" />
                    <a className="rga" href="#">Forgot your password?</a>
                    <button className="rgbutton"> Sign In </button>
                </form>
            </div>
            <div className="rgoverlay-container">
                <div className="rgoverlay">
                    <div className="rgoverlay-panel rgoverlay-left">
                        <h1 className="rgh1">Welcome Back!</h1>
                        <p className="rgp">To keep connected with us please login with your personal info</p>
                        <button className="rgghost rgbutton" id="signIn">Sign In</button>
                    </div>
                    <div className="rgoverlay-panel rgoverlay-right">
                        <h1 className="rgh1">Hello, Friend!</h1>
                        <p className="rgp">Enter your personal details and start journey with us</p>
                        <button  className="rgghost rgbutton" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
    </div>
    <div className="login-svg">
            <img className="Logsvg2" src={LoginSvg1}></img>
        </div>
    </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });


export default connect(mapStateToProps, { register, login })(SignInUp);