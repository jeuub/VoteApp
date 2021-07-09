import React from 'react';

import Poll from '../components/Poll';
import ErrorMessage from '../components/ErrorMessage';

const PollPage = ({ match, getPoll, poll }) => {
  const host = window.Location.href;
  getPoll(match.params.id);
  return (
    <main>
      <section>
        <ErrorMessage />
        <Poll />
      </section>
    </main>
  )
}

export default PollPage;