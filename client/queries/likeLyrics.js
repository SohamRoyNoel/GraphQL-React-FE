import gql from 'graphql-tag';

export default gql`
mutation likeLyrics($id: ID){
  likeLyric(id:$id){
    id
    likes
    content
  }
}
`;