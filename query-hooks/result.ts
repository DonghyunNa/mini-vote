import { useQuery } from 'react-query';

export const useGetResult = (pollId: string, candidates: { id: string; name: string }[]) =>
  useQuery(
    ['result', pollId],
    async () => {
      if (['vsuru', 'worldcup', 'hobby', 'movie'].includes(pollId)) {
        const votes = RESULT[pollId as 'vsuru' | 'worldcup' | 'hobby' | 'movie']
          .slice()
          .map((vote, index) => ({
            ...vote,
            name: candidates[index].name,
          }));

        votes.sort((a, b) => b.count - a.count);
        const sum = votes.reduce((a, b) => a + b.count, 0);

        const result = votes.map((vote) => ({
          ...vote,
          rate: ((vote.count / sum) * 100).toFixed(2),
        }));

        return result;
      }

      return [];
    },
    { retry: false },
  );

const RESULT = {
  vsuru: [
    { id: '1', count: 21 },
    { id: '2', count: 22 },
    { id: '3', count: 23 },
    { id: '4', count: 24 },
    { id: '5', count: 21 },
    { id: '6', count: 21 },
    { id: '7', count: 2001 },
    { id: '8', count: 0 },
    { id: '9', count: 210 },
    { id: '10', count: 21 },
    { id: '11', count: 21 },
    { id: '12', count: 21 },
    { id: '13', count: 21 },
    { id: '14', count: 21 },
    { id: '15', count: 900 },
    { id: '16', count: 210 },
    { id: '17', count: 21 },
    { id: '18', count: 21 },
    { id: '19', count: 21 },
    { id: '20', count: 21 },
    { id: '21', count: 21 },
    { id: '22', count: 21 },
    { id: '23', count: 101 },
    { id: '24', count: 21 },
    { id: '25', count: 0 },
    { id: '26', count: 0 },
  ],
  worldcup: [
    { id: '1', count: 1242 },
    { id: '2', count: 1242 },
    { id: '3', count: 11142 },
    { id: '4', count: 1242 },
    { id: '5', count: 1242 },
    { id: '6', count: 1242 },
    { id: '7', count: 12 },
    { id: '8', count: 1242 },
    { id: '9', count: 1242 },
    { id: '10', count: 1242 },
    { id: '11', count: 1242 },
    { id: '12', count: 122 },
    { id: '13', count: 12 },
    { id: '14', count: 1242 },
    { id: '15', count: 42 },
    { id: '16', count: 1242 },
    { id: '17', count: 1242 },
    { id: '18', count: 1242 },
    { id: '19', count: 1242 },
    { id: '20', count: 122 },
    { id: '21', count: 1242 },
    { id: '22', count: 12342 },
    { id: '23', count: 1242 },
    { id: '24', count: 1242 },
    { id: '25', count: 1242 },
    { id: '26', count: 1242 },
    { id: '27', count: 1242 },
    { id: '28', count: 1242 },
    { id: '29', count: 1242 },
    { id: '30', count: 1242 },
    { id: '31', count: 1242 },
    { id: '32', count: 1242 },
  ],
  hobby: [
    { id: '1', count: 2 },
    { id: '2', count: 3 },
  ],
  movie: [
    { id: '1', count: 2 },
    { id: '2', count: 3 },
  ],
};
