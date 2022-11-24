import PollVoteCard from 'components/poll/card/Vote';

import CANDIDATES from 'constants/candidates';
import POLLS from 'constants/polls';

type Candidates = { id: string; name: string }[];
type Poll = { id: string; title: string; image: string; description: string };

function PollPage({ poll, candidates }: { poll: Poll; candidates: Candidates }) {
  return (
    <main>
      <PollVoteCard {...poll} candidates={candidates} embed />
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
    paths: ['/embed/poll/vsuru', '/embed/poll/worldcup', '/embed/poll/movie', '/embed/poll/hobby'],
    fallback: false,
  };
}

export default PollPage;
