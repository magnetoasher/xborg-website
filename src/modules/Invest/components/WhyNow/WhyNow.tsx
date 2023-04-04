import Collapsible from "react-collapsible";
import { Images } from "../../../../assets/imgs/Images";

export const WhyNow = () => {
  return (
    <div className="whynow-faq faq row column middle center">
      <div className="content">
        <h2 className="text-center">Why now is a good time?</h2>
        <div className="faqs">
          <Collapsible trigger="Web3 going mainstream" className="collapsible">
            <p>
              Prominent game developers and studios, including but not limited
              to Epic Games, Enix Games, and Ubisoft, are proactively allocating
              resources towards the integration and adoption of Web3 games and
              blockchain technology. Our partnership with TeamBDS is another
              proof that traditional esports players are ready to embrace web3’s
              innovation.
            </p>
          </Collapsible>
          <Collapsible
            trigger="Leading positioning in the space"
            className="collapsible"
          >
            <p>
              We are positioning ourselves as the #1 infrastructure provider for
              esports teams leveraging blockchain technology. With a first-mover
              advantage and an extensive network of partners, XBorg has the
              resources, network and partners to achieve its vision.
            </p>
          </Collapsible>
          <Collapsible trigger="Interest from VC" className="collapsible">
            <p>
              XBorg has been approached by VCs showing interest, and with the
              the allocation for the Seed round has gotten smaller. It is
              important to us that our community is able to enter at the
              earliest round, and therefore, we are opening the round now before
              the allocations are complete.
            </p>
          </Collapsible>
          <Collapsible trigger="Winter building" className="collapsible">
            <p>Time to build for next bull and mass adoption</p>
          </Collapsible>
        </div>

        <div className="get-in-early text-center">
          <h2>Get in early</h2>

          <div className="desc text-center">
            XBorg is proud to be the home of the best players, builders and
            GameFi enthusiasts. This is why we are offering our community to
            invest early in XBorg, alongside the best investors of the space.
          </div>

          <img src={Images.invest.early} alt="" className="early-iamge" />
        </div>
      </div>
    </div>
  );
};
