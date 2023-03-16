import NavLogos from './NavLogos'
import RightContent from './RightContent/RightContent'
import SearchInput from './SearchInput'

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-dark-gray-500 px-5  h-12 shadow-sm  sticky top-0 flex items-center">
      <NavLogos />
      <SearchInput />
      <RightContent />
    </header>
  )
}

export default Header
