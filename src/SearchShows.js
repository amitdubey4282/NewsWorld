import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import saveAllShows, { searchShows, SEARCH_SHOWS } from './action/Index';
import { connect } from 'react-redux';
import handleShows from './reducers/Index';

class SearchShows extends Component {
  state = {
    query: ''
  };

  handleChange(e) {
    this.setState({ query: e.target.value });
    this.props.searchShows(this.state.query);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          id="fname"
          name="fname"
          value={this.state.query}
          onChange={e => this.handleChange(e)}
        />

        {this.props.searchedShows &&
          this.props.searchedShows.map(data => {
            if(data.show.image){
            return (
            <span>
            <span className ='image'>{<img src={data.show.image.medium} />}</span>
            <span>{<a href={data.show.url}>Visit Info Page</a>}</span> 
            </span>
          )
            }
          })}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    searchShows: data => {
      dispatch(searchShows(data));
    }
  };
};

const mapStateToProps = state => {
  return {
    searchedShows: state.searchedShows
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchShows);
