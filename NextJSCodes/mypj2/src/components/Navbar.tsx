'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '@/styles/Navbar.module.css'
const Navbar = () => {
  const pathname = usePathname()
  useEffect(() => {
    console.log(pathname)
  }, [pathname])
  return (
    <div>
      <Link href='/'>
        {
          pathname == '/' ?
            <button className={styles.active}>Home</button>
            :
            <button>Home</button>
        }
      </Link>
      <Link href='/contact'>
      {
          pathname == '/contact' ?
            <button className={styles.active}>contact</button>
            :
            <button>contact</button>
        }
      </Link>
      <Link href='/about'>
      {
          pathname == '/about' ?
            <button className={styles.active}>about</button>
            :
            <button>about</button>
        }
      </Link>
      <Link href='/login'>
      {
          pathname == '/login' ?
            <button className={styles.active}>login</button>
            :
            <button>login</button>
        }
      </Link>
      <Link href='/register'>
      {
          pathname == '/register' ?
            <button className={styles.active}>Register</button>
            :
            <button>Register</button>
        }
      </Link>
      <Link href='/products'>
      {
          pathname == '/products' ?
            <button className={styles.active}>products</button>
            :
            <button>products</button>
        }
      </Link>
    </div>
  )
}

export default Navbar