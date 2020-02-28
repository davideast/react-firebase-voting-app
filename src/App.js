import React from 'react';
import { Router } from "@reach/router"
import { Container } from './components';
import { preloadFirestore } from 'reactfire';

const VoteView = React.lazy(() => import('./pages/VoteView'));

function VoteWrapper(props) {
  let { id } = props;
  
  // TODO(davideast): Remove later! Test only!
  id = id || 'icecream';

  preloadFirestore();

  return (
    <React.Suspense fallback={<LoadingView />}>
      <VoteView pollId={id} />
    </React.Suspense>
  );
}

function LoadingView() {
  return (
    <Container>
      <h1 className="text-5xl font-bold">
        Reticulating polls...
      </h1>
    </Container>
  )
}

function App() {
  return (
    <Router>
      <VoteWrapper path="/" />
      <VoteWrapper path="/poll/:id" />
    </Router>
  )
}

export default App;
