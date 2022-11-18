import Link from 'next/link';
import { useState } from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';

type Props = {
  title: string;
  description: string;
  candidates: { id: string; name: string }[];
};

function PollVoteCard({ title, description, candidates }: Props) {
  const [selectedCandidate, selectCandidate] = useState<string>('');
  return (
    <Card className='rounded-0'>
      <Card.Img variant='top' src='https://dummyimage.com/600x400/000/fff' />

      <Card.Body className='rounded-0'>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>

      <ListGroup className='list-group-flush rounded-0'>
        {candidates.map(({ id, name }, index) => (
          <ListGroup.Item
            className='rounded-0'
            action
            active={id === selectedCandidate}
            key={id}
            onClick={() => {
              if (id === selectedCandidate) {
                selectCandidate('');
              } else {
                selectCandidate(id);
              }
            }}
          >
            {index + 1}. {name}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Card.Body className='rounded-0'>
        <Row md={2} lg={3} className='justify-content-end g-2'>
          <Col>
            <Button variant='primary' className='rounded-0 col-12' onClick={() => alert(id)}>
              투표하기
            </Button>
          </Col>

          <Col>
            <Link href='/poll'>
              <Button variant='danger' className='rounded-0 col-12'>
                결과보기
              </Button>
            </Link>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default PollVoteCard;
