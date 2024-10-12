import React from 'react'
import PageHeaderReusable from '../components/allReuseableCart/PageHeaderReusable'
import Brand from '../components/Brand'
import Shoopmain from '../components/Shoopmain'
import getAlldata from '@/lib/getAlldata'

const page = async () => {
    const data = await getAlldata()
  return (
    <>
    <PageHeaderReusable title='Shop Left Sidebar' />
    <Shoopmain data={data} />
    <Brand />
    </>
  )
}

export default page