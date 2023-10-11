import { BtnRed } from '@/components/Buttons';
import { TextInput } from '@/components/Forms';
import { updateInput } from '@/helpers/inputs';
import { postSubscribe } from '@/modules/queries';
import { useState } from 'react';

export type SubscribeProps = {
  label?: string;
  button: string;
};

export const Subscribe = ({ label, button }: SubscribeProps) => {
  const [form, setForm] = useState<{ email: string }>({ email: '' });
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<any>({});

  return (
    <div className="subscribe flex w-full">
      <div className={`flex w-full ${success ? 'success' : 'initial'}`}>
        <TextInput
          id="subscribe"
          className="w-full"
          onChange={updateInput('email', form, setForm, errors, setErrors)}
          value={form.email}
          error={errors.email}
          placeholder="Email"
          label={label}
        />

        <div className="btn-container">
          <BtnRed
            label={button}
            href=""
            loading={loading}
            onClick={async (e: any) => {
              e.preventDefault();
              setLoading(true);
              await postSubscribe(form)
                .then(() => {
                  setSuccess(true);

                  setTimeout(() => {
                    setSuccess(false);
                  }, 2000);
                })
                .catch(() => {
                  setErrors({ email: 'Something went wrong!' });
                })
                .finally(() => {
                  setLoading(false);
                });
            }}
          />

          <div className="success-message flex middle">
            <span>Subscribed</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="11"
              viewBox="0 0 13 11"
              fill="none"
            >
              <path
                d="M12 1L3.79639 9L1 6.27302"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
