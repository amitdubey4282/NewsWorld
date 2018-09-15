import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import saveAllShows from './action/Index';
import { connect } from 'react-redux';
import handleShows from './reducers/Index';

class AllShows extends React.Component {
  render() {
    const divStyle = {
      margin: '40px'
    };

    const headerStyle = {
      margin: '50px',
      border: '5px  black',
      display: 'inline-block'
    };

    const li = {
      display: 'inline-block',
      margin: '10px'
    };
    return (
      <fragment>
        <h1 style={headerStyle}>All Shows Streaming now</h1>
        <span>
          <Link to="/Search">Search your favourite</Link>{' '}
        </span>

        <ul>
          {this.props.allShows &&
            this.props.allShows.map(data => {
              return (
                <li style={li}>
                  <div>{data.name}</div>
                  <div>{<img src={data.image.medium} />}</div>
                  <div>{<a href={data.url}>Visit Info Page</a>}</div>
                  {data.genres.map(list => (
                    <span>{list + ','}</span>
                  ))}
                </li>
              );
            })}
        </ul>
      </fragment>
    );
  }
}

export default AllShows;
