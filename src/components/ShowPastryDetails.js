import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showPastryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pastry: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/pastries/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          pastry: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowPastryDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/pastries/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowPastryDetails_deleteClick");
      })
  };


  render() {

    const pastry = this.state.pastry;
    let PastryItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>ID</td>
            <td>{ pastry.id }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Name</td>
            <td>{ pastry.name }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>type</td>
            <td>{ pastry.type }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>topping</td>
            <td>{ pastry.topping }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Batters</td>
            <td>{ pastry.batters }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>PPU</td>
            <td>{ pastry.ppu }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowPastryDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Pastry List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Pastry's Record</h1>
              <p className="lead text-center">
                  View Pastry's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { PastryItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,pastry._id)}>Delete Pastry</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-pastry/${pastry._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Pastry
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Pastry</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Pastry</button> */}

        </div>
      </div>
    );
  }
}

export default showPastryDetails;