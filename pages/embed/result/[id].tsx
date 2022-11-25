import { NextSeo } from 'next-seo';

import PollResultCard from 'components/poll/card/Result';

import { createGetPollRequest, createGetPollsRequest } from 'apis/ssr';

import { Poll, Selection } from 'types/poll';

function EmbedResult({ poll, candidates }: { poll: Poll; candidates: Selection[] }) {
  return (
    <main>
      <NextSeo
        title={poll.title}
        description={poll.description}
        openGraph={{
          type: 'website',
          url: `https://mini-vote.vercel.app/embed/result/${poll._id}`,
          title: poll.title,
          description: poll.description,
          images: [
            {
              url: poll.image,
              width: 100,
              height: 100,
            },
          ],
        }}
      />

      <PollResultCard {...poll} candidates={candidates} embed />
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
    paths: data.map((poll) => `/embed/result/${poll._id}`),
    fallback: false,
  };
}

export default EmbedResult;
