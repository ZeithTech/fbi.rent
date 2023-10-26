import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react';
import NavbarItem from '@/components/NavbarItem';
const inter = Inter({ subsets: ['latin'] })

const Dashboard = () => {
    const sidebarLinks = [
        { title: "Dashboard", icon: "dashboard" },
        { title: "Settings", icon: "settings" },
        { title: "Profile", icon: "user" },
        { title: "Messages", icon: "mail" },
        { title: "Notifications", icon: "bell" },
    ];

    return (
        <div className="w-full">
        <nav className="w-full fixed z-40 bg-gray-900 text-white">
            <div className="px-4 md:px-16 py-6 flex flex-row items-center">
                <img src="/images/logo.png" className="h-4 lg:h-7" alt="Logo" />
                <div className="flex-row ml-8 gap-7 hidden lg:flex">
                    {sidebarLinks.map((link) => (
                        <NavbarItem
                            label={link.title}
                        />
                    ))}
                </div>
            </div>
        </nav>
        
        <div className="bg-[url('https://cdn.discordapp.com/attachments/870233972611903528/1166266984296620052/canvass1.png?ex=6549ddc5&is=653768c5&hm=8d7d3853d0c54cdc8226f741540ee44bcc84e836790cf1bf833d437fd5c84151&')] bg-no-repeat bg-center bg-fixed bg-cover bg-size: cover">
            <div className="bg-black w-full min-h-screen lg:bg-opacity-30">
                <div className="flex">
                    <div className="bg-gray-900 w-1/4 p-6">
                        <h1 className="text-2xl font-semibold text-white mb-4">Dashboard</h1>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="flex items-center text-gray-400 hover:text-white">
                                    <span className="w-6 h-6 mr-2">
                                        <i className="fas fa-tachometer-alt"></i>
                                    </span>
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center text-gray-400 hover:text-white">
                                    <span className="w-6 h-6 mr-2">
                                        <i className="fas fa-cog"></i>
                                    </span>
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </div>
                
                    {/* Content */}
                    <div className="w-3/4 p-6">
                        <h2 className="text-2xl font-semibold text-white">Welcome to Your Dashboard</h2>
                        <p className="text-gray-400 mt-4">This is your custom dashboard. You can add various widgets and content here to manage your application.</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Dashboard;
