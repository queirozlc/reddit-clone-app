import AuthModal from '@/components/Modal/auth/AuthModal'
import { authModalState } from '@/utils/atoms/authModalAtom'
import { useRecoilState } from 'recoil'
import AuthButtons from './AuthButtons'
import DropDownMenu from './DropDownMenu'

const RightContent: React.FC = () => {
  const [modalState] = useRecoilState(authModalState)

  return (
    <>
      <AuthModal isOpen={modalState.isOpen} />
      <div className="flex items-center space-x-3">
        <AuthButtons />
        <DropDownMenu />
      </div>
    </>
  )
}

export default RightContent
