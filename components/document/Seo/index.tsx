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
            url: 'https://mini-vote.vercel.app/logo.png',
            width: 100,
            height: 100,
          },
        ],
      }}
    />
  );
}

export default Seo;
