import PollResultCard from 'components/poll/card/Result';

import { createGetPollRequest, createGetPollsRequest } from 'apis/ssr';
import { Poll, Selection } from 'types/poll';

function EmbedResult({ poll, candidates }: { poll: Poll; candidates: Selection[] }) {
  return (
    <main>
      <PollResultCard {...poll} candidates={candidates} />
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
    paths: data.map((poll) => `/result/${poll._id}`),
    fallback: false,
  };
}

export default EmbedResult;
