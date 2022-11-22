import { NextPageContext } from 'next';

import PollResultCard from 'components/poll/card/Result';

import CANDIDATES from 'constants/candidates';

function Uruguay() {
  return (
    <main>
      <PollResultCard
        id='worldcup'
        image='/korea.png'
        title='이번 월드컵 우승이 유력한 팀은?'
        description='이번 월드컵 우승이 가장 유력한 팀은 어디일까요?'
        candidates={CANDIDATES.worldcup}
        embed
      />
    </main>
  );
}

export default Uruguay;

export async function getStaticProps(context: NextPageContext) {
  return {
    props: { noLayout: true },
  };
}
