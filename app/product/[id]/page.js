
import PageHeaderReusable from '@/app/components/allReuseableCart/PageHeaderReusable';
import ProductDeatilsImage from '@/app/components/ProductDeatilsImage';
import getIdData from '@/lib/getIdData';
import React from 'react'

const page = async ({params}) => {
    const {id} = params;
    const singleproduct = await getIdData(id)
    // console.log(singleproduct)
  return (
    <>
    <PageHeaderReusable title='Product Details' />
    <ProductDeatilsImage data={singleproduct} />
    </>
  )
}

export default page