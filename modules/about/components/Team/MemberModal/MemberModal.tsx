import React from 'react';
import Image from 'next/image';
import { TeamMember } from '@/constants/types';

interface IMemberModal {
  member: TeamMember;
  onClose: () => void;
}

export const MemberModal = ({ member, onClose }: IMemberModal) => {
  return (
    <div className="popup-container">
      <Image
        src="/images/about/common/cross.svg"
        alt="close"
        width={40}
        height={40}
        className="cross"
        onClick={onClose}
      />
      <div className="popup-content">
        <Image
          src={member?.photoUrl}
          alt={member.name}
          width={200}
          height={200}
        />
        <p className="name">{member.name}</p>
        <p className="intro">{member.intro}</p>
      </div>
    </div>
  );
};
