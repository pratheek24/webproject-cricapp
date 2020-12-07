
import React, { Component } from 'react'
import axios from "axios";


const Matches = props => (
    <tr>
      <td>{props.matches.name}</td>
      <td>{props.matches.date}</td>
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
        axios.get('http://localhost:5050/schedule').then(res => {
          this.setState({matches : res.data})
        }).catch((err) => {
            console.log(err);
        })
       console.log(this.state.matches);
    }

    IntMatches() {
        return this.state.matches.map(intmatch => {
          return <Matches matches={intmatch} key={intmatch.unique_id}/>;
        })
      }

    render() {
        return (
            <div class="kol">
              
          <h3 class="v" style={{'textAlign':'center'}}>UPCOMING INTERNATIONAL FIXTURES</h3>
        <table class="table table-hover table-bordered nn">
          <thead className="thead-dark">
            <tr>
              <th class="j">MATCHES</th>
              <th class="j">DATE</th>
            </tr>
          </thead>
          <tbody>
            { this.IntMatches() }
          </tbody>
        </table>
                
            </div>
        )
    }
}
