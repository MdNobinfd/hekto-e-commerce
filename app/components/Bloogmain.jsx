'use client'
import React, { useState } from 'react'
import PageHeaderReusable from './allReuseableCart/PageHeaderReusable' 
import Blogtext from './Blogtext'
import Blogpagination from './Blogpagination'
import Container from './Container'
import Blogmianrignt from './Blogmianrignt'

const Bloogmain = ({ allproduct }) => {
    const [perpage, setPerPage] = useState(3);  
    const [currentpage, setCurrentPage] = useState(1);  
    const lastPage = currentpage * perpage;
    const firstPage = lastPage - perpage;

    const allpage = Array.isArray(allproduct) ? allproduct.slice(firstPage, lastPage) : [];

    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(allproduct.length / perpage); i++) {
        pageNumber.push(i);
    }

    const pagehandel = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <PageHeaderReusable title='Blog Page' />
            <Container>
                <div className='w-[100%] mt-[125px] lg:flex justify-between gap-4'>
                    {/* Left part */}
                    <div className='lg:w-[72%] w-full'>
                        <Blogtext allproduct={allpage} />
                        <div>
                            <Blogpagination pageNumber={pageNumber} pagehandel={pagehandel} />
                        </div>
                    </div>
                    {/* Right part */}
                    <div className='lg:w-[23%] w-full'>
                        <Blogmianrignt />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Bloogmain
