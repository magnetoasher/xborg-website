import { Link } from "react-router-dom";
import { ButtonPrimary, SectionDescription } from "../../../../components";
import { ScrollViewModel } from "../../../../viewmodels/ScrollViewModel";

export const NextBigThing = () => {
  return (
    <div className="next-big-thing row column middle center w-full">
      <div className="content">
        <h2 className="text-center">
          Gaming & esports is the next <span>big thing</span>
        </h2>
        <SectionDescription className="desc text-center">
          XBorg is building at the intersection of gaming, esports, and digital
          identity, three large markets ready for disruption.
        </SectionDescription>

        <div className="bubbles row between bottom">
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
        </div>

        <div className="estimate text-center">
          Estimated market sizes by 2030 -{" "}
          <a href="" target="_blank">
            Source
          </a>
        </div>
      </div>

      <div className="forefront row column middle center w-full">
        <div className="content">
          <h2 className="text-center">XBorg is at the forefront of gaming</h2>

          <div className="key-points row">
            <div className="col expand">
              <div className="cube" />
              <div className="title">Breakthrough</div>
              <div className="desc">gaming protocol</div>
            </div>
            <div className="col expand">
              <div className="cube" />
              <div className="title">#1 web3</div>
              <div className="desc">gaming community</div>
            </div>
            <div className="col expand">
              <div className="cube" />
              <div className="title">Largest network</div>
              <div className="desc">of parters</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
