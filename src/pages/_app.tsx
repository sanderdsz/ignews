import { AppProps } from 'next/app'
import { Header } from '../components/Header'
// @ts-ignore
import { Provider as NextAuthProvider } from 'next-auth/client'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp
