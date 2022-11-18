import PollVoteCard from 'components/poll/card/Vote';
import { Row, Col } from 'react-bootstrap';

const candidates = [
  { id: '1', name: 'ㅁㄴㅇㄹ' },
  { id: '2', name: 'ㅁㄴㅇㄹ' },
  { id: '3', name: 'ㅁㄴㅇㄹ' },
  { id: '4', name: 'ㅁㄴㅇㄹ' },
  { id: '5', name: 'ㅁㄴㅇㄹ' },
];

function Uruguay() {
  return (
    <main>
      <Row xs={1} md={2} lg={3} className='g-4 mt-4 justify-content-center'>
        <Col>
          <PollVoteCard title='asd' description='asd' candidates={candidates} />
        </Col>
      </Row>
    </main>
  );
}

export default Uruguay;
