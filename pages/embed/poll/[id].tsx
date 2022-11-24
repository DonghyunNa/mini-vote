import PollVoteCard from 'components/poll/card/Vote';

import { createGetPollRequest, createGetPollsRequest } from 'apis/ssr';

import { Poll, Selection } from 'types/poll';

function PollPage({ poll, candidates }: { poll: Poll; candidates: Selection[] }) {
  return (
    <main>
      <PollVoteCard {...poll} candidates={candidates} embed />
    </main>
  );
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const { data } = await createGetPollRequest({ id: params.id });

  return { props: { candidates: data.selections, poll: data, noLayout: true } };
}

export async function getStaticPaths() {
  const { data } = await createGetPollsRequest();

  return {
    paths: data.map((poll) => `/embed/poll/${poll._id}`),
    fallback: false,
  };
}

export default PollPage;
