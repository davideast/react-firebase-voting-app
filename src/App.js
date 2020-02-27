import React from 'react';
// import { VoteView } from './pages/VoteView';
import { Router } from "@reach/router"
import { Container } from './components';

const VoteView = React.lazy(() => import('./pages/VoteView'));

function VoteWrapper(props) {
  return (
    <React.Suspense fallback={<LoadingView />}>
      <VoteView />
    </React.Suspense>
  )
}

function LoadingView() {
  return (
    <Container>
      <h1 className="text-5xl">
        Loading...
      </h1>
    </Container>
  )
}

function App() {
  return (
    <Router>
      <VoteWrapper path="/" />
      <VoteWrapper path="/vote/:id" />
    </Router>
  )
}

export default App;
