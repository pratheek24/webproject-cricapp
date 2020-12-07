import React, { Component } from 'react'
import axios from "axios";

const Matches = props => (
    <tr>
      <td>{props.matches.stat}</td>
      <td>{props.matches.score}</td>
      <td>{props.matches.description}</td>
      
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
        axios.get('http://localhost:5050/scorecard/'+this.props.match.params.id).then(res => {
          this.setState({matches:JSON.parse(JSON.stringify(res.data).replaceAll('&amp;','Followed on'))})
          console.log(res)
        }).catch((err) => {
            console.log(err);
        })
       console.log(this.state.matches);
    }

    Score() {
        
          return <Matches matches={this.state.matches}/>;
        
      }

    render() {
        return (
           
            <div class="kol">
              
              <h3 class="v" style={{'textAlign':'center'}}>MATCH STATUS</h3>
        <table className="table table-bordered table-hover nn">
          <thead className="thead-dark ">
            <tr>
              <th>status</th>
              <th>Score</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            { this.Score() }
          </tbody>
        </table>
        <div className=" container-fluid background1">

        </div>
                
            </div>
        )
    }
}
