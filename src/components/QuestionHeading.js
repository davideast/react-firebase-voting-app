import React from 'react';

function QuestionHeading({ children }) {
  return (
    <h3 className="text-3xl font-bold">
      {children}
    </h3>
  )
}

export { QuestionHeading };
