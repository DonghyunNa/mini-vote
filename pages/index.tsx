import { NextSeo } from 'next-seo';
import { Col, Row } from 'react-bootstrap';

import PollPreviewCard from 'components/poll/card/Preview';

import { createGetPollsRequest } from 'apis/ssr';

import { Poll } from 'types/poll';

function Home({ polls }: { polls: Poll[] }) {
  return (
    <main>
      <NextSeo
        title='이것은 커뮤니티형 투표 서비스의 시범 버전'
        description='이것은 커뮤니티형 투표 서비스의 시범 버전'
        openGraph={{
          type: 'website',
          url: 'https://mini-vote.vercel.app/',
          title: '이것은 커뮤니티형 투표 서비스의 시범 버전',
          description: '이것은 커뮤니티형 투표 서비스의 시범 버전',
          images: [
            {
              url: 'https://mini-vote.vercel.app/logo.png',
              width: 100,
              height: 100,
            },
          ],
        }}
      />

      <h3 className='mt-4'>투표 목록</h3>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {polls.map((poll) => (
          <Col key={poll._id}>
            <PollPreviewCard {...poll} />
          </Col>
        ))}
      </Row>
    </main>
  );
}

export async function getStaticProps() {
  const { data } = await createGetPollsRequest();

  return { props: { polls: data } };
}

export default Home;
