import { Row, Col } from 'react-bootstrap';

import PollVoteCard from 'components/poll/card/Vote';

import CANDIDATES from 'constants/candidates';
import POLLS from 'constants/polls';

type Candidates = { id: string; name: string }[];
type Poll = { id: string; title: string; image: string; description: string };

function PollPage({ poll, candidates }: { poll: Poll; candidates: Candidates }) {
  return (
    <main>
      <Row xs={1} md={2} lg={3} className='g-4 mt-4 justify-content-center'>
        <Col>
          <PollVoteCard {...poll} candidates={candidates} />
        </Col>
      </Row>
    </main>
  );
}

export async function getStaticProps({
  params,
}: {
  params: { id: 'vsuru' | 'worldcup' | 'movie' | 'hobby' };
}) {
  return { props: { candidates: CANDIDATES[params.id], poll: POLLS[params.id] } };
}

export async function getStaticPaths() {
  return {
    paths: ['/poll/vsuru', '/poll/worldcup', '/poll/movie', '/poll/hobby'],
    fallback: false,
  };
}

export default PollPage;
