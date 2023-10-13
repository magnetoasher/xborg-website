import { api } from '@/services';

export function postSubscribe(form: any) {
  return api
    .post('https://gaming.xborg.com/api/newsletter/post', form)
    .then((res) => res.data);
}
