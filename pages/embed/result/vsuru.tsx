import { NextPageContext } from 'next';

import PollResultCard from 'components/poll/card/Result';

import CANDIDATES from 'constants/candidates';

function Uruguay() {
  return (
    <main>
      <PollResultCard
        id='vsuru'
        image='/worldcup.png'
        title='우루과이전 MOM은 누구일까요?'
        description='2022-11-18까지 진행됩니다.'
        candidates={CANDIDATES.vsuru}
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
