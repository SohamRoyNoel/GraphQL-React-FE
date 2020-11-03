import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from "../queries/fetchSongs";
import deleteMutation from "../queries/deleteSongs";

class SongList extends Component {
      onDelete(id){
            // console.log(event);
            this.props.mutate({ 
                  variables: {id},
                  //refetchQueries: [{ query: query, /*variables: <Vars that can be passed> */ }] :: Query Association: query belongs to this component
            }).then(() => this.props.data.refetch());
      }

      renderSongs(){
            return this.props.data.songs.map(({ id, title }) => {
                  return(
                        
                              <li key={id} className="collection-item">
                                    <Link to={`/song/${id}`}>
                                          {title}
                                    </Link>
                                    <i 
                                          className="material-icons right "
                                          onClick={() => this.onDelete(id)}
                                          style= {{ cursor:"pointer" }}
                                    >delete</i>
                              </li>
                  )
            })
      }
      
      render(){
            if(this.props.data.loading){
                 return(<div>Loading....</div>)
            }
            return(
                  <div>
                        <ul className="collection">
                              {this.renderSongs()}
                        </ul>
                        <Link 
                              to="/song/new"
                              className="btn-floating btn-large red right">
                                    <i className="material-icons">add</i>
                        </Link>
                  </div>
            )
      }
}

// Multiple query at once
export default graphql(deleteMutation) (
 graphql(query) (SongList)
);