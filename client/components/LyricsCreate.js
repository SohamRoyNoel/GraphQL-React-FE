import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import addLyrics from '../queries/addLyrics';

class LyricCreate extends Component {

      constructor(props) {
            super(props);
            this.state = { content: ''};
      }

      onSubmit(event) {
            event.preventDefault();
            //console.log(this.props);
            //Embed the variable to mutation GQL query
            this.props.mutate ({
                  variables: {content: this.state.content, songId: this.props.id },
                  //refetchQueries: [{ query: query, /*variables: <Vars that can be passed> */ }] :: this approach can be used to refresh the lyrics that is added now :: Solution : Caching with data field by ID
            }).then(
                  () => this.setState({ content: ' ' })
            );
      }

      render() {            
            return(
                  <form onSubmit={this.onSubmit.bind(this)}>
                        <label>Add Lyrics</label>
                        <input
                              onChange={event => this.setState({content: event.target.value})}
                              value={ this.state.content }
                         />
                  </form>
            )
      }
}

export default graphql(addLyrics) (LyricCreate);