import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header
      id="header"
      className="fixed top-0 left-1/2 z-50 flex w-full -translate-x-1/2 justify-center bg-gradient-to-r from-transparent via-black/20 to-transparent px-5 py-2"
    >
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* <SearchButton /> */}

        {/* <ThemeSwitch /> */}
        <MobileNav />
      </div>

      <div className="mask-exclude pointer-events-none absolute inset-0 -z-10 h-[200%] to-transparent backdrop-blur-2xl [mask-image:linear-gradient(to_bottom,black_0%_50%,transparent_50%_100%)]"></div>

      <div className="pointer-events-none absolute inset-0 -z-10 translate-y-[99%] backdrop-blur backdrop-brightness-125 [mask-image:linear-gradient(to_bottom,black_0%,black_2px,transparent_2px)]"></div>
    </header>
  )
}

export default Header
