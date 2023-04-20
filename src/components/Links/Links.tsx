import { Link } from "react-router-dom";
import { ScrollViewModel } from "../../viewmodels/ScrollViewModel";

export const Links = () => {
  const scroll = new ScrollViewModel();

  function onRedirect() {
    scroll.scrollToSpecifiedScreen(0, 500);
  }
  return (
    <div className="footer-links lexend-body-xs2 row middle center">
      <a
        target="_blank"
        href="https://firebasestorage.googleapis.com/v0/b/xborg-quest.appspot.com/o/XBorg%20Website%20Terms%20of%20Use.pdf?alt=media&token=ff336d2a-0ca4-45d4-8dbd-6f895b34a8c9"
      >
        Terms of use
      </a>

      <a href="https://docsend.com/view/5dwn74pn6izud3vb" target="_blank">
        Public Deck
      </a>

      <a href="https://launchpad.xborg.com/" target="_blank">
        Launchpad
      </a>

      <Link to="/xtreme-championship-series" onClick={onRedirect}>
        XCS
      </Link>
      <Link to="/prometheus" onClick={onRedirect}>
        Prometheus NFT
      </Link>
      <Link to="/" onClick={onRedirect}>
        About us
      </Link>
      <Link to="/faq" onClick={onRedirect}>
        FAQ
      </Link>
    </div>
  );
};
