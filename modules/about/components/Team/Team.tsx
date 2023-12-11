'use client';
import { useState, useEffect, useMemo } from 'react';
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

interface MemberPhotoProps {
  member: TeamMember;
  onClick: (member: TeamMember) => void;
}
const MemberPhoto = ({ member, onClick }: MemberPhotoProps) => {
  return (
    <div
      className="grid-item"
      onClick={() => {
        onClick(member);
      }}
    >
      <Image
        src={member.photoUrl}
        width={100}
        height={100}
        alt={member?.name}
      />
    </div>
  );
};

const Tabs = ['All', 'Product', 'Tech', 'Design', 'Ops', 'Advise'];

export const Team = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [team, setTeam] = useState([...TeamData]);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null); // Track the selected member for the popup

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobileView(window.innerWidth <= 426);
      if (team?.length > 6 && window.innerWidth <= 426) {
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
  }, [team?.length]);

  const handleTeamMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closePopup = () => {
    setSelectedMember(null);
  };

  // Filter team members based on the selected tab and department
  const filteredTeam = useMemo(() => {
    if (activeTab === 0) return TeamData;
    return TeamData.filter(
      (member) =>
        member.department.toLowerCase() === Tabs[activeTab].toLowerCase(),
    );
  }, [activeTab]);

  useEffect(() => {
    setTeam(filteredTeam); // Update the team based on the selected tab and department
  }, [activeTab, filteredTeam]);

  const renderGridItems = () => {
    const columnConfig =
      isMobileView && showMore ? [3, 3, 3] : getColumnConfig(team?.length);
    let teamIndex = 0;

    return (
      <>
        {columnConfig.map((columnSize, columnIndex) => (
          <div
            key={columnIndex}
            className="grid-column"
            style={{
              paddingTop: columnIndex % 2 === 0 ? '40px' : 0,
            }}
          >
            {Array.from({ length: columnSize }).map((_, index) => (
              <>
                <MemberPhoto
                  key={index}
                  member={TeamData[teamIndex]}
                  onClick={handleTeamMemberClick}
                />
                <div style={{ display: 'none' }}>{teamIndex++}</div>
              </>
            ))}
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="team-container">
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
      {isMobileView && team.length > 6 && (
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
  );
};
