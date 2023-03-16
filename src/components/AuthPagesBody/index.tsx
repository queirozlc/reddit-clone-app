import { BsFacebook } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import Button from '../Button'
import AuthForm from '../Modal/auth/AuthForm'

interface AuthPagesBodyProps {
  page: 'login' | 'register'
}

const AuthPagesBody: React.FC<AuthPagesBodyProps> = ({ page }) => {
  return (
    <div className="p-5 w-full space-y-3.5 xs:space-y-7 max-w-screen-xs mx-auto lg:py-20">
      <div className="text-left space-y-4">
        <h1 className="capitalize text-dark-gray-500 font-title font-medium text-xl">
          {page === 'login' ? 'Log In' : 'Sign Up'}
        </h1>

        {page === 'login' ? (
          <p className="spanAuthHeader">
            By continuing, you agree are setting up a Reddit account and agree
            to our <span className="spanLinkSecondary">User Agreement</span> and{' '}
            <span className="spanLinkSecondary">Privacy Policy</span>.
          </p>
        ) : (
          <>
            <p className="spanAuthHeader">
              By continuing, you are setting up a Reddit account and agree to
              our <span className="spanLinkSecondary">User Agreement</span> and{' '}
              <span className="spanLinkSecondary">Privacy Policy</span>.
            </p>
          </>
        )}
        {page === 'register' && (
          <div className="flex items-center space-x-2 w-full ">
            <input type="checkbox" name="subscribe" id="subscribe" />
            <label
              htmlFor="subscribe"
              className="font-title text-dark-gray-400 font-normal text-xs cursor-pointer"
            >
              I agree to get emails about cool stuff on Reddit
            </label>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-5 ">
        <div className="flex items-center relative w-full">
          <Button
            text="Continue with Google"
            type="button"
            variant={{ oauth: true }}
          />
          <FcGoogle className="absolute right-3 h-5 w-5" />
        </div>
        <div className="flex items-center relative w-full">
          <Button
            text="Continue with Facebook"
            variant={{ oauth: true }}
            type="button"
          />
          <BsFacebook className="h-5 w-5 absolute left-3 text-blue-800" />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="splitter" />
        <span className="font-title font-bold text-sm uppercase text-gray-400">
          or
        </span>
        <div className="splitter" />
      </div>

      {page === 'login' ? (
        <>
          <AuthForm view="login" hasLink />
        </>
      ) : (
        <>
          <AuthForm view="signup" hasLink />
        </>
      )}
    </div>
  )
}

export default AuthPagesBody
