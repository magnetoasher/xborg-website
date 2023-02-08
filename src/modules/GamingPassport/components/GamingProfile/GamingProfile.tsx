import { GamingCard, SectionHead } from "../../../../components";

export const GamingProfile = () => {
  return (
    <div className={`gaming-profile expand row middle`}>
      <div className='row middle center expand'>
        <GamingCard />
      </div>
      <div className='description expand'>
        <SectionHead
          title='The Ultimate Gaming Profile'
          description='Forge gaming badges that showcase your skills, statistics, and reputation. All in one place.'
        />
      </div>
    </div>
  );
};
