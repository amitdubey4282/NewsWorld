import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import saveAllShows from './action/Index';
import { connect } from 'react-redux';
import handleShows from './reducers/Index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllShows from './AllShows';
import SearchShows from './SearchShows';
class App extends Component {
  componentDidMount() {
    this.props.saveAllShows();
  }
  render() {
    const li = {
      display: 'inline'
    };

    const pStyle = {
      fontSize: '15px',
      textAlign: 'center'
    };

    return (
      <fragment>
        <Route
          exact
          path="/"
          render={() => (
            <AllShows
              allShows={this.props.allShows}
              handleChange={e => this.handleChange(e)}
            />
          )}
        />
        <Route
          exact
          path="/Search"
          render={() => (
            <SearchShows />
          )}
        />
        
        </fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    allShows: state.allShows
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveAllShows: () => {
      dispatch(saveAllShows());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
