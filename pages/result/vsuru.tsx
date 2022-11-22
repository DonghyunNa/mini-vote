import { Row, Col } from 'react-bootstrap';

import PollResultCard from 'components/poll/card/Result';

import CANDIDATES from 'constants/candidates';

function Uruguay() {
  return (
    <main>
      <Row xs={1} md={2} lg={3} className='g-4 mt-4 justify-content-center'>
        <Col>
          <PollResultCard
            id='vsuru'
            image='/korea.png'
            title='우루과이전 MOM은 누구일까요?'
            description='2022-11-18까지 진행됩니다.'
            candidates={CANDIDATES.vsuru}
          />
        </Col>
      </Row>
    </main>
  );
}

export default Uruguay;
