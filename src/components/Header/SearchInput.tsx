import { CiSearch } from 'react-icons/ci'

const SearchInput: React.FC = () => {
  return (
    <form
      className="mx-4 grow xl-mini:max-w-screen-sm xl-mini:mx-auto items-center space-x-2 rounded-full border border-gray-200 bg-gray-100 px-4 py-1.5 hover:border-blue-600 hover:bg-white"
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <CiSearch className="absolute h-6 w-6 text-gray-500" />
      <input
        type="text"
        id="search"
        placeholder="Search Reddit"
        className="w-full bg-transparent font-title hover:bg-white focus:outline-none px-5"
      />
      <button type="submit" hidden />
    </form>
  )
}

export default SearchInput
