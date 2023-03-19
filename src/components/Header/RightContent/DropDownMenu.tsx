import { useState } from 'react'
import { HiOutlineMoon, HiOutlineUser } from 'react-icons/hi'
import { VscChevronDown } from 'react-icons/vsc'
import Switch from 'react-switch'

const DropDownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    setChecked(!checked)
  }

  return (
    <>
      <div
        className="flex items-center relative space-x-1 px-3 py-1 border transition duration-100 border-transparent hover:border-gray-200 rounded-sm cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HiOutlineUser className="w-6 h-6 text-gray-500" />
        <VscChevronDown className="w-5 h-5 text-gray-500" />
      </div>

      {isOpen && (
        <div className="absolute right-5 top-10 w-48 mt-2 bg-white rounded-sm shadow-lg pt-1">
          <div className="group flex items-center px-4 py-2 space-x-2 cursor-pointer hover:bg-link-500 ">
            <HiOutlineMoon className="w-6 h-6 text-gray-500 group-hover:text-white transform -rotate-90" />
            <p className="font-body text-sm capitalize font-medium group-hover:text-white">
              Dark Mode
            </p>

            <Switch checked={checked} onChange={handleChange} />
          </div>
        </div>
      )}
    </>
  )
}

export default DropDownMenu
