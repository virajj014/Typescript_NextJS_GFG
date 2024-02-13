"use client";
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const page = () => {
  const router = useRouter()
  const mypds = [
    {
      id: 1,
      name: "Product1",
      description: "fas fasfasfasf"
    },
    {
      id: 2,
      name: "Product2",
      description: "ffgsdgsdf"
    },
    {
      id: 3,
      name: "Product3",
      description: "fas fahdfhdfghfasf"
    },
    {
      id: 4,
      name: "Product4",
      description: "faghdfhfgasdrwsdyhfgjdffsdasfasf"
    },
    {
      id: 5,
      name: "Product5",
      description: "faghdfhfgasdrwsdyhfgjdffsdasfasf"
    }
  ]



  const sendtosomepage = (pdname: string) => {
    return router.push(`/products/${pdname}`)
  }
  return (
    <div>
      {/* <Link href={`/products/product1`}>
        <p>Product 1</p>
      </Link>
      <Link href={`/products/product1`}>
        <p>Product 2</p>
      </Link>
      <Link href={`/products/product1`}>
        <p>Product 3</p>
      </Link> */}

      {/* {
        mypds.map(product => (
          <Link href={`/products/${product.name}`}>
            <p>{product.name}</p>
          </Link>
        ))
      } */}


         {
        mypds.map(product => (
          
            <p key={product.id}
            onClick={() => sendtosomepage(product.name)}
            >{product.name}</p>
        
        ))
      }
    </div>
  )
}

export default page