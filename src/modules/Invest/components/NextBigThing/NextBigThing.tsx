import { useEffect } from "react";
import { ObserverContainer, SectionDescription } from "../../../../components";
import { AppViewModel } from "../../../../viewmodels/AppViewModel";
import { Head } from "../Head";
import { Navbar } from "../Navbar";

export const NextBigThing = () => {
  const appVM = new AppViewModel();

  useEffect(() => {
    appVM.scrollBellowHeader();
  }, []);
  return (
    <div className="next-big-thing row column middle center w-full">
      <Head />
      <Navbar active={1} />
      <div className="content">
        <h2 className="vista-heading text-center">
          Gaming & esports is the next <span>big thing</span>
        </h2>
        <SectionDescription className="lexend-body-m desc text-center">
          XBorg is building at the intersection of gaming, esports, and digital
          identity, three large markets ready for disruption.
        </SectionDescription>

        <ObserverContainer className="bubbles row between bottom">
          <div className="col row column center middle">
            <div className="small-bubble bubble">
              <h3 className="lexend-heading">$70bn</h3>
            </div>

            <div className="bubble-title lexend-heading-s">Web3 gaming</div>
          </div>
          <div className="col row column center middle">
            <div className="medium-bubble bubble">
              <h3 className="lexend-heading">$80bn</h3>
            </div>

            <div className="bubble-title lexend-heading-s">
              Metaverse esports
            </div>
          </div>
          <div className="col row column center middle">
            <div className="big-bubble bubble">
              <h3 className="lexend-heading">$600bn</h3>
            </div>

            <div className="bubble-title lexend-heading-s">
              Digital identities
            </div>
          </div>
        </ObserverContainer>

        <div className="lexend-heading-s estimate text-center">
          Estimated market sizes by 2030 -{" "}
          <a href="https://www.web3-studios.com/research" target="_blank">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};
