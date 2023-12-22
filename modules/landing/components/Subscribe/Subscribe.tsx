import { BtnRed } from '@/components/Buttons';
import { TextInput } from '@/components/Forms';
import { updateInput } from '@/helpers/inputs';
import { postSubscribe } from '@/modules/queries';
import { useState } from 'react';
import { subscribeSchema } from '@/modules/landing';
import { handleResponseErrors } from '@/providers/ErrorsProvider';

const yupOptions = { abortEarly: false };

export type SubscribeProps = {
  label?: string;
  button: string;
  source: 'newsletter' | 'xbg';
  id: string;
};

export const Subscribe = ({ label, button, source, id }: SubscribeProps) => {
  const [form, setForm] = useState<{ email: string; source: string }>({
    email: '',
    source,
  });
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [errors, setErrors] = useState<any>({});

  return (
    <div className={`flex w-full subscribe ${success ? 'success' : 'initial'}`}>
      <TextInput
        id={id}
        onChange={updateInput('email', form, setForm, errors, setErrors)}
        value={form.email}
        error={errors.email}
        placeholder="Email"
        label={label}
        rightBtn={
          <BtnRed
            label={button}
            href=""
            loading={loading}
            onClick={async (e: any) => {
              e.preventDefault();
              setLoading(true);
              subscribeSchema
                .validate(form, yupOptions)
                .then(async () => {
                  await postSubscribe(form)
                    .then(() => {
                      setSuccess(true);

                      setTimeout(() => {
                        setForm({
                          email: '',
                          source,
                        });
                        setSuccess(false);
                      }, 2000);
                    })
                    .catch(() => {
                      setErrors({ email: 'Something went wrong!' });
                    })
                    .finally(() => {
                      setLoading(false);
                    });
                })
                .catch((err) => {
                  setLoading(false);
                  handleResponseErrors(err, 'error_login_failed', setErrors);
                });
            }}
          />
        }
      />

      {success && (
        <div className="success-message flex middle">
          <span>Subscribed</span>
        </div>
      )}
    </div>
  );
};
