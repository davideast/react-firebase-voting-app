import React from 'react';
import { 
  Header,
  MainSection, 
  SubSection, 
  QuestionHeading,
  VoteOptionList, 
  VoteResultList,
  Container,
  BetweenSection,
} from '../components';
import { 
  useFirestoreDocData, 
  useFirestoreCollectionData, 
  useFirestore 
} from 'reactfire';
import { firestore } from 'firebase/app';

function calculateResults(votes, options, voted = {}) {
  let totalCount = 0;
  const voteCounts = options.map(option => {
    const vote = votes.find(vote => vote.id === option.id) 
      || { id: option.id, count: 0 };
    totalCount = totalCount + vote.count;
    return vote;
  });

  const results = voteCounts.map(vote => {
    return {
      ...vote,
      selected: vote.id === voted.id,
      text: vote.id,
      percentage: `${Math.round((vote.count / totalCount) * 100)}%`
    };
  });

  return { totalCount, results };
}

function updateVoteResults(vote, votesCol, setVoted) {
  votesCol.doc(vote.id).set(
    { count: firestore.FieldValue.increment(1) }, 
    { merge: true }
  );
  setVoted(vote);
}

export default function VoteView({ pollId }) {
  const db = useFirestore();
  const settings = { idField: 'id' };
  const docRef = db.collection('polls').doc(pollId);
  const votesCol = docRef.collection('votes');
  const data = useFirestoreDocData(docRef, settings);
  const votes = useFirestoreCollectionData(votesCol, settings);
  const { question, options } = data;
  const [voted, setVoted] = React.useState();
  const { totalCount, results } = calculateResults(votes, options, voted);
  
  const viewToRender = voted ? 
    <VoteResultList
      voteResults={results} /> :
    <VoteOptionList 
      onClick={option => { updateVoteResults(option, votesCol, setVoted); }}
      voteOptions={options} />;

  return (
    <Container>

      <Header />

      <MainSection>

        <SubSection>
          
          <QuestionHeading>{question}</QuestionHeading>

        </SubSection>

        <SubSection>

          {viewToRender}

        </SubSection>

        <SubSection>

          <BetweenSection>
            
            <span>&nbsp;</span>

            <span>{totalCount.toLocaleString()} votes</span>

          </BetweenSection>

        </SubSection>

      </MainSection>

    </Container>
  );
}
