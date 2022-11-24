import { Col, Row } from 'react-bootstrap';

import PollPreviewCard from 'components/poll/card/Preview';
import Seo from 'components/document/Seo';

import { createGetPollsRequest } from 'apis/ssr';

import { Poll } from 'types/poll';

function Home({ polls }: { polls: Poll[] }) {
  return (
    <main>
      <Seo />

      <h3 className='mt-4'>투표 목록</h3>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {polls.map((poll) => (
          <Col key={poll._id}>
            <PollPreviewCard {...poll} />
          </Col>
        ))}
      </Row>
    </main>
  );
}

export async function getStaticProps() {
  const { data } = await createGetPollsRequest();

  return { props: { polls: data } };
}

export default Home;
