import { ParsedUrlQuery } from 'querystring';

import { GetServerSidePropsContext, PreviewData } from 'next/types';

import { api } from '../api/interceptor';

export function authorizeSSR(
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
) {
  const session = context.req.cookies['xborg-session-token'];
  if (session) {
    api.defaults.headers.common['Authorization'] = `Bearer ${session}`;
    return session;
  }

  return undefined; // undefined is important for react-query to ignore the key
}
