import { AnimatePresence, motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@fontsource/lexend/100.css';
import '@fontsource/lexend/200.css';
import '@fontsource/lexend/300.css';
import '@fontsource/lexend/400.css';
import '@fontsource/lexend/500.css';
import '@fontsource/lexend/600.css';
import '@fontsource/lexend/700.css';
import '@fontsource/lexend/800.css';
import '@fontsource/lexend/900.css';
import '../styles/main.css';
import { Navigation } from '@/components/Navigation';
import { Controller } from 'react-scrollmagic';
import { LoaderPage } from '@/components/Loader';
import { Provider } from 'react-redux';
import store from '@/store';

function App({ Component, pageProps, router }: AppProps) {
  const variants = {
    initial: { opacity: 0, x: 0, y: 30 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 30 },
  };

  return (
    <Provider store={store}>
      <div className="landing-page">
        <Head>
          <title>Enter the XBorg Universe</title>
          <meta
            name="description"
            content="An epic adventure awaits, where challenges are many and legendary rewards are to be won."
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <LoaderPage />

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            key={router.route}
            variants={variants}
          >
            {/* <SimpleBar className="page-scrollbar"> */}
            <Controller>
              <Navigation />
              <Component {...pageProps} />
            </Controller>
            {/* </SimpleBar> */}
          </motion.div>
        </AnimatePresence>
      </div>
    </Provider>
  );
}

export default App;
