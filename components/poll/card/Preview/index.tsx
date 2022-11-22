import Link from 'next/link';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

type Props = {
  image: string;
  id: string;
  title: string;
  description: string;
};

function PollPreviewCard({ image, id, title, description }: Props) {
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
            <Link href={`/poll/${id}`}>
              <Button variant='primary' className='rounded-0 col-12'>
                투표하기
              </Button>
            </Link>
          </Col>

          <Col>
            <Link href={`/result/${id}`}>
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

export default PollPreviewCard;
