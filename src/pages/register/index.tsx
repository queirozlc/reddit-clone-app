import AuthLayout from '@/components/AuthLayout'
import AuthPagesBody from '@/components/AuthPagesBody'
import { NextPageWithLayout } from '../_app'

const Register: NextPageWithLayout = () => {
  return (
    <main className="myContainer bg-white md:min-w-full">
      <AuthPagesBody page="register" />
    </main>
  )
}

Register.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>
}

export default Register
