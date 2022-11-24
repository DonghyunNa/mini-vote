import { createVotePollRequest } from 'apis';
import moment from 'moment-timezone';
import { useMutation } from 'react-query';

export const useVote = () =>
  useMutation(async ({ pollId, selectionId }: { pollId: string; selectionId: string }) => {
    const isPollVoted = !!window.localStorage.getItem(pollId);

    if (isPollVoted) {
      alert('이미 투표한 선거입니다.');
      return [];
    }

    await createVotePollRequest({ pollId, selectionId });
    window.localStorage.setItem(pollId, moment().toISOString());

    return [];
  });
