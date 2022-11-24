import { Col, Row } from 'react-bootstrap';

import PollPreviewCard from 'components/poll/card/Preview';
import Seo from 'components/document/Seo';

import POLLS from 'constants/polls';

function Home() {
  return (
    <main>
      <Seo />

      <h3 className='mt-4'>투표 목록</h3>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {Object.values(POLLS).map((poll) => (
          <Col key={poll.id}>
            <PollPreviewCard {...poll} />
          </Col>
        ))}
      </Row>
    </main>
  );
}

export default Home;
