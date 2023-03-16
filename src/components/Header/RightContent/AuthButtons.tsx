import Button from '@/components/Button'
import { authModalState } from '@/utils/atoms/authModalAtom'
import { useSetRecoilState } from 'recoil'

const AuthButtons: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState)

  function handleOpenAuthModal(view: 'login' | 'signup') {
    setAuthModalState((prev) => ({
      ...prev,
      isOpen: true,
      view
    }))
  }

  return (
    <>
      <Button
        variant={{ solid: true }}
        text="Log In"
        onClick={() => handleOpenAuthModal('login')}
      />
    </>
  )
}

export default AuthButtons
