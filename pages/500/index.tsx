import { PageError } from '@/components/Errors';

export default function ServerErrorPage() {
  // TODO add when toggleNavigation has been added to main
  // useEffect(() => {
  //   dispatch(SiteActions.toggleNavigation(false));
  // });

  return (
    <div className="server-error-page flex column">
      <main>
        <div className="error-container container flex middle center">
          {/* <PageError
            statusCode={t('errors:500.statusCode')}
            headerText={t('errors:500.headerText')}
            paragraphText={t('errors:500.paragraphText')}
          /> */}
        </div>
      </main>
    </div>
  );
}
