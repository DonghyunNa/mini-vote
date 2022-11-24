import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { toast } from 'react-toastify';

type Props = {
  image: string;
  _id: string;
  title: string;
  description: string;
};

function PollPreviewCard({ image, _id, title, description }: Props) {
  return (
    <Card className='rounded-0'>
      <Card.Img
        className='rounded-0'
        variant='top'
        src={image}
        style={{ objectFit: 'contain', width: '100%', height: 130 }}
      />
      <Card.Body className='rounded-0'>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>

        <Row md={2} lg={3} className='justify-content-end g-2'>
          <Col>
            <Link href={`/poll/${_id}`}>
              <Button variant='primary' className='rounded-0 col-12'>
                투표하기
              </Button>
            </Link>
          </Col>

          <Col>
            <Link href={`/result/${_id}`}>
              <Button variant='danger' className='rounded-0 col-12'>
                결과보기
              </Button>
            </Link>
          </Col>
        </Row>
      </Card.Body>

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
            dummyElement.value = `https://mini-vote.vercel.app/poll/${_id}`;
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
            dummyElement.value = `<iframe src="https://mini-vote.vercel.app/embed/poll/${_id}" width="350" height="600" frameborder="0" style="border:0;" allowfullscreen="" aria-h_idden="false" tabindex="0"></iframe>`;
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
    </Card>
  );
}

export default PollPreviewCard;
