
import axios from 'axios';
import React, { Component } from 'react'


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            error:''
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
        axios.post(`http://localhost:5050/signin`,{userName:this.state.username,password:this.state.password})
        .then(res => {
            console.log(res)
             if(res.data.st === 'successful'){
                 console.log('SUCCESSFULL');
                
             }
             else{
                this.setState({error:"Wrong Details! Try Again..."});
                console.log(this.state.error)
             }
        }).catch(error => this.setState({error:"Wrong Details! Try Again..."}));
        window.location = "./score";
    }
    
    render() {
        return (
        <div className=" container-fluid background" >
            <div >
                <div >
            
                <form  onSubmit={this.handleSubmit}>
                    <div className=" form-container form-group ">
                        <div >
                        <label class="oi">UserName</label>
                        <input type="text" className="form-control gk" placeholder="Username" id="xyz" name="username" value={this.state.username} onChange={this.handleName} required />
                        <br></br>
                        <label class="oi">Password</label>
                        <input type="password" className="form-control gk" placeholder="Password" id="password" name="password" value={this.state.password} onChange={this.handlePass} required />
                        <br></br>
                        <input type="submit" className="form-control btn-info gk btn btn-secondary" value="Submit"/>
                        <br></br></div><br></br>
                        
                        <p class="oi">Don't have an account?<br></br><br></br>< a class="kj linkin" href="http://localhost:3000/signup" >Register now</a></p>
                        
                    </div>
                </form>
            <div>
                <h6>{this.state.error}</h6>
            </div>
            </div>
        </div>
    </div>
        )
    }
}