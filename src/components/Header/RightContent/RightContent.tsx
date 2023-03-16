import AuthModal from '@/components/Modal/auth/AuthModal'
import { authModalState } from '@/utils/atoms/authModalAtom'
import { useRecoilState } from 'recoil'
import AuthButtons from './AuthButtons'

const RightContent: React.FC = () => {
  const [modalState] = useRecoilState(authModalState)

  return (
    <>
      <AuthModal isOpen={modalState.isOpen} />
      <div className="flex items-center space-x-2">
        <AuthButtons />
      </div>
    </>
  )
}

export default RightContent
