import React from 'react'
import PageHeaderReusable from './allReuseableCart/PageHeaderReusable'
import AboutHead from './AboutHead'
import AboutFeatures from './AboutFeatures'
import AboutClient from './AboutClient'

const About = () => {
  return (
    <>
    <PageHeaderReusable title='About Us' />
    <AboutHead />
    <AboutFeatures />
    <AboutClient />
    </>
  )
}

export default About