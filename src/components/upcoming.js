import React, { Component } from 'react'
import axios from "axios";
import "../App.css"
const Matches = props => (
    <tr>
      <td>{props.matches['date'.toLocaleString()].split('T')[0]}</td>
    
      <td>{props.matches['team-1']}</td>
      <td>{props.matches['team-2']}</td>
      
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
        axios.get('http://localhost:5050/upcoming').then(res => {
          this.setState({matches :res.data})
        }).catch((err) => {
            console.log(err);
        })
       console.log(this.state.matches);
    }

    UpcomingMatches() {
        return this.state.matches.map(nextmatch => {
          return <Matches matches={nextmatch} key={nextmatch.unique_id}/>;
        })
      }

    render() {
        return (
            <div class="kol">
              
              <h3 class="v" style={{'textAlign':'center'}}>UPCOMING FIXTURES</h3>
        <table className="table table-hover table-bordered nn" >
          <thead className="thead-dark">
            <tr>
              <th>DATE</th>
              <th>HOME TEAM</th>
              <th>AWAY TEAM</th>
            </tr>
          </thead>
          <tbody>
            { this.UpcomingMatches() }
          </tbody>
        </table>
                
            </div>
        )
    }
}
