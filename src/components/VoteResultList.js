import React from 'react';
import { VoteResult } from './VoteResult';

function VoteResultList({ voteResults }) {
  return voteResults.map(result => {
    return <VoteResult 
      text={result.text} 
      percentage={result.percentage} 
      selected={result.selected} />;
  });
}

export { VoteResultList };
