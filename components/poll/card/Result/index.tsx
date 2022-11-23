import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import Link from 'next/link';
import { toast } from 'react-toastify';

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

      <Card.Footer
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingTop: 0,
          paddingBottom: 0,
          backgroundColor: 'white',
        }}
      >
        <button
          type='button'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            border: 'none',
            backgroundColor: 'transparent',
          }}
          onClick={() => {
            const dummyElement = document.createElement('textarea');
            document.body.appendChild(dummyElement);
            dummyElement.value = `https://mini-vote.vercel.app/result/${id}`;
            dummyElement.select();
            document.execCommand('copy');
            document.body.removeChild(dummyElement);
            toast.info('클립보드에 복사되었습니다.');
          }}
        >
          <span className='material-icons-outlined' style={{ fontSize: '1.5rem' }}>
            share
          </span>
        </button>
        <button
          type='button'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            border: 'none',
            backgroundColor: 'transparent',
          }}
          onClick={() => {
            const dummyElement = document.createElement('textarea');
            document.body.appendChild(dummyElement);
            dummyElement.value = `<iframe src="https://mini-vote.vercel.app/embed/result/${id}" width="350" height="600" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;
            dummyElement.select();
            document.execCommand('copy');
            document.body.removeChild(dummyElement);
            toast.info('클립보드에 복사되었습니다.');
          }}
        >
          <span className='material-icons-outlined' style={{ fontSize: '1.5rem' }}>
            code
          </span>
        </button>
      </Card.Footer>

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
            {embed ? (
              <Button
                variant='primary'
                className='rounded-0 col-12'
                onClick={() => window.open('https://mini-vote.vercel.app/', '_blank')}
              >
                더 보기
              </Button>
            ) : (
              <Link href='/'>
                <Button variant='primary' className='rounded-0 col-12'>
                  홈으로
                </Button>
              </Link>
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default PollResultCard;
