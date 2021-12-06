import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './PastryCard';

class ShowPastryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pastries: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/patries')
      .then(res => {
        this.setState({
          pastries: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowPastryList');
      })
  };


  render() {
    const pastries = this.state.pastries;
    console.log("PrintPastry: " + pastries);
    let pastryList;

    if(!pastries) {
      pastryList = "there is no pastry record!";
    } else {
      pastryList = pastries.map((pastry, p) =>
        <PastryCard pastry={pastry} key={p} />
      );
    }

    return (
      <div className="ShowPastryList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Pastries List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-pastry" className="btn btn-outline-warning float-right">
                + Add New Pastry
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {pastryList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowPastryList;