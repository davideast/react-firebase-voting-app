import React from 'react';
import { 
  Header,
  MainSection, 
  SubSection, 
  QuestionHeading,
  VoteOptionList, 
  Container,
  BetweenSection,
} from './components';

function App() {

  const voteResults = [
    { id: 'Chocolate', text: 'Chocolate', percentage: '42%', selected: true },
    { id: 'Vanilla', text: 'Vanilla', percentage: '18%' },
    { id: 'Strawberry', text: 'Strawberry', percentage: '9%' },
    { id: 'Rocky Road', text: 'Rocky Road', percentage: '11%' },
  ];

  return (
    <Container>

      <Header />

      <MainSection>

        <SubSection>
          
          <QuestionHeading>
            What is your favorite ice cream flavor?
          </QuestionHeading>

        </SubSection>

        <SubSection>

          <VoteOptionList 
            onClick={(text) => { console.log(text); }}
            voteOptions={voteResults} />

        </SubSection>

        <SubSection>

          <BetweenSection>
            
            <button>
              <img className="h-8 w-8" src="/save.svg" alt="Save Icon" />
            </button>

            <span>3,412 votes</span>

          </BetweenSection>

        </SubSection>

      </MainSection>

    </Container>
  );
}

export default App;
