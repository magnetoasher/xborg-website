'use client';
import { useState, useEffect, Fragment } from 'react';
import Image from 'next/image';
import { Images } from '@/assets/imgs';
import { TeamMember } from '@/constants/types';
import { MemberModal } from './MemberModal';
import { TeamData } from '@/constants/Constants';
import { BtnDark } from '@/components/Buttons';

const getColumnConfig = (teamLength: number) => {
  const config = [];

  if (teamLength === 1) {
    config.push(1);
  } else if (teamLength === 2) {
    config.push(1, 2);
  } else {
    config.push(2);

    let remainingMembers = teamLength - 4; // 2 members at start and end
    const middleIndex = Math.floor(teamLength / 2);
    let hasAddedFour = false;

    while (remainingMembers > 0) {
      if (
        remainingMembers >= 4 &&
        !hasAddedFour &&
        config.length >= middleIndex
      ) {
        config.push(4);
        remainingMembers -= 4;
        hasAddedFour = true;
      } else {
        const columnSize = Math.min(remainingMembers, 3);
        config.push(columnSize);
        remainingMembers -= columnSize;
      }
    }
  }

  return config;
};

const Tabs = ['All', 'Product', 'Tech', 'Design', 'Ops', 'Advisors'];

interface MemberPhotoProps {
  activeTab: number;
  member: TeamMember;
  onClick: (member: TeamMember) => void;
}

const MemberPhoto = ({ activeTab, member, onClick }: MemberPhotoProps) => {
  return (
    <div
      className={`grid-item ${
        activeTab !== 0 &&
        member?.department !== Tabs[activeTab]?.toLocaleLowerCase() &&
        'blur'
      } ${
        member?.department === Tabs[activeTab]?.toLocaleLowerCase() && 'overlay'
      }`}
      onClick={() => {
        onClick(member);
      }}
    >
      <Image
        src={member?.photoUrl}
        fill
        sizes="(min-width: 1440) 250px, 100px"
        alt={member?.name}
      />
    </div>
  );
};

export const Team = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isTabletView, setIsTabletView] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null); // Track the selected member for the popup

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobileView(window.innerWidth <= 426);
      if (TeamData?.length > 6 && window.innerWidth <= 768) {
        setShowMore(true);
      }
    };

    // Initial check
    checkWindowSize();

    // Event listener for window resize
    window.addEventListener('resize', checkWindowSize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, [TeamData?.length]);

  const handleTeamMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closePopup = () => {
    setSelectedMember(null);
  };

  const renderGridItems = () => {
    const isMobileTablet = isMobileView || isTabletView;
    const columnConfig = (): number[] => {
      if (isMobileTablet) {
        if (!showMore) {
          if (isMobileView) {
            return [
              Math.ceil(TeamData?.length / 3),
              Math.ceil(TeamData?.length / 3),
              Math.ceil(TeamData?.length / 3),
            ];
          } else {
            return [
              Math.ceil(TeamData?.length / 4),
              Math.ceil(TeamData?.length / 4),
              Math.ceil(TeamData?.length / 4),
              Math.ceil(TeamData?.length / 4),
            ];
          }
        } else if (showMore && isMobileView) {
          return [3, 3, 3];
        } else if (showMore && isTabletView) {
          return [3, 3, 3, 3]; // Adjusted to display 3 columns for tablet view
        }
      } else {
        return getColumnConfig(TeamData?.length);
      }

      // Default return statement to satisfy TypeScript
      return [];
    };

    let teamIndex = 0;

    return (
      <>
        {columnConfig()?.map((columnSize: number, columnIndex: number) => (
          <div
            key={columnIndex}
            className="grid-column"
            style={{
              paddingTop: columnIndex % 2 === 0 ? '40px' : '',
            }}
          >
            {Array.from({ length: columnSize }).map(() => (
              <Fragment key={teamIndex}>
                {TeamData[teamIndex] && (
                  <MemberPhoto
                    activeTab={activeTab}
                    key={teamIndex}
                    member={TeamData[teamIndex]}
                    onClick={handleTeamMemberClick}
                  />
                )}
                <div style={{ display: 'none' }}>{teamIndex++}</div>
              </Fragment>
            ))}
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="team-container">
      <div className="container flex column">
        <h1>Our team</h1>
        <div className="tabs-container">
          {Tabs?.map((tab, index: number) => (
            <div
              key={index}
              className={`tab ${activeTab === index ? 'active' : ''} `}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="grid-container">{renderGridItems()}</div>
        {(isMobileView || isTabletView) && TeamData.length > 6 && (
          <BtnDark href="" onClick={() => setShowMore(!showMore)}>
            {showMore ? 'View All' : 'View less'}
          </BtnDark>
        )}

        {selectedMember && (
          <MemberModal member={selectedMember} onClose={closePopup} />
        )}
        <div className="layout-object1">
          <Image
            src={Images.about.spheres}
            width={40}
            height={50}
            alt="layout-object1"
          />
        </div>
        <div className="layout-object2">
          <Image
            src={Images.about.spheres3}
            width={100}
            height={100}
            alt="layout-object2"
          />
        </div>
        <div className="layout-object3">
          <Image
            src={Images.about.spheres4}
            width={62}
            height={62}
            alt="layout-object3"
          />
        </div>
        <div className="layout-object4">
          <Image
            src={Images.about.spheres4}
            width={40}
            height={40}
            alt="layout-object4"
          />
        </div>
        <div className="layout-object5">
          <Image
            src={Images.about.spheres5}
            width={84}
            height={84}
            alt="layout-object5"
          />
        </div>
      </div>
    </div>
  );
};
