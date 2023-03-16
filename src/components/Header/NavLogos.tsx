import Image from 'next/image'
import Link from 'next/link'

const NavLogos: React.FC = () => {
  return (
    <div className="flex items-center">
      <Link href="/" className="flex items-center dark:md:space-x-2 max-h-12">
        <div className="h-8 w-8 relative">
          <Image
            src="images/redditFace.svg"
            fill
            alt="reddit face logo"
            className="object-contain"
          />
        </div>

        <div className="relative h-12 w-16 hidden md:block dark:hidden">
          <Image
            src="images/redditText.svg"
            fill
            alt="reddit text logo"
            className="object-contain"
          />
        </div>

        <div className="relative h-12 w-16 hidden dark:md:block">
          <Image
            src="images/redditTextDark.svg"
            fill
            alt="reddit text logo"
            className="object-contain"
          />
        </div>
      </Link>
    </div>
  )
}

export default NavLogos
