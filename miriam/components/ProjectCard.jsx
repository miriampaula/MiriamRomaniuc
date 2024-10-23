import Image from 'next/image'
import React from 'react'

const ProjectCard = ({title, stack, pic, description}) => {
  return (
    <div className='mx-auto p-5 grid w-[450px] h-[450px] shadow-md bg-white rounded-3xl'>
      <Image src={'/imgs/proj1.png'} className='pt-8 rounded-3xl' alt='proj' width={450} height={200} />
      <div className='pt-2'> <div className='font-bold'>{title}</div>
      <div className=' flex gap-5 py-2'>
      <div className="rounded-full px-2 py-1 border border-black ">
              NextJS
            </div>
            <div className="rounded-full px-2 py-1 border border-black ">
              React
            </div>
            <div className="rounded-full px-2 py-1 border border-black ">
              AzureAPI
            </div>
            
      </div>
      <div className='text-sm'>{description}</div></div>
     

      </div>
  )
}

export default ProjectCard