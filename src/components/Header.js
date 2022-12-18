import React from 'react'

export default function Header() {
    return (
        <div class="relative pt-[100px] lg:pt-[120px] pb-[110px] bg-[#fc9850]">
            <div class="container">
                <div class="flex flex-wrap mx-5">
                    <div class="w-full lg:w-5/12 px-4">
                        <div class="hero-content">
                            <h1
                                class="
                  text-dark
                  font-bold
                  text-4xl
                  sm:text-[42px]
                  lg:text-[40px]
                  xl:text-[42px]
                  leading-snug
                  text-[#673b1b]
                  mb-3
                "
                            >
                                Coffee <br />
                                Cafe <br />

                            </h1>
                            <p class="text-base mb-8 font-size:20px text-white max-w-[480px]">
                                Our story begins in 2002 along the cobblestone streets of Thane historic Masunda lake Place. It was here where Coffee Cafe opened its first store, offering fresh-roasted coffee beans, tea and spices from around the world for our customers to take home. Our name was inspired by the classic coffee bean early coffee traders.
                            </p>

                            <div class="clients mx-4 pt-16">
                                <h6
                                    class="
                    font-normal
                    text-xs
                    flex
                    items-center
                    text-body-color
                    mb-2
                  "
                                >
                                    Some Of Our Clients
                                    <span
                                        class="w-8 h-[1px] bg-body-color inline-block ml-2"
                                    ></span>
                                </h6>
                                <div class="flex items-center">
                                    <div class="w-full py-3 mr-4">
                                        <img src="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg" alt="ayroui" />
                                    </div>
                                    <div class="w-full py-3 mr-4">
                                        <img
                                            src="https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg"
                                            alt="graygrids"
                                        />
                                    </div>
                                    <div class="w-full py-3 mr-4">
                                        <img src="https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg" alt="uideck" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hidden lg:block lg:w-1/12 px-4"></div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="lg:text-right lg:ml-auto">
                            <div class="relative rounded-lg inline-block z-10 pt-11 lg:pt-0">
                                <img
                                    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                    alt="hero"
                                    class="max-w-full lg:ml-auto"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


