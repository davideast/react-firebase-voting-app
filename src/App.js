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

  console.log(VoteOptionList);
  console.log(VoteResultList);

  const voteResults = [
    { text: 'Chocolate', percentage: '42%', selected: true },
    { text: 'Vanilla', percentage: '18%' },
    { text: 'Strawberry', percentage: '9%' },
    { text: 'Rocky Road', percentage: '11%' },
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

          <VoteOptionList voteOptions={voteResults} />

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
