// this is blog detials page
import React from 'react'
import Image from 'next/image';
import { FaPenNib } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import allPostID from '@/lib/allPostID';
import Container from '@/app/components/Container';
import blog1 from '#/blog1.webp'
import blog2 from '#/blog2.webp'
import blog3 from '#/blog3.webp'
import PageHeaderReusable from '@/app/components/allReuseableCart/PageHeaderReusable';
import Blogmianrignt from '@/app/components/Blogmianrignt';

const Singleblog = async ({params}) => {
    const { id } = params;
    const singelpost = await allPostID(id)
    return (
        <>
        <section className=''>
            <PageHeaderReusable title='Blog Page' />
        <Container>
                <div className='lg:flex justify-between mt-[125px]'>
                    {/* Single page Right part */}
                    <div className='lg:w-[72%] w-full'>
                    <div className='pb-[30px]'>
                    {/* Image part */}
                    <div>
                        <Image src={blog1} alt='blogimg' className='w-full' />
                    </div>
                    {/* Name or Date part */}
                    <div className='flex items-center gap-8 py-[27px]'>
                        <div className='flex items-center gap-5'>
                            <FaPenNib className='text-[#FB2E86]' />
                            <span className='px-[40px] py-[4px] bg-[#FFE7F9] text-[#151875]'>Surf Auxion</span>
                        </div>
                        <div className='flex items-center gap-5'>
                            <MdOutlineDateRange className='text-[#FFA454]' />
                            <span className='px-[40px] py-[4px] bg-[#FFECE2] text-[#151875]'>Aug 09 2020</span>
                        </div>
                    </div>
                    {/* Title or p tag */}
                    <div>
                        <h3>{singelpost.title}</h3>
                        <p className='py-[25px] text-[16px] leading-[25px] text-[#8A8FB9]'>{singelpost.body} Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                    </div>
                    <p className='py-8 text-[16px] leading-[25px] text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                    <div className='bg-[#FAFAFB] py-[25px] px-[15px] border-l-4 border-[red]'>
                    <p className='text-[18px] leading-[28px] text-[#969CB4]'>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat.<br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequa
                        toamk risusu”
                    </p>
                </div>
                </div>
                <div className=' w-[100%] flex item-center justify-between gap-6 py-[40px]'>
                    <Image src={blog2} alt='blogimg' className='w-[50%]'/>
                    <Image src={blog3} alt='blogimg' className='w-[50%]'/>
                </div>
                <p className='py-8 text-[16px] leading-[25px] text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                    </div>
                    {/* Single page Left part */}
                    <div className='lg:w-[23%] w-full'>
                        <Blogmianrignt />
                    </div>
                </div>
                
               
            </Container>
        </section>
            

        </>
    )
}

export default Singleblog