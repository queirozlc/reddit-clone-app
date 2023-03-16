import Layout from '@/components/Layout'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}

export default MyApp
