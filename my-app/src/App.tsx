import React from 'react';
import Header from './components/Header';

import './App.scss';

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client"
import { Route, Routes } from 'react-router-dom';
import Loading from 'pages/Loading';

const Home = React.lazy(() => import("./pages/Home"))
const Users = React.lazy(() => import("./pages/Users"))

const link = from([
  new HttpLink({ uri: "http://localhost:3001/graphql" })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
})

function App() {
  return (
    <ApolloProvider client={client}>
      <main >
        <Header />
        <Routes>
          <Route path="/" element={
            <React.Suspense fallback={<Loading />}>
              <Home />
            </React.Suspense>
          } />
          <Route path="users" element={
            <React.Suspense fallback={<Loading />}>
              <Users />
            </React.Suspense>
          } />
        </Routes>
      </main>
    </ApolloProvider>
  );
}

export default App;

