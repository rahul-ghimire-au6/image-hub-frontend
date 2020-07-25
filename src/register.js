import React, { Component, Fragment } from 'react'
import Input1 from './components/input'
import login_img from './img/register1.png'
import './css/register.css'
import Nav1 from './components/navbar'


export default class login extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            password:''
        }
    

    }
    handlechange=(e)=>{
        if(e.target.name==='name'){
            this.setState({name:e.target.value})
        }
        if(e.target.name==='email'){
            this.setState({email:e.target.value})
        }
        if(e.target.name==='password'){
            this.setState({password:e.target.value})
        }
    }
    handlesubmit=(e)=>
    {
        e.preventDefault()
        let data={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://image-hub-159.herokuapp.com/signup";
        fetch(proxyurl+url,{
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
                alert('congratulations signup successfull')
                window.location.href = "/home";
            }
        })
        .catch(err=>console.log(err))
        console.log(data)
    }

    render() {
        return (
            <Fragment>
                <Nav1/>
                <center><div className='register_container'><br/><br/>
                <div>
                    <img src={login_img} alt='login' className='register_img'/>
                    </div>
                <div>
                <div style={{display:'flex',marginLeft:'8em',marginTop:'2em'}}>
                <div style={{marginTop:'0.4em'}}>
                <h1>Registration</h1><br/>
                </div>
                <div>
                <i className="material-icons" style={{fontSize:'4.5em'}}>login</i>                                                 
                    </div>
                    </div>
                    {/* end */}
                    {/* logo */}
                    <div className='mini_logo_container'>
                    <div className='facebook_logo'>
                    <img src="https://img.icons8.com/material-two-tone/30/000000/facebook-f--v2.png" alt='facebook' style={{marginTop:'0.5em'}}/>
                    </div>
                    <div className='google_logo'>
                    <img src="https://img.icons8.com/material-rounded/30/000000/google-logo.png" alt='google' style={{marginTop:'0.5em'}}/>
                    </div>
                    <div className='linkedin_logo'>
                    <img src="https://img.icons8.com/windows/30/000000/linkedin-2.png" alt='linkedin' style={{marginTop:'0.5em'}}/>
                    </div>        
                        </div>
                        {/* end */}
                        <div style={{marginLeft:'6em',marginTop:'3em'}}>
                            <p style={{fontWeight:'500'}}>or use your email for registration</p>
                            </div>
                        <form className='form1' style={{marginLeft:'6em'}} onSubmit={this.handlesubmit}>
                        <Input1 typevalue={'text'} placeholdervalue={'Name'} namevalue={'name'} classvalue={'name_register'} inputvalue={this.state.name} onchangevalue={this.handlechange}/><br/>
                        <Input1 typevalue={'email'} placeholdervalue={'Email'} namevalue={'email'} classvalue={'email_register'} inputvalue={this.state.email} onchangevalue={this.handlechange}/><br/>
                        <Input1 typevalue={'password'} placeholdervalue={'Password'} namevalue={'password'} classvalue={'password_register'} inputvalue={this.state.password} onchangevalue={this.handlechange}/><br/>
                        <Input1 typevalue={'submit'} inputvalue={'Register'} namevalue={'Register'} classvalue={'btn btn-outline-dark button_register'}/><br/>
                        </form>
                        </div>
                </div></center>               
            </Fragment>
        )
    }
}
