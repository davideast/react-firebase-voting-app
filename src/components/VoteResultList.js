import React from 'react';
import { VoteResult } from './VoteResult';

function VoteResultList({ voteResults }) {
  return voteResults.map(result => {
    return <VoteResult 
      key={result.id}
      text={result.text} 
      percentage={result.percentage} 
      selected={result.selected} />;
  });
}

export { VoteResultList };
