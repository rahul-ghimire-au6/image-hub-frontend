import React, { Component, Fragment } from 'react'
import './css/App.css'
import Nav1 from './components/navbar'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://image-hub-159.herokuapp.com/get_image_public";

        fetch(url)
        .then(res=>res.json())
        .then(data1=>{
            console.log(data1)
            this.setState({data:data1.data})
        })
        .catch(err=>console.log(err))

    }

    render() {
        let yahoo = this.state.data.map(element=>(
            <div key={element.id} className='img_con'>
                <div style={{marginLeft:'3em'}}>
                <h4>Title:- {element.title}</h4>
                </div>
                <center><div>
                <img src={element.img_url} alt='photorebaba' style={{width:'15em',height:'20em'}}/>
                </div></center>
                <div>
                    <h5 style={{textAlign:'center'}}>Uploaded_By:- {element.uploaded_by}</h5>
                    </div>
                </div>
        ))

        return (
            <Fragment>
                <Nav1/>
                <center><h1>Welcome To Image Hub</h1></center>
                <div style={{display:'flex',marginTop:'5em', flexWrap:'wrap'}}>
                    {this.state.data.length===0?<div className="loader">Loading...</div>:yahoo}
                </div>
            </Fragment>
        )
    }
}
