import Button from '@/components/Button'
import { authModalState } from '@/utils/atoms/authModalAtom'
import { BsFacebook } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { IoClose } from 'react-icons/io5'
import { useRecoilValue } from 'recoil'
import AuthForm from './AuthForm'
import AuthModalBodyMobile from './AuthModalBodyMobile'

interface AuthModalBodyProps {
  handleClose: () => void
  isMobile: boolean
}

const AuthModalBody: React.FC<AuthModalBodyProps> = ({
  handleClose,
  isMobile
}) => {
  const modalState = useRecoilValue(authModalState)
  return (
    <>
      {isMobile ? (
        <AuthModalBodyMobile handleClose={handleClose} />
      ) : (
        <div className="relative w-full max-w-sm p-5 mx-auto rounded-md bg-white">
          <div className="space-y-4 flex flex-col justify-center py-10 px-8">
            {/* Modal Header */}

            <IoClose
              className="absolute top-1 right-2 cursor-pointer h-6 w-6 text-gray-500"
              onClick={handleClose}
            />

            <div className="text-left">
              <h1 className="text-xl font-title font-medium text-dark-gray-500">
                {modalState.view === 'login' ? 'Log In' : 'Sign Up'}
              </h1>

              {modalState.view === 'login' ? (
                <>
                  <span className="font-body text-xs text-dark-gray-500">
                    By continuing, you agree are setting up a Reddit account and
                    agree to our{' '}
                    <span className="spanLinkSecondary">User Agreement</span>{' '}
                    and{' '}
                    <span className="spanLinkSecondary">Privacy Policy</span>.
                  </span>
                </>
              ) : (
                <>
                  <span className="font-body text-xs text-dark-gray-500">
                    By continuing, you are setting up a Reddit account and agree
                    to our{' '}
                    <span className="spanLinkSecondary">User Agreement</span>{' '}
                    and{' '}
                    <span className="spanLinkSecondary">Privacy Policy</span>.
                  </span>
                </>
              )}
            </div>

            {modalState.view === 'signup' && (
              <div className="flex items-center space-x-2 w-full">
                <input type="checkbox" name="subscribe" id="subscribe" />
                <label
                  htmlFor="subscribe"
                  className="font-title text-dark-gray-400 font-normal text-xs cursor-pointer"
                >
                  I agree to get emails about cool stuff on Reddit
                </label>
              </div>
            )}

            {/* OAuth Buttons  */}

            <div className="relative space-y-3">
              <div className="flex items-center">
                <Button text="Continue with Google" variant={{ oauth: true }} />
                <FcGoogle className="h-5 w-5 absolute right-3" />
              </div>
              <div className="flex items-center">
                <Button
                  text="Continue with Facebook"
                  variant={{ oauth: true }}
                />
                <BsFacebook className="h-5 w-5 absolute left-3 text-blue-800" />
              </div>
            </div>

            {/* Divisor */}
            <div className="flex items-center space-x-4">
              <div className="w-full h-px bg-gray-200" />
              <span className="font-title font-bold text-sm uppercase text-gray-400">
                or
              </span>
              <div className="w-full h-px bg-gray-200" />
            </div>
            {/* Auth Form */}
            <AuthForm view={modalState.view} />
          </div>
        </div>
      )}
    </>
  )
}

export default AuthModalBody
