import { useQuery } from 'react-query';

import { createGetPollRequest } from 'apis';

export const useGetResult = (pollId: string) =>
  useQuery(
    ['result', pollId],
    async () => {
      const { data } = await createGetPollRequest({ id: pollId });

      const votes = data.selections.slice();

      votes.sort((a, b) => b.count - a.count);
      const sum = votes.reduce((a, b) => a + b.count, 0) || 1;

      const result = votes.map((vote) => ({
        ...vote,
        rate: ((vote.count / sum) * 100).toFixed(2),
      }));

      return result;
    },
    { retry: false },
  );
