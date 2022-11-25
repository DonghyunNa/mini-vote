import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useVote } from 'query-hooks/vote';

type Props = {
  _id: string;
  image: string;
  title: string;
  description: string;
  candidates: { id: string; name: string }[];
  embed?: boolean;
};

function PollVoteCard({ _id, image, title, description, candidates, embed }: Props) {
  const router = useRouter();
  const [selectedCandidate, selectCandidate] = useState<string>('');
  const { mutate, isSuccess } = useVote();
  const onSubmit = () => {
    if (selectedCandidate) {
      mutate({ pollId: _id, selectionId: selectedCandidate });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      router.push(embed ? `/embed/result/${_id}` : `/result/${_id}`);
    }
  }, [isSuccess]);

  return (
    <Card className='rounded-0'>
      <Card.Img
        variant='top'
        src={image}
        style={{ objectFit: 'contain', width: '100%', height: 'auto', padding: 20 }}
      />

      <Card.Body className='rounded-0'>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>

      <ListGroup className='list-group-flush rounded-0' style={{ overflowY: 'scroll' }}>
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
            <Button
              variant='primary'
              className='rounded-0 col-12'
              onClick={() => {
                onSubmit();
              }}
            >
              투표하기
            </Button>
          </Col>

          <Col>
            <Link href={embed ? `/embed/result/${_id}` : `/result/${_id}`}>
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
