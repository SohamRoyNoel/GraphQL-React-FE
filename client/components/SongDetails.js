import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import singleSong from '../queries/aSongDetail';

class SongDetail extends Component {
      render() {
            console.log(this.props);
            return (
                  <div>
                        <h3>SongDetail</h3>
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
