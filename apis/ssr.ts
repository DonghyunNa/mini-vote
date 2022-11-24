import { createHttpRequest } from 'apis/common';

import { Apis } from 'types/api';
import { Poll } from 'types/poll';

export const POLL_APIS: Apis = {
  getPolls: { method: 'GET', url: 'http://vote.quesdev.com/api/poll' },
  getPoll: { method: 'GET', url: 'http://vote.quesdev.com/api/poll/:id' },
  votePoll: { method: 'PUT', url: 'http://vote.quesdev.com/api/poll/:pollId/:selectionId' },
};

export const createGetPollsRequest = () => createHttpRequest<Poll[]>({ ...POLL_APIS.getPolls });

export const createGetPollRequest = ({ id }: { id: string }) =>
  createHttpRequest<Poll>({ ...POLL_APIS.getPoll, params: { id } });

export const createVotePollRequest = ({
  pollId,
  selectionId,
}: {
  pollId: string;
  selectionId: string;
}) => createHttpRequest({ ...POLL_APIS.votePoll, params: { pollId, selectionId } });
