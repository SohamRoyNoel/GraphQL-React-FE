import { optimistic } from 'apollo-client/optimistic-data/store';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import likeLyrics from '../queries/likeLyrics';

class LyricList extends Component {

      onLike(id, likes){
            console.log("Hell : " + id);
            this.props.mutate({
                  variables: {id: id },
                  optimisticResponse: {
                        __typename: 'Mutation',
                        likeLyric: {
                              id: id,
                              __typename: 'LyricType',
                              likes: likes + 1
                        }
                  }
            })
      }

      renderSongs(){
      return this.props.lyrics.map(({ id, content, likes }) => {
                  return(
                        
                              <li key={id} className="collection-item">
                                          {content}
                                    <i 
                                          className="material-icons right "
                                          onClick={() => this.onLike(id, likes)}
                                          style= {{ cursor:"pointer" }}
                                    >thumb_up</i>
                                    <div className="right">{likes}</div>
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

export default graphql(likeLyrics) (LyricList);