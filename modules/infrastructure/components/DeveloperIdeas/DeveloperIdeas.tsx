import { Images } from '@/assets/imgs';
import clsx from 'clsx';
import Image from 'next/image';

export const DeveloperIdeas = () => {
  return (
    <div className="infrastructure-developer-ideas">
      <div className="container">
        <h2 className="integralfc-h2">DEVELOPER IDEAS</h2>

        <div className="ideas">
          {[
            {
              text: (
                <>
                  Tournament application <br /> with gated brackets
                </>
              ),
            },
            {
              text: (
                <>
                  Esports <br /> scouting app
                </>
              ),
            },
            {
              text: (
                <>
                  Launchpad connected <br /> to player identity
                </>
              ),
            },
            {
              grow: true,
              text: (
                <>
                  Brand/Game to player <br /> notification system
                </>
              ),
            },
            {
              grow: true,
              text: (
                <>
                  Giveaway <br />
                  tooling
                </>
              ),
            },
            {
              text: <>Player progression tracking</>,
            },
            {
              grow: true,
              text: (
                <>
                  Fantasy <br /> League
                </>
              ),
            },
            {
              text: <>UGC tools</>,
            },
            {
              grow: true,
              text: (
                <>
                  More efficient in-game <br /> matchmaking
                </>
              ),
            },
            {
              grow: true,
              text: (
                <>
                  Player <br /> discovery tool
                </>
              ),
            },
            {
              grow: true,
              text: (
                <>
                  Tokenized gaming <br /> communities
                </>
              ),
            },
          ].map((el, idx) => {
            return (
              <div
                key={'idea' + '-' + idx}
                className={clsx('idea-container', { 'sm-grow': el.grow })}
              >
                <div className={'idea'}>
                  <Image
                    src={Images.infrastructure.marble2}
                    alt="idea"
                    width={48}
                    height={48}
                  />
                  <div className="text">{el.text}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
