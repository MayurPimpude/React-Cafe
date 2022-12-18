import React from 'react'

export default function Cardo() {
    return (
        <div>
            <hr class="my-1 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-[#fc9850]"></hr>
            <h1 class="mt-2 mb-4 text-center font-semibold text-5xl text-[#582500]">Reviews</h1>
            <div class="flex flex-wrap justify-center">

                <a href="#" class="flex flex-col m-4 bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-[#582500] dark:hover:bg-[#793403]">
                    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://images.unsplash.com/photo-1500912898059-fbf4844f28ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwZHJpbmtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="coffee review 1" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Naval pimpude 2021</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-[#ffd1b1]">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </a>

                <a href="#" class="flex flex-col m-4 bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-[#582500] dark:hover:bg-[#793403]">
                    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://images.unsplash.com/photo-1600658494306-814b9a13e63f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="coffee review 2" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Deepak Prasad 2021</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-[#ffd1b1]">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </a>

            </div>
        </div>
    )
}
