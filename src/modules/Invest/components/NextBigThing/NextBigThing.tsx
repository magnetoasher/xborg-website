import { ObserverContainer, SectionDescription } from "../../../../components";
import { Head } from "../Head";
import { Navbar } from "../Navbar";

export const NextBigThing = () => {
  return (
    <div className="next-big-thing row column middle center w-full">
      <Head />
      <Navbar active={1} />
      <div className="content">
        <h2 className="text-center">
          Gaming & esports is the next <span>big thing</span>
        </h2>
        <SectionDescription className="desc text-center">
          XBorg is building at the intersection of gaming, esports, and digital
          identity, three large markets ready for disruption.
        </SectionDescription>

        <ObserverContainer className="bubbles row between bottom">
          <div className="col row column center middle">
            <div className="small-bubble bubble">
              <span>$70bn</span>
            </div>

            <div className="bubble-title">Web3 gaming</div>
          </div>
          <div className="col row column center middle">
            <div className="medium-bubble bubble">
              <span>$80bn</span>
            </div>

            <div className="bubble-title">Metaverse esports</div>
          </div>
          <div className="col row column center middle">
            <div className="big-bubble bubble">
              <span>$600bn</span>
            </div>

            <div className="bubble-title">Digital identities</div>
          </div>
        </ObserverContainer>

        <div className="estimate text-center">
          Estimated market sizes by 2030 -{" "}
          <a href="https://www.web3-studios.com/research" target="_blank">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};
