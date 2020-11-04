import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import SongList from './components/songlist';
import App from './components/App';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetails';

// Identify the element from the apollo store :: LyricsCreate.js like 18 solution
// 1. Go and fetch every peace of data you need
// 2. Look at every single record
// 3. Use the ID field of the record to identify the data
const client = new ApolloClient({
    dataIdFromObject: o => o.id
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
        </Route>
        <Route path="/song/new" component={SongCreate}>
        </Route>
        <Route path="/song/:id" component={SongDetail}>
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
