import { authModalState } from '@/utils/atoms/authModalAtom'
import { useSetRecoilState } from 'recoil'
import { useMediaQuery } from 'usehooks-ts'
import AuthModalBody from './AuthModalBody'

interface AuthModalProps {
  isOpen: boolean
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen }) => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const setAuthModalState = useSetRecoilState(authModalState)

  function handleClose() {
    setAuthModalState((prev) => ({
      ...prev,
      isOpen: false
    }))
  }

  return (
    <>
      <div className="relative z-10">
        <div className={`${isOpen ? 'overlay' : 'invisible'}`}>
          <div
            className={`fixed inset-0 z-10 overflow-y-auto transition-all duration-500 transform  ${
              isOpen ? 'translate-y-0 visible' : 'invisible translate-y-96'
            }`}
          >
            {isOpen && (
              <div className="flex min-h-full items-end :justify-center md:items-center">
                <AuthModalBody handleClose={handleClose} isMobile={isMobile} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthModal
