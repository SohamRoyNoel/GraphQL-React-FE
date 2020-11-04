import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import addLyrics from '../queries/addLyrics';

class LyricList extends Component {

      renderSongs(){
      return this.props.lyrics.map(({ id, content }) => {
                  return(
                        
                              <li key={id} className="collection-item">
                                          {content}
                                    <i 
                                          className="material-icons right "
                                          onClick={() => this.onDelete(id)}
                                          style= {{ cursor:"pointer" }}
                                    >thumb_up</i>
                              </li>
                  )
            })
      }

      render() {
            return (
                  <div>
                        <ul className="collection">
                              {this.renderSongs()}
                        </ul>
                  </div>
            )
      }
}

export default LyricList;