import Image from 'next/image';
import { BtnDark, LinkButton } from '@/components/Buttons';
import { SocialIcons } from '@/components/SocialIcons';
import { FlashlightCursorWrapper } from '@/components/FlashlightCursorWrapper';

export const LearnMore = () => {
  return (
    <div className="learn-more">
      <div className="container inner-container">
        <div className="card card1">
          <div className="card1-content">
            <p>COMING SOON...</p>
            <h4>$XBG is the native token of the XBorg ecosystem.</h4>
            <BtnDark className="card-btn" href="" label="Register Interest" />
          </div>
        </div>
        <div className="card card2">
          <div className="card2-top">
            <h4>Prometheus NFT</h4>
            <p>Join the 1,111 Prometheans shaping the future of gaming.</p>
          </div>
          <div className="card2-bottom">
            <BtnDark className="card-btn" href="" label="View OpenSea" />
            <LinkButton text="Learn more" to="" />
          </div>
        </div>
        <div className="card card3">
          <div className="card3-top">
            <h4>Join our Community</h4>
            <p>
              XBorg is home to the most accomplished players and distinguished
              investors in GameFi.
            </p>
          </div>
          <div className="card3-bottom">
            <SocialIcons />
          </div>
        </div>

        <div className="card card4">
          <h4>Built in Public</h4>
          <p>
            XBorg is built in transparency and decentralisation at its core.
          </p>

          <div className="card-links">
            <LinkButton text="Watch our latest Cyberlinks" to="" />
            <LinkButton text="View Blog" to="" />
            <LinkButton text="View Roadmap" to="" />
          </div>
        </div>
      </div>
    </div>
  );
};
