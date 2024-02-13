"use client";
import React from 'react'
import styles from '@/styles/navbar.module.css'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/redux/store';

interface CartItem {
    name: string;
    id: number;
    imagePath: string;
    price: number;
    description: string;
    quantity: number;
}

const Navbar = () => {
    const [cartItems, setCartItems] = React.useState(0)
    const Router = useRouter()
    const dispatch = useDispatch<AppDispatch>();
    const cartArray:CartItem[] = useAppSelector((state) => state.cartReducer);

    React.useEffect(() => {
        setCartItems(cartArray.length)
    }, [cartArray])
    return (
        <div className={styles.navbar}>
            <h1
                onClick={() => Router.push('/')}
            >Ecommerce
            </h1>
            <div className={styles.cart}>
                <span className={styles.cartCount}>{cartItems}</span>
                <svg 
                    onClick={() => Router.push('/cart')}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>

            </div>
        </div>
    )
}

export default Navbar