import Button from '@/components/Button'
import Link from 'next/link'
import { BsFacebook } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { IoClose } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'

interface AuthModalBodyMobileProps {
  handleClose(): void
}

const AuthModalBodyMobile: React.FC<AuthModalBodyMobileProps> = ({
  handleClose
}) => {
  return (
    <div className="relative overflow-hidden rounded-t-lg p-5 sm:p-12 xs:p-10 bg-white text-left shadow-xl transition-all duration-500 ease-in-out w-full">
      <IoClose
        className="absolute top-1 right-2 cursor-pointer h-6 w-6 text-gray-500"
        onClick={handleClose}
      />

      {/* Modal Body Container */}
      <div className="mt-4 space-y-4 w-full relative flex justify-center flex-col text-center xs:max-w-screen-xs xs:mx-auto sm:max-w-[540px] sm:mx-auto">
        {/* Modal Header */}

        <h1 className="font-medium font-title text-xl">
          Create an account to continue
        </h1>

        <span className="authText">
          By continuing, you are setting up a Reddit account and agree to our{' '}
          <span className="spanLinkSecondary">User Agreement</span> and{' '}
          <span className="spanLinkSecondary">Privacy Policy</span>.
        </span>

        {/* OAuth Buttons */}

        <div className="flex items-center">
          <Button
            text="Continue with Google"
            variant={{ oauth: true }}
            onClick={handleClose}
          />
          <FcGoogle className="h-5 w-5 absolute right-3" />
        </div>
        <div className="flex items-center">
          <Button
            text="Continue with Facebook"
            variant={{ oauth: true }}
            onClick={handleClose}
          />
          <BsFacebook className="h-5 w-5 absolute left-3 text-blue-800" />
        </div>
        <Link href="/login" className="flex items-center">
          <Button
            text="Continue with Email"
            variant={{ oauth: true }}
            onClick={handleClose}
          />
          <MdEmail className="h-5 w-5 absolute left-3 text-link-500" />
        </Link>

        <div className="text-sm font-medium font-title pt-2">
          <span>
            Already a Redditor ?{' '}
            <Link href="/login" className="spanLink" onClick={handleClose}>
              Log in
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default AuthModalBodyMobile
