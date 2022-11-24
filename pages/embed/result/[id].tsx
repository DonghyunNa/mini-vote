import PollResultCard from 'components/poll/card/Result';

import CANDIDATES from 'constants/candidates';
import POLLS from 'constants/polls';

type Candidates = { id: string; name: string }[];
type Poll = { id: string; title: string; image: string; description: string };

function EmbedResult({ poll, candidates }: { poll: Poll; candidates: Candidates }) {
  return (
    <main>
      <PollResultCard {...poll} candidates={candidates} embed />
    </main>
  );
}

export async function getStaticProps({
  params,
}: {
  params: { id: 'vsuru' | 'worldcup' | 'movie' | 'hobby' };
}) {
  return { props: { candidates: CANDIDATES[params.id], poll: POLLS[params.id], noLayout: true } };
}

export async function getStaticPaths() {
  return {
    paths: [
      '/embed/result/vsuru',
      '/embed/result/worldcup',
      '/embed/result/movie',
      '/embed/result/hobby',
    ],
    fallback: false,
  };
}

export default EmbedResult;
