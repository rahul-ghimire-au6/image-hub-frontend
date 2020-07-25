import React, { Component, Fragment } from 'react'
import Input1 from './components/input'
import login_img from './img/login.jpg'
import './css/login.css'
import Nav1 from './components/navbar'

export default class login extends Component {
    constructor(props){
        super(props)
        this.state={
            email1:'',
            password1:''
        }
    }

    handlechange=(e)=>{
        if(e.target.name==='email'){
            this.setState({email1:e.target.value})
        }
        if(e.target.name==='password'){
            this.setState({password1:e.target.value})
        }
    }
    handlesubmit=(e)=>
    {
        e.preventDefault()
        let data={
            email:this.state.email1,
            password:this.state.password1
        }
        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://image-hub-159.herokuapp.com/login";
        fetch(url,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin":"*"
              },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            localStorage.setItem("token", JSON.stringify(data.token));
            if(data.value==='success'){
                alert('congratulations login successfull')
                window.location.href = "/home";
            }
            else{
                alert(data.message)
            }
        })
        .catch(err=>console.log(err))
        console.log(data)
    }




    render() {
        return (
            <Fragment>
                 <Nav1/>
                <center><div className='login_container'><br/><br/>
                <div>
                    <img src={login_img} alt='login' className='login_img'/>
                    </div>
                <div>
                <div style={{display:'flex',marginLeft:'10em',marginTop:'5em'}}>
                <div style={{marginTop:'0.4em'}}>
                <h1>Login</h1><br/>
                </div>
                <div>
                <i className="material-icons" style={{fontSize:'4.5em'}}>login</i>                                       
                    </div>
                    </div>
                        {/* end */}
                        {/* logo */}
                    <div className='mini_logo_container1'>
                    <div className='facebook_logo1'>
                    <img src="https://img.icons8.com/material-two-tone/30/000000/facebook-f--v2.png" alt='facebook' style={{marginTop:'0.5em'}}/>
                    </div>
                    <div className='google_logo1'>
                    <img src="https://img.icons8.com/material-rounded/30/000000/google-logo.png" alt='google' style={{marginTop:'0.5em'}}/>
                    </div>
                    <div className='linkedin_logo1'>
                    <img src="https://img.icons8.com/windows/30/000000/linkedin-2.png" alt='linkedin' style={{marginTop:'0.5em'}}/>
                    </div>        
                        </div>
                        {/* end */}
                        <div style={{marginLeft:'7em',marginTop:'3em'}}>
                            <p style={{fontWeight:'500'}}>or use your email for registration</p>
                            </div>
                        <form className='form1' style={{marginLeft:'7em'}} onSubmit={this.handlesubmit}>
                        <Input1 typevalue={'email'} placeholdervalue={'Email'} namevalue={'email'} classvalue={'email_login'} onchangevalue={this.handlechange} inputvalue={this.state.email}/><br/>
                        <Input1 typevalue={'password'} placeholdervalue={'Password'} namevalue={'password'} classvalue={'password_login'} onchangevalue={this.handlechange} inputvalue={this.state.password}/><br/>
                        <Input1 typevalue={'submit'} inputvalue={'Login'} namevalue={'Login'} classvalue={'btn btn-outline-dark button_login'}/><br/>
                        </form>
                        </div>
                </div></center>               
            </Fragment>
        )
    }
}
