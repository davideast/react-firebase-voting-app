import React from 'react';
import { VoteOption } from './VoteOption';

function VoteOptionList({ voteOptions, onClick }) {
  return voteOptions.map(option => {
    return <VoteOption 
      key={option.id} 
      option={option} 
      onClick={onClick} />
  });
}

export { VoteOptionList };
