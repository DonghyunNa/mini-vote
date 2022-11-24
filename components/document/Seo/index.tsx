import { NextSeo } from 'next-seo';

function Seo() {
  return (
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
  );
}

export default Seo;
