import React from 'react'

const Fotter = () => {
    return (
        <section id="project" className="flex flex-col items-center justify-center text-white mx-48 mt-10 pt-24">
            <div className='bg-[#424242] h-1 w-full rounded-full mb-4'></div>
            <div className='flex justify-evenly w-full'>
                <p>
                    sortmode314@gmail.com
                    <br />
                    P.S. - All designs and images are used for educational purposes. We do not intend to earn money using copyrighted products.
                    <br />
                    They are just used for skills presentation.
                    Peace Out...🕊
                </p>
                <div>
                    <a href="https://github.com/SadiqRaja1"><i class="devicon-github-original text-3xl mr-4"></i></a>
                    <a href="https://www.linkedin.com/in/shaikh-sadiq-raja-sardar-849a2321a/">
                        <i class="devicon-linkedin-plain text-3xl"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Fotter