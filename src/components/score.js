import React, { Component } from 'react'
import axios from "axios";
import {Link} from "react-router-dom";


const Matches = props => (
    <tr>
      <td>{props.matches.description}</td>
      
      <td><Link to={"/scorecard/"+props.matches.unique_id}>ScoreCard</Link></td>
      
    </tr>
  )

export default class score extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            matches : []
        };
    }  
    
    componentDidMount(){
        axios.get('http://localhost:5050/score').then(res => {
          this.setState({matches:JSON.parse(JSON.stringify(res.data).replaceAll('&amp;','Followed on'))})
        }).catch((err) => {
            console.log(err);
        })
       console.log(this.state.matches);
    }

    

    CurrentMatches() {
        return this.state.matches.map(currentmatch => {
          return  <Matches matches={currentmatch} key={currentmatch.unique_id}/>;
            
        })
      }

    render() {
        return (
            <div className="kol">
              
        <h3 class="l" style={{'textAlign':'center'}}>ONGOING MATCHES</h3>
        <table className="table table-bordered table-hover nn">
          <thead className="thead-dark">
            <tr>
              <th class="j">MATCHES</th>
              <th class="j">SCOREBOARD</th>
            </tr>
          </thead>
          <tbody>
            { this.CurrentMatches() }
          </tbody>
        </table>
                
            </div>
        )
    }
}
