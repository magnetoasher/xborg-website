import axios, { AxiosResponse } from 'axios';
import Router from 'next/router';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

api.interceptors.response.use(
  (fulfilled) => fulfilled,
  (rejected) => {
    const status = rejected.response ? rejected.response.status : null;

    if (status === 401 /* Expired token header*/) {
      // Refresh access token.
    }

    // It's not an authorisation issue, just pass on the rejection.
    return Promise.reject(rejected);
  },
);
