import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { SiteActions } from '@/redux/site/actions';
import { AppDispatch } from '@/store';
import { Images } from '@/assets/imgs';
import { BtnRed } from '@/components/Buttons';
import { ObserverContainer } from '@/components/ObserverContainer';

export const Introduction = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(SiteActions.loadSite());
  }, [dispatch]);

  return (
    <div className="xbg-introduction" id="trigger2">
      <div className="inner-container">
        <div className="introduction-content flex column center">
          <ObserverContainer className="container flex column">
            <span className="lexend-text-sm">The XBorg Token</span>
            <h1 className="integralfc-h1 reveal-from-bottom" ref={ref}>
              Powering the XBorg ecosystem
            </h1>
            <p className="lexend-body-sm l">
              $XBG is the currency that enables players to interact and govern
              our ecosystem. Register interest now to get whitelisted.
            </p>

            <div className="flex  actions">
              <BtnRed
                label="Register Interest"
                href=""
                className="lexend-body-md"
              />
              <p className="lexend-body-sm l">
                Closed Presale <span className="lexend-body-sm">Q1 2023</span>
              </p>
            </div>
          </ObserverContainer>
          <div className="flex column  start vertical-line">
            <Image
              src={Images.xbg.roadmapVertical}
              alt=""
              quality={100}
              height={100}
              width={7}
            />
            <Image
              src={Images.xbg.roadmapVertical}
              alt=""
              quality={100}
              height={100}
              width={7}
            />
            <Image
              src={Images.xbg.roadmapVertical}
              alt=""
              quality={100}
              height={100}
              width={7}
            />
            <Image
              src={Images.xbg.roadmapVertical}
              alt=""
              quality={100}
              height={100}
              width={7}
            />
            <Image
              src={Images.xbg.roadmapVertical}
              alt=""
              quality={100}
              height={100}
              width={7}
            />
            <Image
              src={Images.xbg.roadmapVertical}
              alt=""
              quality={100}
              height={100}
              width={7}
            />
          </div>
          <Image
            src={Images.xbg.plus}
            alt=""
            quality={100}
            height={15}
            width={15}
            className="plus"
          />
          <div className="flex start middle horizontal-line">
            <Image
              src={Images.landing.roadmap}
              quality={100}
              alt=""
              height={7}
              width={100}
            />
            <Image
              src={Images.landing.roadmap}
              quality={100}
              alt=""
              height={7}
              width={100}
            />
            <Image
              src={Images.landing.roadmap}
              quality={100}
              alt=""
              height={7}
              width={100}
            />
            <Image
              src={Images.landing.roadmap}
              quality={100}
              alt=""
              height={7}
              width={100}
            />
            <Image
              src={Images.landing.roadmap}
              quality={100}
              alt=""
              height={7}
              width={100}
            />
            <Image
              src={Images.landing.roadmap}
              quality={100}
              alt=""
              height={7}
              width={100}
            />
            <Image
              src={Images.landing.roadmap}
              quality={100}
              alt=""
              height={7}
              width={100}
            />
            <Image
              src={Images.landing.roadmap}
              quality={100}
              alt=""
              height={7}
              width={100}
            />
            <Image
              src={Images.landing.roadmap}
              quality={100}
              alt=""
              height={7}
              width={100}
            />
            <Image
              src={Images.landing.roadmap}
              quality={100}
              alt=""
              height={7}
              width={100}
            />
            <Image
              src={Images.landing.roadmap}
              quality={100}
              alt=""
              height={7}
              width={100}
            />
            <Image
              src={Images.landing.roadmap}
              quality={100}
              alt=""
              height={7}
              width={100}
            />
            <div className="last-image">
              <Image
                src={Images.landing.roadmap}
                alt=""
                quality={100}
                height={7}
                width={100}
              />
            </div>
          </div>
        </div>

        <div className="introduction-bg">
          <Image
            src={Images.xbg.animatedLine}
            alt=""
            quality={100}
            width={1440}
            height={714}
            className="bg"
          />
          <Image
            src={Images.xbg.heroBubbles}
            alt=""
            quality={100}
            width={1440}
            height={714}
            className="bg"
          />
          <Image
            src={Images.xbg.data}
            alt=""
            quality={100}
            width={1636}
            height={727}
            className="bg bg-data"
          />
        </div>
      </div>
    </div>
  );
};
