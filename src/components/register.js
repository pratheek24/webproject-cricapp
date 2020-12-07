import React, { Component } from 'react'
import axios from "axios";
import "./main1.css"
export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:''
        }
    }

    handleName = (e) => {
        this.setState({
            username:e.target.value
        })
    }

    handlePass = (e) => {
        this.setState({
            password:e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        console.log({username:this.state.username,password:this.state.password});
        axios.post(`http://localhost:5050/signup`,{username:this.state.username,password:this.state.password})
        .then(res => console.log(res));
        window.location = "./score";
    }
    render() {
        return (
        <div className=" container-fluid background">
            <div>
                <div >
                <form  onSubmit={this.handleSubmit}>
                <div className=" form-container form-group ">
                <div >
                <div >
                <label>UserName</label>
                <input type="text" className="form-control gk" placeholder="Username" id="xyz" name="username" value={this.state.username} onChange={this.handleName} required />
                </div><br></br>
                 <div>
                <label>Password</label>
                <input type="password" className="form-control gk" placeholder="Password" id="password" name="password" value={this.state.password} onChange={this.handlePass} required />
                <br></br></div>
                <div>
                <input type="submit" className="form-control align-content-center btn btn-secondary gk" value="Submit"/>
                </div><br></br></div>
                
                <div >
                        <p class="kb" >Already have an account?<br></br><div class="now">< a class="kj linkin" href="http://localhost:3000/signin"  >Login</a></div></p>
                </div>
                </div>
                
                </form></div>
                
            
            </div>
        </div>
        )
    }
}