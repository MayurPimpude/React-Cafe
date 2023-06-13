import React from 'react';


export default function Menu() {
  return (
    <div className='pt-10 pb-10 bg-[#221003]' id='menu'>
      <h1 class="mt-2 mb-4 text-center text-5xl text-[#EAB54C]">Coffees Available</h1>
      <div class="m-8 flex gap-4 flex-wrap justify-center">

        <div class="max-w-sm rounded border-2 border-white p-5 overflow-hidden shadow-lg flex flex-col hover:scale-105">
          <img class="w-full rounded-lg" src="https://images.unsplash.com/photo-1577968897966-3d4325b36b61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="coffee" />
          <div class="px-6 py-4">
            <div class="font-bold text-[#EAB54C] text-xl mb-2">Cappachino</div>
            <p class="text-gray-300 text-base">
            Indulge in our velvety Cappuccinos, a perfect harmony of rich espresso and frothy steamed milk.
            </p>
          </div>
         
          <button className='bg-[#7d4116] mt-2 w-full rounded-lg p-2 text-white hover:bg-[#EAB54C]'>Order Now</button>
        </div>

        <div class="max-w-sm rounded border-2 border-white p-5 overflow-hidden shadow-lg flex flex-col hover:scale-105">
          <img class="w-full h-full" src="https://media.istockphoto.com/photos/black-coffee-isolated-on-a-white-background-picture-id1286808993?b=1&k=20&m=1286808993&s=170667a&w=0&h=vx2BzwsU9GbZeoX1DlsGQUW-KoobX_sMBDqkgGWzXNM=" alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-[#EAB54C] text-xl mb-2">Expresso</div>
            <p class="text-gray-300 text-base">
            Savor the bold intensity of our Espresso, a concentrated shot of pure coffee goodness
            </p>
          </div>
         
          <button className='bg-[#7d4116] mt-2 w-full rounded-lg p-2 text-white hover:bg-[#EAB54C]'>Order Now</button>
        </div>

        <div class="max-w-sm rounded border-2 border-white p-5 overflow-hidden shadow-lg flex flex-col hover:scale-105">
          <img class="w-full h-full" src="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1337&q=80" alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-[#EAB54C] text-xl mb-2">Latte</div>
            <p class="text-gray-300 text-base">
            Experience the artistry of our luscious Lattes, a creamy blend of espresso and silky steamed milk.
            </p>
          </div>
         
          <button className='bg-[#7d4116] mt-2 w-full rounded-lg p-2 text-white hover:bg-[#EAB54C]'>Order Now</button>
        </div>
        
      </div>
    </div>

  )
}
