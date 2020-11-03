import React, { Component } from "React";
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import query from "../queries/fetchSongs";
import mutation from "../queries/createSongs";

class SongCreate extends Component {

      sleep(ms) {
            return new Promise(
                  resolve => setTimeout(resolve, ms)
            );
      }

      constructor(props) {
            super(props);
            this.state = { title: ''};
      }

      onSubmit(event) {
            event.preventDefault();
            // Embed the variable to mutation GQL query
            this.props.mutate ({
                  variables: {title: this.state.title},
                  refetchQueries: [{ query: query, /*variables: <Vars that can be passed> */ }]
            }).then(() => {
                  this.sleep(1000);
                  hashHistory.push('/')
            });
      }

      render() {
            return (
                  <div className="container">
                        <Link to="/">Back</Link>
                        <br />                        
                        <h3>Create A New Song</h3>                    
                        
                        <form onSubmit={this.onSubmit.bind(this)}>
                              <label>Song Title</label>
                              <input 
                                    onChange={event => this.setState({title: event.target.value})}
                                    value={ this.state.title }
                              />
                       </form> 
                  </div>
            );
      }
}

// const mutation = gql`
      // mutation AddSong($title: String) {
      // addSong(title: $title){
            // title
      // }
// }
// `;

export default graphql(mutation) (SongCreate);