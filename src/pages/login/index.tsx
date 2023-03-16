import AuthLayout from '@/components/AuthLayout'
import AuthPagesBody from '@/components/AuthPagesBody'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'

const Login: NextPageWithLayout = () => {
  return (
    <main className="myContainer bg-white md:min-w-full">
      <AuthPagesBody page="login" />
    </main>
  )
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>
}

export default Login
