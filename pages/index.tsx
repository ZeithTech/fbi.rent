import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })




export default function Home() {
  const featuresList = [
    {
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>,
        title: "Speed",
        desc: "Written by the Back-end Gods. Flawless and Fast"
    },
    {
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>,
        title: "Privacy",
        desc: "We even keep your IP Address encrypted so even Zeus can't see it.(Username and Link data is not encrypted )"
    },
    {
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>,
        title: "Contact",
        desc: "Our team has very high communication skills"
    }
  ]
  return (
    <div className="relative min-h-screen w-full bg-[url('https://cdn.discordapp.com/attachments/870233972611903528/1166266984296620052/canvass1.png?ex=6549ddc5&is=653768c5&hm=8d7d3853d0c54cdc8226f741540ee44bcc84e836790cf1bf833d437fd5c84151&')] bg-no-repeat bg-center bg-fixed bg-cover bg-size: cover">
      <div className="bg-black w-full min-h-screen lg:bg-opacity-60">
        <div className="flex justify-center">
          <div className="mt-32 space-y-5 max-w-3xl mx-auto text-center">
            <img 
              src="https://cdn.discordapp.com/attachments/870233972611903528/1166299023901216799/image-removebg-preview_1.png?ex=6549fb9c&is=6537869c&hm=4d0ee4c07bcaeade8c628cea5313ce495d93a68acc14678673d12197fc04e056&" 
              alt="doxbin" 
              className="mx-auto w-1/3"
              />

            <h1 className="text-5xl bg-clip-text text-transparent bg-gradient-to-r font-extrabold mx-auto sm:text-6xl"
                style={{
                    backgroundImage: "linear-gradient(179.1deg, #FFFFFF 0.77%, rgba(255, 255, 255, 0) 182.09%)"
                }}
            >
                Welcome to FBI.RENT
            </h1>
            <p className="max-w-xxl mx-auto text-gray-300">
              The best biolink service on the internet 
            </p>
            <div className="flex justify-center">
              <button className="bg-gray-600 hover:bg-zinc-500 text-white font-bold py-2 px-4 rounded">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div id="features" className="mt-44 max-w-4xl mx-auto custom-screen text-gray-300">
                <div
                    className="duration-1000 delay-300"
                >
                    <div className="max-w-xl mx-auto text-center">
                        <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                            Important Features
                        </h2>
                        <p className="mt-3">
                            I can do a lot of things for you, but I can't bring back the dead
                        </p>
                    </div>

                </div>
                    <div className="relative mt-12">
                        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                featuresList.map((item, idx) => (
                                    <li key={idx} className="space-y-3 p-4 rounded-xl border border-gray-800"
                                        style={{
                                            background: "radial-gradient(157.73% 157.73% at 50% -29.9%, rgba(203, 213, 225, 0.16) 0%, rgba(203, 213, 225, 0) 100%)"
                                        }}
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-lg text-gray-50">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg text-gray-50 font-semibold">
                                            {item.title}
                                        </h3>
                                        <p>
                                            {item.desc}
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
            </div>
            <div id="our-team" className="mt-44 max-w-4xl mx-auto custom-screen text-gray-300">
              <div className="max-w-xl mx-auto text-center">
                <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                  Our Team
                </h2>
                <p className="mt-3">
                  Meet the people behind FBI.RENT
                </p>
              </div>
              <div className="relative mt-12">
                <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  
                  {/* Proxy */}
                  <li className="space-y-3 p-4 rounded-xl border border-gray-800 shadow-lg hover:shadow-xl"
                      style={{
                        background: "radial-gradient(157.73% 157.73% at 50% -29.9%, rgba(203, 213, 225, 0.16) 0%, rgba(203, 213, 225, 0) 100%)",
                        boxShadow: "0 0 10px 5px rgba(203, 213, 225, 0.5)"
                      }}
                  >
                    <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden shadow-md">
                      <img 
                        src="https://cdn.discordapp.com/avatars/346929473851228162/2c5a7bcaf7127246795bb452f3e9c212.webp?size=4096" alt="PROXY" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <h3 className="text-lg text-gray-50 font-semibold mt-3 text-center">
                      Proxy
                    </h3>
                    <p className="text-center">
                      Lead Developer
                    </p>
                  </li>
                    
                  {/* Kendini eklemek isteyen eklesin amin akoyayim ugrastirmayin beni */}
                </ul>
              </div>
            </div>
            <footer className="mt-24 border-t border-gray-800 pt-8 pb-12">
              <div className="flex flex-col items-center">
                <p className="text-gray-400">
                  &copy; 2023 FBI.RENT. All rights reserved.
                </p>
              </div>
            </footer>
      </div>
    </div>
  )
}
