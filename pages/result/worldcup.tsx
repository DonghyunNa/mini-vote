import { Row, Col } from 'react-bootstrap';

import PollResultCard from 'components/poll/card/Result';

import CANDIDATES from 'constants/candidates';

function Uruguay() {
  return (
    <main>
      <Row xs={1} md={2} lg={3} className='g-4 mt-4 justify-content-center'>
        <Col>
          <PollResultCard
            id='worldcup'
            image='/worldcup.png'
            title='이번 월드컵 우승이 유력한 팀은?'
            description='이번 월드컵 우승이 가장 유력한 팀은 어디일까요?'
            candidates={CANDIDATES.worldcup}
          />
        </Col>
      </Row>
    </main>
  );
}

export default Uruguay;
