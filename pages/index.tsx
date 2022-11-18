import { Col, Row } from 'react-bootstrap';

import PollPreviewCard from 'components/poll/card/Preview';

function Home() {
  return (
    <main>
      <h3 className='mt-4'>투표 목록</h3>
      <Row xs={1} md={2} lg={3} className='g-4'>
        <Col>
          <PollPreviewCard
            id='vsuru'
            title='우루과이전 MOM은 누구일까요?'
            description='2022-11-18까지 진행됩니다.'
          />
        </Col>
        <Col>
          <PollPreviewCard
            id='123'
            title='우루과이전 MOM은 누구일까요?'
            description='2022-11-18까지 진행됩니다.'
          />
        </Col>
        <Col>
          <PollPreviewCard
            id='123'
            title='우루과이전 MOM은 누구일까요?'
            description='2022-11-18까지 진행됩니다.'
          />
        </Col>
      </Row>
    </main>
  );
}

export default Home;
