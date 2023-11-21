import { useState } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home.jsx';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});


function App() {
  const [count, setCount] = useState(0)

  return (
    <ApolloProvider client={client}>
      <Home />
      </ApolloProvider>
  )
}

export default App
