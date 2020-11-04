import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import singleSong from '../queries/aSongDetail';
import LyricCreate from './LyricsCreate';
import LyricList from './LyricsList';

class SongDetail extends Component {
      render() {
            // console.log(this.props);
            if(this.props.data.loading) {
                  return (<div>Loading...</div>)
            }
            return (
                  <div className="container">
                        <Link to="/">Back</Link>
                        <h3>Selected Music: { this.props.data.song.title }</h3>
                        <LyricList lyrics={this.props.data.song.lyrics}/>
                        <br />
                        <LyricCreate id={this.props.params.id}/>
                  </div>
            )
      }
}

// Passing parameter to the QUERY instead of MUTATION that is loaded after some action
export default graphql(singleSong,{
      options: (props) => {
            return {
                  variables: {
                        id: props.params.id
                  }
            }
      }
}) (SongDetail);
