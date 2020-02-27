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
} from './components';


function App() {

  function updateVoteResults(vote, state, setState) {
    const { results } = state;

    // find the vote and ovewrite it to 100%
    // this is only local right now, so we can
    // just update for one vote until we add Firebase
    const newResults = results.map(result => {
      if(result.id === vote.id) {
        return { ...result, percentage: '100%', selected: true };
      }
      return result;
    });

    // update state
    setState({
      ...state,
      voted: true,
      results: newResults,
    });
  }

  const options = [
    { id: 'Chocolate', text: 'Chocolate' },
    { id: 'Vanilla', text: 'Vanilla' },
    { id: 'Strawberry', text: 'Strawberry' },
    { id: 'Rocky Road', text: 'Rocky Road' },
  ];

  const results = options.map(option => ({ ...option, percentage: '0%' }));

  const [state, setState] = React.useState({ 
    question: { title: 'What is your favorite ice cream flavor?' },
    options, 
    results,
    voted: false,
  });

  const viewToRender = state.voted ? 
    <VoteResultList
      voteResults={state.results} /> :
    <VoteOptionList 
      onClick={option => { updateVoteResults(option, state, setState); }}
      voteOptions={state.options} />;

  return (
    <Container>

      <Header />

      <MainSection>

        <SubSection>
          
          <QuestionHeading>
            {state.question.title}
          </QuestionHeading>

        </SubSection>

        <SubSection>

          {viewToRender}

        </SubSection>

        <SubSection>

          <BetweenSection>
            
            <span>&nbsp;</span>

            <span>3,412 votes</span>

          </BetweenSection>

        </SubSection>

      </MainSection>

    </Container>
  );
}

export default App;
