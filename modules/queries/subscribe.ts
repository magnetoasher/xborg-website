import { api } from '@/services';

export function postSubscribe(form: any) {
  return api.post('/api/newsletter', form).then((res) => res.data);
}
