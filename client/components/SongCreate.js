import React, { Component } from "React";
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongCreate extends Component {
      constructor(props) {
            super(props);
            this.state = { title: ''};
      }

      onSubmit(event) {
            event.preventDefault();

      }

      render() {
            return (
                  <div>
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
// 
// const mutation = gql`
      // mutation {
      // addSong(title: "Ass Cooker"){
            // id
            // title
      // }
// }
// `;

export default SongCreate;