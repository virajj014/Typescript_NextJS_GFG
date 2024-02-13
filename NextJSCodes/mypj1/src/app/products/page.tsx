import React from 'react'
import styles from './product.module.css'
import Link from 'next/link'
const page = () => {

    const myproducts = [
        {
            name: "APPLE WATCH",
            id: "tyeryretu"
        },
        {
            name: "APPLE TV",
            id: "gdfgh"
        },
        {
            name: "APPLE iPhone",
            id: "vbxcbxcb"
        }
    ]
    return (
        <div >
            {/* <div className={styles.productcard}>
            <h1>Product 1</h1>
            <p>This is p1</p>
            <Link href="/products/1">
                View
            </Link>
        </div >
        <div className={styles.productcard}>
            <h1>Product 2</h1>
            <p>This is p2</p>
            <Link href="/products/2">
                View
            </Link>
        </div>

        <div className={styles.productcard}>
            <h1>Product 3</h1>
            <p>This is p3</p>
            <Link href="/products/3">
                View
            </Link>
        </div> */}


            {
                myproducts.map((product) => {
                    return (
                        <div className={styles.productcard}>
                            <h1>{product.name}</h1>
                            <p>This is {product.name}</p>
                            <Link href={`/products/${product.id}`}>
                                View
                            </Link>
                        </div >
                    )
                })
            }
        </div>
    )
}

export default page