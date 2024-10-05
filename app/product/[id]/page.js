
import getIdData from '@/lib/getIdData';
import React from 'react'

const page = async ({params}) => {
    const {id} = params;
    const singleproduct = await getIdData(id)
    // console.log(singleproduct)
  return (
    <div>
        {singleproduct.title}
    </div>
  )
}

export default page