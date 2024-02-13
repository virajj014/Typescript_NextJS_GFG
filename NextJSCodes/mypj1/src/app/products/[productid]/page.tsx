import React from 'react'

type PageProps = {
  params: any; 
};

const page = ({params}: PageProps) => {
  // console.log(params)
  return (
    <div>PRODUCT page {params.productid}</div>
  )
}

export default page