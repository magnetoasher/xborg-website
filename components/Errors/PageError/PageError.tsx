import { Videos } from '@/assets/videos';
import { GLOBAL_ROUTES } from '@/routes';

interface ErrorProps {
  statusCode: string;
  headerText: string;
  paragraphText: string;
}

export const PageError = (props: ErrorProps) => {
  const { statusCode, headerText, paragraphText } = props;

  return (
    <div className="page-error">
      <div className="status-code-section flex column center">
        <video className="video" src={Videos.lightning} autoPlay loop muted />

        <div className="status-code">
          <h1>{statusCode}</h1>
        </div>
      </div>

      <div className="redirect-section flex column center">
        <h1 className="lexend-heading">{headerText}</h1>

        <p>{paragraphText}</p>

        {/* <BtnPrimary
          label="Back to home"
          href={GLOBAL_ROUTES.LANDING}
          size={BUTTON_SIZE.LARGE}
          className="redirect-btn"
        /> */}
      </div>
    </div>
  );
};
