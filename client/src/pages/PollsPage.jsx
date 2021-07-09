import React from 'react';
import Polls from '../components/Polls';
import ErrorMessage from '../components/ErrorMessage';

const PollsPage = props => {
  return (
    <main>
      <section className="polls">
        <ErrorMessage />
        <Polls {...props} />
      </section>
    </main>
  );
};

export default PollsPage;