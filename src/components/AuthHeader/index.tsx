import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoArrowBack } from 'react-icons/io5'

const AuthHeader: React.FC = () => {
  const { pathname } = useRouter()

  return (
    <header className="flex items-center w-full h-[50px] bg-darker-blue-500 px-5 sticky top-0 z-50">
      <div className="flex items-center w-full space-x-6">
        <Link href={'/'}>
          <IoArrowBack className="h-6 w-6 text-white" />
        </Link>
        <Link href={pathname} className="flex items-center space-x-2">
          <div className="relative h-8 w-8">
            <Image
              src="images/redditFace.svg"
              alt="reddit face logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative h-12 w-16 pb-1">
            <Image
              src="images/redditTextDark.svg"
              alt="reddit logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>
      </div>
    </header>
  )
}

export default AuthHeader
