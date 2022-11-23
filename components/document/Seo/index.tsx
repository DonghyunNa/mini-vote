import { NextSeo } from 'next-seo';

function Seo() {
  return (
    <NextSeo
      title='보트지지'
      description='보트지지'
      openGraph={{
        type: 'website',
        url: 'https://mini-vote.vercel.app/',
        title: '보트지지',
        description: '보트지지',
        images: [
          {
            url: '/logo.png',
            width: 800,
            height: 400,
          },
        ],
      }}
    />
  );
}

export default Seo;
