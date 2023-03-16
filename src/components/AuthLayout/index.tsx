import AuthHeader from '../AuthHeader'

interface Props {
  children: React.ReactNode
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AuthHeader />
      {children}
    </>
  )
}

export default AuthLayout
