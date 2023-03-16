import Header from '@/components/Header/index'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
