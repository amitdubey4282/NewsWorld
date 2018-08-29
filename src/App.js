import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    newsdata: '',
    USnewsflag: false,
    SportsNewsFlag: true
  };

  //var apikey='52512f75704c4b7f853eac0646de1e5c';
  //https://developer.nytimes.com/top_stories_v2.json#/README
  filterCategory() {
    this.USnews =
      this.state.newsdata.results &&
      this.state.newsdata.results.filter(data => data.section === 'U.S.');

    this.SportsNews =
      this.state.newsdata.results &&
      this.state.newsdata.results.filter(data => data.section === 'Sports');
  }
  componentDidMount() {
    fetch(
      'http://api.nytimes.com/svc/topstories/v2/home.json?api-key=52512f75704c4b7f853eac0646de1e5c'
    )
      .then(response => response.json())
      .then(data => this.setState({ newsdata: data }));
  }
  activateLasers(e, url) {
    window.open(url, '_blank');
  }
  toggleNews(e) {
    this.setState({ USnewsflag: !this.state.USnewsflag });
    this.setState({ SportsNewsFlag: !this.state.SportsNewsFlag });
  }
  render() {
    this.filterCategory();

    const divStyle = {
      margin: '40px'
    };
    const pStyle = {
      fontSize: '15px',
      textAlign: 'center'
    };

    const headerStyle = {
      margin: '50px',
      border: '5px  black'
    };

    {
      this.toFetch = this.state.USnewsflag ? this.USnews : this.SportsNews;
    }
    return (
      <fragment>
        <h1 style={headerStyle}>Top Stories Trending in US</h1>
        <button
          style={{ marginLeft: 60, backgroundColor: 'pink' }}
          onClick={e => this.toggleNews(e)}
        >
          Change news Category
        </button>
        <ul>
          {this.toFetch &&
            this.toFetch.map(data => {
              return (
                <div style={divStyle}>
                  <li>{data.subsection}</li>
                  <li>{data.title}</li>
                  <li>
                    <button onClick={e => this.activateLasers(e, data.url)}>
                      Acesss The full News
                    </button>
                  </li>
                </div>
              );
            })}
        </ul>
      </fragment>
    );
  }
}

export default App;
