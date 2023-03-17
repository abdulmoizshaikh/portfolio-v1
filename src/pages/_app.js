import Theme from '../styles/theme';
import { Roboto } from '@next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: [400, 700],
});
export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </main>
  );
}
