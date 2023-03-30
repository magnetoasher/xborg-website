import { ApplicationNetwork } from "./ApplicationNetwork";
import { CredentialNetwork } from "./CredentialNetwork";
import { DecentralizedSocieties } from "./DecentralizedSocieties";
import { VisionIntroduction } from "./VisionIntroduction";

export const Vision = () => {
  return (
    <div className="vision expand">
      <VisionIntroduction />
      <div className="row">
        <div className="page-border" />
        <div className="row column expand vision-container">
          <CredentialNetwork />
          <ApplicationNetwork />
          <DecentralizedSocieties />
        </div>
      </div>
    </div>
  );
};
