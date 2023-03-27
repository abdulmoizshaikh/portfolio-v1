import Theme from '../styles/theme';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </main>
  );
}
