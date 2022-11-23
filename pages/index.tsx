import { NextSeo } from 'next-seo';
import { Col, Row } from 'react-bootstrap';

import PollPreviewCard from 'components/poll/card/Preview';
import Seo from 'components/document/Seo';

function Home() {
  return (
    <main>
      <Seo />
      <h3 className='mt-4'>투표 목록</h3>
      <Row xs={1} md={2} lg={3} className='g-4'>
        <Col>
          <PollPreviewCard
            id='vsuru'
            image='/korea.png'
            title='우루과이전 MOM은 누구일까요?'
            description='2022-11-18까지 진행됩니다.'
          />
        </Col>

        <Col>
          <PollPreviewCard
            id='worldcup'
            image='/worldcup.png'
            title='이번 월드컵 우승이 유력한 팀은?'
            description='이번 월드컵 우승이 가장 유력한 팀은 어디일까요?'
          />
        </Col>
      </Row>
    </main>
  );
}

export default Home;
