import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import Link from 'next/link';
import { useGetResult } from 'query-hooks/result';

type Props = {
  id: string;
  image: string;
  title: string;
  description: string;
  candidates: { id: string; name: string }[];
  embed?: boolean;
};

function PollResultCard({ id, image, title, description, candidates, embed }: Props) {
  const { data } = useGetResult(id, candidates);

  return (
    <Card className='rounded-0'>
      <Card.Img
        variant='top'
        src={image}
        style={{ objectFit: 'contain', width: '100%', height: 130 }}
      />

      <Card.Body className='rounded-0'>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>

      <ListGroup className='list-group-flush rounded-0' style={{ overflowY: 'scroll' }}>
        {(data || []).map(({ id, name, rate, count }, index) => (
          <ListGroup.Item className='rounded-0' key={id} style={{}}>
            <div style={{ zIndex: 2 }}>
              {index + 1}. {name} {count}표 ({rate}%)
            </div>
            <div
              style={{
                position: 'absolute',
                width: `${rate}%`,
                height: '20%',
                background: `rgba(233, 243, 123, 0.9)`,
                bottom: 0,
                left: 0,
                zIndex: 1,
              }}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Card.Body className='rounded-0'>
        <Row md={2} lg={3} className='justify-content-end g-2'>
          <Col>
            <Link href='/'>
              <Button variant='primary' className='rounded-0 col-12'>
                홈으로
              </Button>
            </Link>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default PollResultCard;
