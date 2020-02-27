import React from 'react';
import { VoteOption } from './VoteOption';

function VoteOptionList({ voteOptions }) {
  return voteOptions.map(option => <VoteOption text={option.text} />);
}

export { VoteOptionList };
