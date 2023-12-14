import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SiteActions } from '@/redux/site/actions';
import { AppDispatch } from '@/store';
import { BtnRed } from '@/components/Buttons/BtnRed';
import { ScrollDown } from '@/components/ScrollDown';

export const EmpoweringPlayers = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(SiteActions.loadSite());
  }, [dispatch]);

  return (
    <div className="empowering-container">
      <div className="content-wrapper">
        <div className="layout-image" />
        <div className="container flex">
          <div className="left-content">
            <div className="content">
              <p>Lorem ipsum dolor</p>
              <h1>Empowering players & fans</h1>
              <p>
                We’re a global team on a mission to build the next-generation of
                gaming, where players and fans experience ownership, and
                governance and are rewarded for their contributions.
              </p>
              <BtnRed label="Join Discord" href="" className="btn-discord" />
            </div>
          </div>
          <div className="right-content"></div>
        </div>
      </div>
      <ScrollDown anchor="about-container" />
    </div>
  );
};
