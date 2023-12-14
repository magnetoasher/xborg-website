import { LinkButton } from '@/components/Buttons/LinkButton';
import { CardBlock } from '@/components/CardBlock';
import { FlashlightCursorWrapper } from '@/components/FlashlightCursorWrapper';

export const NewEra = () => {
  return (
    <div className="new-era-container">
      <h1>Unlocking a new era of play</h1>
      <div className="container card-container">
        <div className="card-column">
          <FlashlightCursorWrapper className="card">
            <h3>Community first</h3>
            <p>
              Our community is our greatest asset, XBorg is home to the most
              accomplished players in Web3. Our key product decisions are made
              with the community.
            </p>
          </FlashlightCursorWrapper>
          <FlashlightCursorWrapper className="card">
            <h3>Transparency</h3>
            <p>
              We operate transparently with key metrics showing the success and
              failures of our ecosystem
            </p>
            <LinkButton text="View Dashboard" to="" />
          </FlashlightCursorWrapper>
        </div>
        <div className="card-column extra-space">
          <FlashlightCursorWrapper className="card">
            <h3>Make community first</h3>
            <p>
              Our community is our greatest asset, XBorg is home to the most
              accomplished players in Web3.
            </p>
          </FlashlightCursorWrapper>
          <FlashlightCursorWrapper className="card">
            <h3>Players are owners</h3>
            <p>
              Our key product decisions are made by the community with rewards
              going to them.
            </p>
          </FlashlightCursorWrapper>
        </div>
      </div>
    </div>
  );
};
