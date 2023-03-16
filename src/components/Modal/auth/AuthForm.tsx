import Button from '@/components/Button'
import { authModalState } from '@/utils/atoms/authModalAtom'
import { useSetRecoilState } from 'recoil'
import InputGroup from './InputGroup'

interface AuthFormProps {
  view: 'login' | 'signup' | 'resetPassword'
}

const AuthForm: React.FC<AuthFormProps> = ({ view }) => {
  const setAuthModalState = useSetRecoilState(authModalState)

  function handleModalView() {
    setAuthModalState((prevState) => ({
      ...prevState,
      view: prevState.view === 'login' ? 'signup' : 'login'
    }))
  }

  return (
    <form className="space-y-2">
      {view === 'login' && (
        <>
          <div className="space-y-4">
            <InputGroup
              id="username"
              label="Username"
              type="text"
              placeholder="Username"
              required
            />

            <InputGroup
              id="password"
              label="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <div className="flex flex-col space-y-4 pt-3 lg:space-y-5">
            <div className="text-sm font-title font-normal">
              <span>
                Forget your <span className="spanLink">username</span> or{' '}
                <span className="spanLink">password</span> ?
              </span>
            </div>

            <Button text="Log In" variant={{ brand: true }} />

            <div className="text-sm font-title font-normal">
              <span>
                New to Reddit?{' '}
                <span className="spanLink" onClick={handleModalView}>
                  Sign Up
                </span>{' '}
              </span>
            </div>
          </div>
        </>
      )}

      {view === 'signup' && (
        <div className="space-y-5 flex flex-col mt-6">
          <div className="flex items-center relative">
            <input
              type="email"
              id="email"
              className="peer authInput"
              placeholder="Username"
              required
            />
            <label htmlFor="email" className="floatingLabel">
              Email
            </label>
          </div>
          <Button text="Continue" variant={{ brand: true }} disabled />
          <span className="text-sm font-title font-normal">
            Already a redditor?{' '}
            <span className="spanLink" onClick={handleModalView}>
              Log In
            </span>
          </span>
        </div>
      )}
    </form>
  )
}

export default AuthForm
