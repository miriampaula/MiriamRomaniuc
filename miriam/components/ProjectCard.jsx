import Image from 'next/image'
import React from 'react'

const ProjectCard = ({title, stack, pic, description}) => {
  return (
    <div className='mx-auto p-8 grid w-[35vw]  shadow-md bg-white rounded-3xl'>
 <Image 
        src={pic} 
        className='rounded-3xl border-gray-200 border w-[100%]  mx-auto' // Set width to 80% and center
        alt='proj' 
        width={450} 
        height={200} 
      />      <div className='pt-[2vw] text-[1.5vw]'> <div className='font-bold'>{title}</div>
      <div className=' flex gap-3 my-3 text-[1vw]'>
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
      <div className='text-sm pr-4'>{description}</div></div>
     

      </div>
  )
}

export default ProjectCard