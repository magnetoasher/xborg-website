import { Images } from '@/assets/imgs';
import { ObserverContainer } from '@/components/ObserverContainer';
import { splitLines } from '@/modules/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { NextGenAppBlock } from './NextGenAppBlock';
import { Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

export const NextGenApps = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (ref.current) {
      splitLines(ref.current);
    }
  }, []);

  return (
    <div className="landing-next-gen">
      <Scene duration="200%" triggerHook="onEnter">
        <Tween
          position="0"
          from={{
            y: -200,
          }}
          to={{
            y: 200,
          }}
        >
          <div className="parallax-bubble">
            <Image
              src={Images.landing.sphere2}
              alt=""
              width={161}
              height={161}
            />
          </div>
        </Tween>
      </Scene>

      <div className="container">
        <ObserverContainer className="flex column">
          <h2 className="integralfc-h2 reveal-from-bottom" ref={ref}>
            Experience our next-gen applications
          </h2>

          <p className="section-description lexend-body-sm l">
            Create your gaming identity and unlock a new world of possibilities.
          </p>
        </ObserverContainer>

        <ObserverContainer className="avatar-container">
          <Image
            src={Images.landing.avatar}
            alt=""
            width={1500}
            height={1080}
            className="avatar"
          />
        </ObserverContainer>

        <div className="wrapper flex column">
          <NextGenAppBlock>
            <div className="flex">
              <div className="lexend-heading-l">
                GamerBase.gg
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <path
                    d="M1.13047 12.5L0 11.3695L9.75453 1.61497H0.872093V0H12.5V11.6279H10.885V2.74547L1.13047 12.5Z"
                    fill="#EB3A4A"
                  />
                </svg>
              </div>
            </div>
            <div className="lexend-body-sm desc l">
              The home of gaming communities.
            </div>
            <div className="flex">
              <Link
                href="https://gamerbase.gg"
                target="_blank"
                className="flex middle lexend-body-md sb"
              >
                Visit GamerBase
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15.7 11.6758L9.70005 17.6758L8.30005 16.2758L12.9 11.6758L8.30005 7.07578L9.70005 5.67578L15.7 11.6758Z"
                    fill="#EB3A4A"
                  />
                </svg>
              </Link>
            </div>

            <div className="badge lexend-body-sm l">Beta</div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="162"
              height="162"
              viewBox="0 0 162 162"
              fill="none"
              className="beta-logo"
            >
              <path
                d="M116.933 17.0333C116.084 19.2929 114.529 21.9863 112.412 25.6495L109.213 31.1813L109.213 31.1814C107.498 34.149 106.227 36.3464 105.106 37.9503C103.985 39.5544 103.052 40.5063 102.037 41.0335C101.044 41.5493 99.3177 41.7383 96.4464 41.654C93.6044 41.5706 89.7527 41.2272 84.5873 40.7649C81.6989 40.5061 78.769 40.5604 75.8603 40.9318L75.8601 40.9318C67.0327 42.0629 58.8272 46.0781 52.5165 52.3555C46.2058 58.6288 42.1448 66.8137 40.9637 75.6329C39.7825 84.452 41.5437 93.4173 45.9804 101.131C50.4129 108.844 57.2745 114.879 65.4882 118.297L65.4883 118.297C73.7064 121.716 82.8176 122.321 91.4152 120.03L91.4154 120.03C100.013 117.734 107.614 112.663 113.035 105.605L113.035 105.605C114.859 103.226 116.403 100.672 117.651 97.9839L117.981 97.2734H117.198H104.572C99.5013 97.2734 95.7437 97.2726 92.9316 96.9459C90.1187 96.6191 88.3596 95.9758 87.2023 94.7793C86.2773 93.8191 85.5979 92.6499 85.2293 91.3731L85.2291 91.3725C84.7651 89.7735 85.0811 87.9274 86.1962 85.324C87.311 82.7215 89.1789 79.4607 91.6996 75.0616L91.6997 75.0615C93.5891 71.7624 94.4671 70.2468 95.7799 69.2555L95.7809 69.2548C96.3122 68.8514 96.8903 68.5177 97.5039 68.2574L97.505 68.257C99.021 67.61 100.773 67.6005 104.572 67.6005H133.97H133.972H133.973H133.975H133.976H133.978H133.98H133.981H133.983H133.984H133.986H133.987H133.989H133.991H133.992H133.994H133.995H133.997H133.998H134H134.002H134.003H134.005H134.006H134.008H134.009H134.011H134.013H134.014H134.016H134.017H134.019H134.02H134.022H134.024H134.025H134.027H134.028H134.03H134.032H134.033H134.035H134.036H134.038H134.039H134.041H134.043H134.044H134.046H134.047H134.049H134.05H134.052H134.054H134.055H134.057H134.058H134.06H134.062H134.063H134.065H134.066H134.068H134.069H134.071H134.073H134.074H134.076H134.077H134.079H134.08H134.082H134.084H134.085H134.087H134.088H134.09H134.092H134.093H134.095H134.096H134.098H134.1H134.101H134.103H134.104H134.106H134.107H134.109H134.111H134.112H134.114H134.115H134.117H134.119H134.12H134.122H134.123H134.125H134.126H134.128H134.13H134.131H134.133H134.134H134.136H134.138H134.139H134.141H134.142H134.144H134.146H134.147H134.149H134.15H134.152H134.154H134.155H134.157H134.158H134.16H134.161H134.163H134.165H134.166H134.168H134.169H134.171H134.173H134.174H134.176H134.177H134.179H134.181H134.182H134.184H134.185H134.187H134.189H134.19H134.192H134.193H134.195H134.197H134.198H134.2H134.201H134.203H134.205H134.206H134.208H134.209H134.211H134.213H134.214H134.216H134.217H134.219H134.221H134.222H134.224H134.225H134.227H134.229H134.23H134.232H134.233H134.235H134.237H134.238H134.24H134.241H134.243H134.245H134.246H134.248H134.249H134.251H134.253H134.254H134.256H134.257H134.259H134.261H134.262H134.264H134.265H134.267H134.269H134.27H134.272H134.273H134.275H134.277H134.278H134.28H134.281H134.283H134.285H134.286H134.288H134.29H134.291H134.293H134.294H134.296H134.298H134.299H134.301H134.302H134.304H134.306H134.307H134.309H134.31H134.312H134.314H134.315H134.317H134.318H134.32H134.322H134.323H134.325H134.327H134.328H134.33H134.331H134.333H134.335H134.336H134.338H134.339H134.341H134.343H134.344H134.346H134.348H134.349H134.351H134.352H134.354H134.356H134.357H134.359H134.36H134.362H134.364H134.365H134.367H134.369H134.37H134.372H134.373H134.375H134.377H134.378H134.38H134.381H134.383H134.385H134.386H134.388H134.39H134.391H134.393H134.394H134.396H134.398H134.399H134.401H134.403H134.404H134.406H134.407H134.409H134.411H134.412H134.414H134.415H134.417H134.419H134.42H134.422H134.424H134.425H134.427H134.428H134.43H134.432H134.433H134.435H134.437H134.438H134.44H134.441H134.443H134.445H134.446H134.448H134.45H134.451H134.453H134.454H134.456H134.458H134.459H134.461H134.463H134.464H134.466H134.467H134.469H134.471H134.472H134.474H134.476H134.477H134.479H134.481H134.482H134.484H134.485H134.487H134.489H134.49H134.492H134.494H134.495H134.497H134.498H134.5H134.502H134.503H134.505H134.507H134.508H134.51H134.512H134.513H134.515H134.516H134.518H134.52H134.521H134.523H134.525H134.526H134.528H134.53H134.531H134.533H134.534H134.536H134.538H134.539H134.541H134.543H134.544H134.546H134.548H134.549H134.551H134.552H134.554H134.556H134.557H134.559H134.561H134.562H134.564H134.566H134.567H134.569H134.57H134.572H134.574H134.575H134.577H134.579H134.58H134.582H134.584H134.585H134.587H134.589H134.59H134.592H134.593H134.595H134.597H134.598H134.6H134.602H134.603H134.605H134.607H134.608H134.61H134.612H134.613H134.615H134.616H134.618H134.62H134.621H134.623H134.625H134.626H134.628H134.63H134.631H134.633H134.635H134.636H134.638H134.64H134.641H134.643H134.644H134.646H134.648H134.649H134.651H134.653H134.654H134.656H134.658H134.659H134.661H134.663H134.664H134.666H134.668H134.669H134.671H134.673H134.674H134.676H134.678H134.679H134.681H134.682H134.684H134.686H134.687H134.689H134.691H134.692H134.694H134.696H134.697H134.699H134.701H134.702H134.704H134.706H134.707H134.709H134.711H134.712H134.714H134.716H134.717H134.719H134.721H134.722H134.724H134.726H134.727H134.729H134.73H134.732H134.734H134.735H134.737H134.739H134.74H134.742H134.744H134.745H134.747H134.749H134.75H134.752H134.754H134.755H134.757H134.759H134.76H134.762H134.764H134.765H134.767H134.769H134.77H134.772H134.774H134.775H134.777H134.779H134.78H134.782H134.784H134.785H134.787H134.789H134.79H134.792H134.794H134.795H134.797H134.799H148.096C150.543 67.6005 152.348 67.6009 153.775 67.7178C155.196 67.8343 156.197 68.0639 157.044 68.4977L157.045 68.4981C158.574 69.2784 159.818 70.5252 160.603 72.0567C161.037 72.9059 161.266 73.9073 161.383 75.3274C161.479 76.5082 161.496 77.948 161.499 79.7967L161.496 79.7933V81.0004C161.496 98.7226 155.646 115.949 144.86 130.009C134.069 144.069 118.945 154.176 101.825 158.76C84.7052 163.344 66.5532 162.152 50.1833 155.368C33.8133 148.584 20.1348 136.584 11.2779 121.234L11.2779 121.234C2.41698 105.884 -1.12657 88.0426 1.1921 70.4719C3.51078 52.9011 11.5606 36.588 24.0962 24.0603C36.6318 11.5326 52.9485 3.49081 70.5228 1.18438C82.3537 -0.368265 94.3076 0.737826 105.536 4.33062C109.05 5.45555 111.619 6.27967 113.503 7.29595C115.356 8.29519 116.509 9.46072 117.205 11.2648C117.895 13.0524 117.772 14.7995 116.933 17.0333Z"
                stroke="white"
                stroke-opacity="0.16"
              />
            </svg>
          </NextGenAppBlock>

          <div className="flex bottom-rows">
            <NextGenAppBlock className="expand">
              <div className="lexend-heading-l">Gaming Launchpad</div>
              <div className="lexend-body-sm desc l">
                Funding the most-promising gaming projects.
              </div>
              <div className="flex">
                <Link
                  href="https://launchpad.xborg.com/"
                  target="_blank"
                  className="flex middle lexend-body-md sb"
                >
                  Visit Launchpad
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.7 11.6758L9.70005 17.6758L8.30005 16.2758L12.9 11.6758L8.30005 7.07578L9.70005 5.67578L15.7 11.6758Z"
                      fill="#EB3A4A"
                    />
                  </svg>
                </Link>
              </div>

              <div className="badge lexend-body-sm l">Alpha</div>
            </NextGenAppBlock>
            <NextGenAppBlock className="expand">
              <div className="lexend-heading-l">Initial Team Offerings</div>
              <div className="lexend-body-sm desc l">
                Launching tokenised gaming communities.
              </div>
              <div className="flex">
                <Link
                  href="https://www.mybds.gg/"
                  target="_blank"
                  className="flex middle lexend-body-md sb"
                >
                  Register Interest
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.7 11.6758L9.70005 17.6758L8.30005 16.2758L12.9 11.6758L8.30005 7.07578L9.70005 5.67578L15.7 11.6758Z"
                      fill="#EB3A4A"
                    />
                  </svg>
                </Link>
              </div>

              <div className="badge lexend-body-sm l">Q1 2024</div>
            </NextGenAppBlock>
          </div>
        </div>
      </div>
    </div>
  );
};
