import { Metadata } from 'next'
import React from 'react'


type Props = {
    params :{
        productid: string
    }
}


export const generateMetadata = ({params}:Props):Metadata => {
    return {
        title : `${params.productid}`
    }
}

const page = ({params}:Props) => {
  return (
    <div>this is single page for {params.productid}</div>
  )
}

export default page