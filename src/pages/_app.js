import "@/styles/globals.css";
import { Theme } from '@radix-ui/themes';
import Navbar from "@/components/Navbar";
import '@radix-ui/themes/styles.css';

export default function App({ Component, pageProps }) {
  return (
    <Theme>
      <Navbar />
      <Component {...pageProps} />
    </Theme>
  );
}
