import { PageError } from '@/components/Errors';

export default function NotFoundPage() {
  // TODO add when toggleNavigation has been added to main
  // useEffect(() => {
  //   dispatch(SiteActions.toggleNavigation(false));
  // });

  return (
    <div className="not-found-page flex column">
      <main>
        <div className="error-container container flex middle center">
          {/* <PageError
            statusCode={t('errors:404.statusCode')}
            headerText={t('errors:404.headerText')}
            paragraphText={t('errors:404.paragraphText')}
          /> */}
        </div>
      </main>
    </div>
  );
}
