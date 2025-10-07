import React from 'react'

const Experience = () => {
    return (
        <section id="experience" className="flex flex-col items-center justify-center text-white md:mx-24 mt-10 pt-24">
            <h1 className='text-5xl font-bold mb-14'>Experience</h1>

            <div className='grid md:grid-cols-3 gap-4 mb-12'>
                <p className='text-2xl pb-4 font-semibold'>Aug 2025 - Sep 2025</p>
                <div className='col-span-2'>
                    <h2 className='text-3xl font-bold'>Hash Hack Code (Tech Diva)</h2>
                    <h4 className='text-xl mb-2'>Web Developer Intern</h4>
                    <p className='text-2xl'>Worked as a Web Developer Intern, contributing to multiple educational and interactive projects aimed at enhancing student learning experiences. Built responsive and interactive web pages using HTML, CSS, and JavaScript (jQuery), and developed features such as interactive tutorials with voice guidance, block-based coding systems, game-like educational activities, and dynamic about pages to create engaging and user-friendly learning platforms.</p>
                </div>
            </div>

            <div className='grid md:grid-cols-3 mb-12'>
                <p className='text-2xl pb-4 font-semibold'>Dec 2022 - April 2025</p>
                <div className='col-span-2'>
                    <h2 className='text-3xl font-bold'>CarTrade Tech Public Limited</h2>
                    <h4 className='text-xl mb-2'>Senior Executive</h4>
                    <p className='text-2xl'>Handled priority escalation calls from customers by identifying their concerns, providing quick and effective resolutions, and managing irate customers with professionalism. Diagnosed website glitches faced by customers and shared clear, detailed issue reports with the tech team by leveraging web development knowledge. Collaborated closely with the Product and Tech teams to escalate complex issues, drafted comprehensive email briefs, and set resolution timelines. Additionally, followed up on reported issues and responded to customer emails to ensure timely resolution and maintain high customer satisfaction.</p>
                </div>
            </div>

            <div className='grid md:grid-cols-3'>
                <p className='text-2xl pb-4 font-semibold'>Sep 2021 - Oct 2022</p>
                <div className='col-span-2'>
                    <h2 className='text-3xl font-bold'>Sincetele Info Solutions Pvt Ltd</h2>
                    <h4 className='text-xl mb-2'>Sales Representative</h4>
                    <p className='text-2xl'>Promoted and sold ICICI Bank credit cards through outbound calls by clearly explaining product features, benefits, and offers to customers, while also assisting them throughout the video KYC process during live calls to ensure a smooth and seamless onboarding experience.</p>
                </div>
            </div>
        </section>
    )
}

export default Experience