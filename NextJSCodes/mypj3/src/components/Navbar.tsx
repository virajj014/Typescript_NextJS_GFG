import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
        <Link href={'/'}>
            <button>Home</button>
        </Link>
        <Link href={'/profile'}>
            <button>Profile</button>
        </Link>
    </div>
  )
}

export default Navbar