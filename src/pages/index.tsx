import Layout from '@/components/Layout'
import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <main className="myContainer">
      <h1>Home</h1>
    </main>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
