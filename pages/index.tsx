import { Footer } from '@/components/Footer';
import {
  EmpoweringPlayers,
  Friends,
  Introduction,
  Launching,
  LearnMore,
  News,
  NextGenApps,
  NextGenGaming,
  Onboarding,
  Posibilities,
  Roadmap,
  ScrollDown,
  TokenizedEsports,
} from '@/modules/landing';
import Head from 'next/head';

export default function LandingPage() {
  return (
    <div className="landing-page page-spacer">
      <Head>
        {/* <title>{t('landing:pageTitle')}</title>
        <meta name="description" content={t('landing:pageDesc') as string} />
        <meta name="og:description" content={t('landing:pageDesc') as string} />
        <meta name="og:title" content={t('landing:pageTitle') as string} />
        <meta
          name="og:image"
          content={`${window.location.origin}/images/logo_full.svg`}
        /> */}
      </Head>

      <Introduction />
      <Onboarding />
      <EmpoweringPlayers />
      <Posibilities />
      <NextGenApps />
      <NextGenGaming />
      <Launching />
      <TokenizedEsports />
      <Roadmap />
      <News />
      <Friends />
      <LearnMore />
      <Footer />

      <ScrollDown />
    </div>
  );
}
