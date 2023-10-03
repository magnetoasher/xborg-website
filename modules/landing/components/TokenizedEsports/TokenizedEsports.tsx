import { Images } from '@/assets/imgs';
import { BtnRed } from '@/components/Buttons';
import { TextInput } from '@/components/Forms';
import { ObserverContainer } from '@/components/ObserverContainer';
import { Progressbar } from '@/components/Progressbar';
import { updateInput } from '@/helpers/inputs';
import { splitLines } from '@/modules/utils/utils';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export const TokenizedEsports = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  const [form, setForm] = useState<{ email: string }>({ email: '' });
  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    if (ref.current) {
      splitLines(ref.current);
    }
  }, []);

  return (
    <div className="landing-tokenized-esports">
      <div className="container flex column middle center">
        <ObserverContainer className="flex column">
          <div className="lexend-body-s red-bold">COMING SOON</div>
          <h2 className="integralfc-h2 reveal-from-bottom" ref={ref}>
            Tokenized Esports Teams
          </h2>

          <p className="lexend-body-md">
            Invest in esports teams, vote on key decisions and reap the rewards
            of their success.
          </p>
        </ObserverContainer>

        <ObserverContainer className="register-interest flex w-full">
          <TextInput
            id="register-interest"
            className="w-full"
            onChange={updateInput('email', form, setForm, errors, setErrors)}
            value={''}
            placeholder="Email"
          />

          <BtnRed label="Register Interest" href="" />
        </ObserverContainer>

        <ObserverContainer className="chat flex column">
          <div className="vote">
            <div className="vote-head flex between">
              <div className="lexend-body-sl">
                Which game should our new team play?
              </div>

              <div className="date lexend-body-s l">
                5 day ago
                <br />
                <span>Created by Team BDS</span>
              </div>
            </div>

            <div className="option flex column">
              <div className="option-head flex middle">
                <div className="option-image">
                  <Image src={Images.games.lol} alt="" width={28} height={28} />
                </div>
                <div className="option-content expand">
                  <div className="label lexend-body-s l">Option #1</div>
                  <div className="name lexend-body-sxl">League of Legends</div>
                </div>
                <div className="option-stats flex column bottom">
                  <div className="percentage lexend-body-sxl">60%</div>
                  <div className="total-votes lexend-body-s l">
                    12.321 votes
                  </div>
                </div>
              </div>
              <Progressbar progress={60} />
            </div>

            <div className="option flex column">
              <div className="option-head flex middle">
                <div className="option-image">
                  <Image
                    src={Images.games.rocketleague}
                    alt=""
                    width={28}
                    height={28}
                  />
                </div>
                <div className="option-content expand">
                  <div className="label lexend-body-s l">Option #1</div>
                  <div className="name lexend-body-sxl">Rocket League</div>
                </div>
                <div className="option-stats flex column bottom">
                  <div className="percentage lexend-body-sxl">40%</div>
                  <div className="total-votes lexend-body-s l">4.321 votes</div>
                </div>
              </div>
              <Progressbar progress={40} />
            </div>
          </div>

          <div className="message">Oh nice!</div>
          <div className="message">I vote for Rocket League</div>
          <div className="messanger flex middle end">
            <div className="date">15 min ago</div>
            <Image
              src={Images.messanger.messanger1}
              alt=""
              width={32}
              height={32}
            />
          </div>

          <div className="message-received">Marcus, thanks for support!</div>
          <div className="messanger flex middle">
            <Image
              src={Images.messanger.messanger2}
              alt=""
              width={32}
              height={32}
            />
            <div className="date">11 min ago</div>
          </div>
        </ObserverContainer>
      </div>
    </div>
  );
};
