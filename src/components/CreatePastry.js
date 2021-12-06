import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreatePastry extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      type:'',
      name:'',
      ppu:'',
      batters:'',
      topping:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      id: this.state.id,
      type: this.state.type,
      name: this.state.name,
      ppu: this.state.ppu,
      batters: this.state.batters,
      topping: this.state.topping
    };

    axios
      .post('http://localhost:8082/api/pastries', data)
      .then(res => {
        this.setState({
          id: '',
          type:'',
          name:'',
          ppu:'',
          batters:'',
          topping:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreatePastry!");
      })
  };

  render() {
    return (
      <div className="CreatePastry">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Pastry List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Pastry</h1>
              <p className="lead text-center">
                  Create new pastry
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Name of the Pastry'
                    name='id'
                    className='form-control'
                    value={this.state.id}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='type'
                    name='type'
                    className='form-control'
                    value={this.state.type}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='name'
                    name='name'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Price of pastry per unit'
                    name='price'
                    className='form-control'
                    value={this.state.ppu}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='batters'
                    name='batters'
                    className='form-control'
                    value={this.state.batters}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='toppings'
                    name='toppings'
                    className='form-control'
                    value={this.state.toppings}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePastry;