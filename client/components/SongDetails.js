import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import singleSong from '../queries/aSongDetail';

class SongDetail extends Component {
      render() {
            console.log(this.props);
            if(this.props.data.loading) {
                  return (<div>Loading...</div>)
            }
            return (
                  <div className="container">
                        <Link to="/">Back</Link>
                        <h3>Selected Music: { this.props.data.song.title }</h3>
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
