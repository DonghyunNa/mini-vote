import PollVoteCard from 'components/poll/card/Vote';
import { NextPageContext } from 'next';

const candidates = [
  { id: '1', name: 'ㅁㄴㅇㄹ' },
  { id: '2', name: 'ㅁㄴㅇㄹ' },
  { id: '3', name: 'ㅁㄴㅇㄹ' },
  { id: '4', name: 'ㅁㄴㅇㄹ' },
  { id: '5', name: 'ㅁㄴㅇㄹ' },
];

function Uruguay() {
  return (
    <main>
      <PollVoteCard title='asd' description='asd' candidates={candidates} />
    </main>
  );
}

export default Uruguay;

export async function getStaticProps(context: NextPageContext) {
  return {
    props: { noLayout: true },
  };
}
