import { PageError } from '@/components/Errors';
import { getServerSidei18nProps } from '@/services/serverSideProps/getServerSidei18nProps';

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

export const getStaticProps = getServerSidei18nProps;
