import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render } from '@testing-library/react';

import QuestionCard from '../components/cards/QuestionCard';

describe('Question Card component tests', () => {
  test('Question Card component displays correctly.', () => {
    const card = {
      question: 'test question',
      answers: ['a', 'b', 'c', 'd'],
      callback: () => 'Hello',
      userAnswer: 'a',
      questionNum: 1,
      totalQuestions: 1,
    };
    const wrapper = render(
      <QuestionCard
        question={card.question}
        answers={card.answers}
        questionNum={card.questionNum}
        totalQuestions={card.totalQuestions}
        userAnswer={card.userAnswer}
        callback={card.callback}
      />
    );
    expect(wrapper.getByTestId('question-card-wrapper')).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
