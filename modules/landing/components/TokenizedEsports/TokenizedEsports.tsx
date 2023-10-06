import { Images } from '@/assets/imgs';
import { BtnRed } from '@/components/Buttons';
import { TextInput } from '@/components/Forms';
import { ObserverContainer } from '@/components/ObserverContainer';
import { Progressbar } from '@/components/Progressbar';
import { updateInput } from '@/helpers/inputs';
import { splitLines } from '@/modules/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Tween } from 'react-gsap';
import { Scene } from 'react-scrollmagic';

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
      <Scene duration="200%" triggerHook="onEnter">
        <Tween
          position="0"
          from={{
            y: -350,
          }}
          to={{
            y: 50,
          }}
        >
          <div className="parallax-bubble">
            <Image src={Images.landing.sphere3} alt="" width={96} height={96} />
          </div>
        </Tween>
      </Scene>

      <Scene duration="200%" triggerHook="onEnter">
        <Tween
          position="0"
          from={{
            y: -350,
          }}
          to={{
            y: 50,
          }}
        >
          <div className="parallax-bubble2">
            <Image src={Images.landing.sphere8} alt="" width={92} height={92} />
          </div>
        </Tween>
      </Scene>

      <Scene duration="200%" triggerHook="onEnter">
        <Tween
          position="0"
          from={{
            y: -100,
          }}
          to={{
            y: 100,
          }}
        >
          <div className="parallax-bubble3">
            <Image src={Images.landing.sphere6} alt="" width={52} height={52} />
          </div>
        </Tween>
      </Scene>

      <div className="container flex column middle center">
        <ObserverContainer className="flex column">
          <div className="lexend-body-s red-bold">COMING SOON</div>
          <h2 className="integralfc-h2 reveal-from-bottom" ref={ref}>
            The future of esports
          </h2>

          <p className="lexend-body-md">
            XBorg creates a framework to enable the creation of fan-owned team,
            at scale. The first large scale tokenized esports team goes live in
            Q1 2024.
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

        <ObserverContainer className="gradient-background flex column middle center">
          <div className="integralfc-body-md">Initial team offering</div>
          <div className="lexend-body-smd">
            Gaming identity-based crowdfunding
          </div>

          <Link href="" className="signin flex middle">
            <Image
              src={Images.landing.discovery1}
              alt=""
              width={32}
              height={32}
            />
            <span>Sign in with XBorg</span>
          </Link>
        </ObserverContainer>

        <ObserverContainer
          className="tokenized-esports-tokens flex column"
          rootMargin="-30%"
        >
          <Image
            src={Images.landing.tokenizedesports}
            width={52}
            height={40}
            alt=""
          />
          <Image
            src={Images.landing.tokenizedesports}
            width={65}
            height={50}
            alt=""
          />
          <Image
            src={Images.landing.tokenizedesports}
            width={81}
            height={63}
            alt=""
          />
          <Image
            src={Images.landing.tokenizedesports}
            width={81}
            height={63}
            alt=""
          />
          <Image
            src={Images.landing.tokenizedesports}
            width={130}
            height={100}
            alt=""
          />
        </ObserverContainer>

        <ObserverContainer className="gradient-background flex column middle center">
          <div className="integralfc-body-md">fan tokens</div>
          <div className="lexend-body-smd">
            Giving fans governance and revenue rights
          </div>
        </ObserverContainer>

        <ObserverContainer className="bubble-buttons flex column">
          <div className="flex middle center">
            <div className="bubble flex middle center">
              <Image
                src={Images.landing.sphere10}
                alt=""
                width={48}
                height={48}
              />
              <span>Own</span>
            </div>
          </div>
          <div className="flex middle">
            <div className="bubble flex middle">
              <Image
                src={Images.landing.sphere10}
                alt=""
                width={48}
                height={48}
              />
              <span>Vote</span>
            </div>
            <div className="bubble flex middle">
              <Image
                src={Images.landing.sphere10}
                alt=""
                width={48}
                height={48}
              />
              <span>Support</span>
            </div>
            <div className="bubble flex middle last">
              <Image
                src={Images.landing.sphere10}
                alt=""
                width={48}
                height={48}
              />
              <span>Participate</span>
            </div>
          </div>
        </ObserverContainer>

        <div className="gamerbase flex middle center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M50.0816 44.9286C53.8246 40.0512 55.8535 34.0749 55.8535 27.9267C55.8535 26.2453 55.8535 25.4046 55.5252 24.7629C55.2389 24.2032 54.7836 23.7479 54.2239 23.4616C53.5821 23.1333 52.7414 23.1333 51.06 23.1333H46.4751C44.7937 23.1333 43.953 23.1333 43.3112 23.4616C42.7515 23.7479 42.2962 24.2032 42.01 24.7629C41.6817 25.4046 41.6817 26.2453 41.6817 27.9267C41.6817 30.9569 40.6811 33.9023 38.8353 36.3054C36.9895 38.7085 34.4019 40.4349 31.4742 41.2164C28.5465 41.9979 25.4427 41.7907 22.6449 40.6272C19.847 39.4636 17.5117 37.4087 16.0016 34.7816C14.4915 32.1545 13.8911 29.1023 14.2938 26.099C14.6964 23.0957 16.0795 20.3095 18.2282 18.1729C20.377 16.0364 23.1711 14.6691 26.1766 14.2836C27.1683 14.1564 28.1647 14.1384 29.1487 14.2262C32.7061 14.5435 34.4847 14.7022 35.2597 14.2998C36.0346 13.8974 36.6243 12.8771 37.8037 10.8363L38.9061 8.92877C40.3593 6.41427 41.0859 5.15701 40.5702 3.82148C40.0544 2.48595 38.8493 2.10028 36.439 1.32894C32.5429 0.08208 28.3962 -0.301174 24.292 0.23759C18.1961 1.03779 12.5347 3.82724 8.18594 8.17323C3.83715 12.5192 1.04406 18.1788 0.239935 24.2742C-0.564193 30.3695 0.665587 36.5598 3.73851 41.8849C6.81144 47.21 11.5557 51.3722 17.2355 53.7259C22.9153 56.0796 29.213 56.4933 35.1518 54.9026C41.0906 53.312 46.3386 49.8061 50.0816 44.9286Z"
              fill="#EB3A4A"
            />
            <path
              d="M36.0534 23.1334H47.3129C49.4637 23.1334 50.5391 23.1334 51.3053 23.6606C51.6063 23.8678 51.8669 24.1283 52.074 24.4293C52.6012 25.1955 52.6012 26.2709 52.6012 28.4217C52.6012 30.5726 52.6012 31.648 52.074 32.4142C51.8669 32.7152 51.6063 32.9757 51.3053 33.1829C50.5391 33.7101 49.4637 33.7101 47.3129 33.7101H36.0534C32.5661 33.7101 30.8225 33.7101 29.9404 32.7976C29.6016 32.4471 29.3535 32.0192 29.2178 31.5509C28.8645 30.3319 29.7312 28.819 31.4646 25.7931C32.1082 24.6695 32.43 24.1077 32.9177 23.739C33.1123 23.5918 33.3242 23.469 33.5487 23.3732C34.1111 23.1334 34.7585 23.1334 36.0534 23.1334Z"
              fill="#EB3A4A"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="229"
            height="26"
            viewBox="0 0 229 26"
            fill="none"
          >
            <path
              d="M25.9687 12.0464V24.8513H22.2012L22.1162 21.501C20.4732 23.9144 17.4988 25.6463 13.278 25.6463C6.05441 25.6463 0.502197 20.4505 0.502197 12.9266C0.502197 5.37429 5.82779 0.206909 13.8162 0.206909C19.1418 0.206909 24.524 2.73381 25.6855 8.86652H19.3401C18.5752 7.02103 16.5923 5.74338 13.9295 5.74338C9.79366 5.74338 6.84759 8.66778 6.84759 12.9266C6.84759 17.1854 9.85032 20.1098 13.7595 20.1098C15.7141 20.1098 18.9718 19.3148 19.765 15.9646L13.4196 15.9646V12.0464L25.9687 12.0464Z"
              fill="white"
            />
            <path
              d="M47.7129 24.8513L46.3815 21.1319H35.1637L33.8323 24.8513L27.232 24.8513L36.2968 1.00189L45.2483 1.00189L54.3132 24.8513H47.7129ZM36.8634 16.3337H44.6818L41.3675 7.02103H40.206L36.8634 16.3337Z"
              fill="white"
            />
            <path
              d="M55.7344 24.8513L55.7344 1.00189L63.8645 1.00189L69.0768 16.6744H69.5583L74.7706 1.00189L82.9006 1.00189V24.8513L76.7819 24.8513V11.7625H76.2436L71.7679 24.8513H66.8672L62.3914 11.7625H61.8532L61.8532 24.8513H55.7344Z"
              fill="white"
            />
            <path
              d="M85.1797 24.8513V1.00189L105.689 1.00189V6.19766L91.5817 6.19766V10.6836L105.179 10.6836V15.1412L91.5817 15.1412V19.6555L105.689 19.6555V24.8513L85.1797 24.8513Z"
              fill="white"
            />
            <path
              d="M131.436 24.8513H125.119L121.465 18.0656H114.354V24.8513H107.952V1.00189L120.842 1.00189C127.272 1.00189 130.785 3.92628 130.785 9.71829C130.785 13.0118 129.227 15.3967 126.932 16.7595L131.436 24.8513ZM114.354 6.33962V13.2105L120.445 13.2105C123.023 13.2105 124.411 12.0181 124.411 9.77507C124.411 7.53209 123.023 6.33962 120.445 6.33962L114.354 6.33962Z"
              fill="white"
            />
            <path
              d="M152.416 12.3872C154.909 13.4944 156.354 15.3115 156.354 18.1224C156.354 22.0121 153.606 24.8513 146.467 24.8513L133.182 24.8513V1.00189L146.609 1.00189C153.549 1.00189 155.646 3.92628 155.646 7.19138C155.646 9.77507 154.342 11.1095 152.416 12.0181V12.3872ZM146.071 5.94213L139.584 5.94213V10.6836H146.071C148.394 10.6836 149.527 9.77507 149.527 8.35546C149.527 6.87907 148.394 5.94213 146.071 5.94213ZM146.326 19.8827C148.677 19.8827 149.895 18.6902 149.895 17.1003C149.895 15.5387 148.677 14.4882 146.326 14.4882H139.584V19.8827L146.326 19.8827Z"
              fill="white"
            />
            <path
              d="M176.98 24.8513L175.648 21.1319L164.431 21.1319L163.099 24.8513H156.499L165.564 1.00189L174.515 1.00189L183.58 24.8513H176.98ZM166.13 16.3337L173.949 16.3337L170.634 7.02103H169.473L166.13 16.3337Z"
              fill="white"
            />
            <path
              d="M194.865 25.6463C187.273 25.6463 183.42 23.0626 183.505 17.2706L189.284 17.2706C189.426 19.2865 191.125 20.5925 194.865 20.5925C198.321 20.6209 200.105 19.5136 200.105 17.8952C200.105 16.5324 199.086 15.709 196.423 15.2832L193.448 14.7721C188.916 14.0055 184.129 13.0118 184.129 7.53209C184.129 2.96095 187.953 0.206909 194.893 0.206909C201.323 0.206909 205.771 2.27954 205.771 8.49742L200.049 8.49742C199.709 6.53836 198.151 5.23233 194.78 5.23233C191.749 5.23233 190.276 6.25444 190.276 7.81601C190.276 9.03688 191.182 9.91703 193.392 10.2861L195.969 10.7404C200.559 11.5638 206.451 12.1316 206.451 18.094C206.451 23.0058 202.513 25.6747 194.865 25.6463Z"
              fill="white"
            />
            <path
              d="M208.239 24.8513V1.00189L228.748 1.00189V6.19766L214.641 6.19766V10.6836L228.238 10.6836V15.1412L214.641 15.1412V19.6555H228.748V24.8513L208.239 24.8513Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
