import React, { Component } from 'react'
import "./main1.css"
import {Link} from 'react-router-dom'



export default class home extends Component {
   
    
   
    

   

    render() {
        return (
           <div className=" container-fluid background2">
               <img  class="logoq" src="logo.png" alt="logo" />
              <div class="asa">
                  <Link to = "/signin"><button class="btn btn-primary">Signin</button></Link>
              </div>
                
           </div>
        )
    }
}

