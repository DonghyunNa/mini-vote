import { NextPageContext } from 'next';

import PollVoteCard from 'components/poll/card/Vote';

import CANDIDATES from 'constants/candidates';

function WorldCup() {
  return (
    <main>
      <PollVoteCard
        id='worldcup'
        image='/worldcup.png'
        title='이번 월드컵 우승이 유력한 팀은?'
        description='이번 월드컵 우승이 가장 유력한 팀은 어디일까요?'
        candidates={CANDIDATES.worldcup}
        embed
      />
    </main>
  );
}

export default WorldCup;

export async function getStaticProps(context: NextPageContext) {
  return {
    props: { noLayout: true },
  };
}
