import { Row, Col } from 'react-bootstrap';

import PollVoteCard from 'components/poll/card/Vote';

import { createGetPollRequest, createGetPollsRequest } from 'apis/ssr';

import { Poll, Selection } from 'types/poll';
import { NextSeo } from 'next-seo';

function PollPage({ poll, candidates }: { poll: Poll; candidates: Selection[] }) {
  return (
    <main>
      <NextSeo
        title={poll.title}
        description={poll.description}
        openGraph={{
          type: 'website',
          url: `https://mini-vote.vercel.app/poll/${poll._id}`,
          title: poll.title,
          description: poll.description,
          images: [
            {
              url: poll.image,
              width: 101,
              height: 100,
            },
          ],
        }}
      />

      <Row xs={1} md={2} lg={3} className='g-4 mt-4 justify-content-center'>
        <Col>
          <PollVoteCard {...poll} candidates={candidates} />
        </Col>
      </Row>
    </main>
  );
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const { data } = await createGetPollRequest({ id: params.id });

  return { props: { candidates: data.selections, poll: data } };
}

export async function getStaticPaths() {
  const { data } = await createGetPollsRequest();

  return {
    paths: data.map((poll) => `/poll/${poll._id}`),
    fallback: false,
  };
}

export default PollPage;
