
const Experience = ({ experienceContent }) => {
  return (
    <section id="experience" className="mx-4 flex flex-col items-center justify-center text-white md:mx-24 mt-10 pt-24">
      <h1 className='text-5xl font-bold mb-14'>Experience</h1>

      <div className='grid md:grid-cols-3 gap-4 mb-12'>
        <p className='text-2xl pb-4 font-semibold'>
          {experienceContent?.companyStart1} - {experienceContent?.companyEnd1}
        </p>
        <div className='col-span-2'>
          <h2 className='text-3xl font-bold'>{experienceContent?.companyName1}</h2>
          <h4 className='text-xl mb-2'>{experienceContent?.designation1}</h4>
          <p className='text-2xl'>{experienceContent?.companyComment1}</p>
        </div>
      </div>

      <div className='grid md:grid-cols-3 gap-4 mb-12'>
        <p className='text-2xl pb-4 pr-10 font-semibold'>
          {experienceContent?.companyStart2} - {experienceContent?.companyEnd2}
        </p>
        <div className='col-span-2'>
          <h2 className='text-3xl font-bold'>{experienceContent?.companyName2}</h2>
          <h4 className='text-xl mb-2'>{experienceContent?.designation2}</h4>
          <p className='text-2xl'>{experienceContent?.companyComment2}</p>
        </div>
      </div>
    </section>
  )
}

export default Experience