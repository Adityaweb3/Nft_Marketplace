import '../styles/globals.css'
import Link from 'next/Link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className='border-b p-6'>
        <p className='text-4xl font-bold'>Meta MarketPlace</p>
        <div className='flex mt-4'>
          <Link legacyBehavior  href ="/">
            <a className='mr-4 text-pink-500'>
              Home
            </a>
          </Link>
          <Link legacyBehavior  href="/create-item">
            <a className='mr-6 text-pink-500'>
              Sell Digital Assets
            </a>
          </Link>
          <Link legacyBehavior  href = "/my-assets">
            <a className='mr-6 text-pink-500'>
              My Digital Assets
            </a>
          </Link>
          <Link legacyBehavior  href = "/creator-dashboard">
            <a className='mr-6 text-pink-500'>
              Creator DashBoard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />

   </div>
  )
}

export default MyApp
