import { Images } from '@/assets/imgs';
import { Videos } from '@/assets/videos';
import { BtnDark, BtnRed } from '@/components/Buttons';
import { TextInput } from '@/components/Forms';
import { ObserverContainer } from '@/components/ObserverContainer';
import { SpringSwiper } from '@/components/SpringSwiper';
import { updateInput } from '@/helpers/inputs';
import { useMousePosition } from '@/modules/utils';
import { distance, splitLines } from '@/modules/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Timeline, Tween } from 'react-gsap';
import { Scene } from 'react-scrollmagic';
import { SwiperSlide } from 'swiper/react';

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
          <div className="lexend-body-s">COMING SOON</div>
          <h2 className="integralfc-h2 reveal-from-bottom" ref={ref}>
            Tokenized Esports Teams
          </h2>

          <p className="lexend-body-md">
            Invest in esports teams, vote on key decisions and reap the rewards
            of their success.
          </p>
        </ObserverContainer>

        <div className="register-interest flex w-full">
          <TextInput
            id="register-interest"
            className="w-full"
            onChange={updateInput('email', form, setForm, errors, setErrors)}
            value={''}
            placeholder="Email"
          />

          <BtnRed label="Register Interest" href="" />
        </div>

        <div className="chat flex column">
          <div className="vote">
            <div className="lexend-body-sl">
              Which game should our new team play?
            </div>
          </div>

          <div className="message">Oh nice!</div>
          <div className="message">I vote for Rocket League</div>

          <div className="message-received">Marcus, thanks for support!</div>
        </div>
      </div>
    </div>
  );
};
