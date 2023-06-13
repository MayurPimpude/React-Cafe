import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function Review() {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
  

    return (
        <div id='reserve'>
            <section class="bg-gray-900 py-10">
                <h1 class="mt-2 mb-4 text-center text-5xl text-[#EAB54C]">Reserve</h1>
                <div class="container h-full px-6 py-5">
                    <div
                        class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">

                        <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                            <img
                                src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                                class="w-full rounded-xl"
                                alt="" />
                        </div>

                        <div class="md:w-8/12 lg:ml-6 lg:w-5/12">


                            <div class="relative mb-6" >
                                <input
                                    type="text"
                                    class="peer block min-h-[auto] w-full rounded border text-gray-200 border-gray-300 bg-transparent px-2  p-0.5 leading-[2.15] "
                                    id="exampleFormControlInput3"
                                    placeholder="Name" />

                            </div>

                            <div class="relative mb-6" >
                                <input
                                    type="text"
                                    class="peer block min-h-[auto] w-full rounded border text-gray-200 border-gray-300  bg-transparent px-2  p-0.5 leading-[2.15] "
                                    id="exampleFormControlInput3"
                                    placeholder="Email address" />

                            </div>

                            <div class="relative mb-6">
                                <input
                                    type="number"
                                    class="peer block min-h-[auto] w-full rounded border text-gray-200 border-gray-300 bg-transparent px-2  p-0.5 leading-[2.15] "
                                    id="exampleFormControlInput3"
                                    placeholder="Phone Number" />

                            </div>

                            <div class="relative mb-6">
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    placeholderText="Select a date"
                                    className='w-full bg-transparent text-gray-400 border border-gray-300 p-2 rounded-md'
                                />

                            </div>

                        <div class="relative mb-6">
                            <textarea
                                type="text"
                                class="peer block min-h-[auto] w-full rounded border text-gray-200 border-gray-300 bg-transparent px-2 p-0.5 leading-[2.15] "
                                id="exampleFormControlInput3"
                                placeholder="Message" />

                        </div>

                        <button
                            type="submit"
                            class="inline-block w-full rounded bg-amber-700 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-gray-100  "
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Reserve
                        </button>

                    </div>
                </div>
                </div>
            </section >
        </div >
    )
}

export default Review