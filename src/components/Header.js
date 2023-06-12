import React from 'react'
import cup from '../images/takeaway.png'

export default function Header() {
    return (
        <div className='bg-[#221003]  h-screen flex justify-center items-center'>
            <div class="mx-auto md:px-6">
                <section class="text-center lg:text-left">
                    <div class="px-6 py-12 md:px-12">
                        <div class="grid items-center lg:grid-cols-2 ">
                            <div class="mb-12 lg:mb-0">
                                <p className='text-gray-300'>Since 2022</p>
                                <h2 class="my-2 text-5xl font-bold leading-tight text-white tracking-tight">
                                    Are you ready <br />
                                    <span class=" text-[#EAB54C]">for a Coffee?</span>
                                </h2>
                                <a class="mb-2 inline-block rounded bg-success px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white bg-[#EAB54C] hover:bg-[#b68624]"
                                    data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">See More</a>
                               
                            </div>

                            <div class="mb-12 lg:mb-0">
                                <img src={cup}
                                    class="w-full mx-auto h-full max-w-lg shadow-black/20" alt="cup" />
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </div>


    )
}


