import Link from 'next/link'
import React from 'react'
import { CiBookmarkCheck, CiLogout } from 'react-icons/ci'
import Image from 'next/image'
import SidebarItem from './SidebarItem'
import { IoBasketOutline, IoCalendarOutline, IoCheckboxOutline, IoCodeWorkingOutline, IoListOutline, IoPersonOutline } from 'react-icons/io5'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { LogoutButton } from './LogoutButton'

const menuItem = [
    {
        name: 'Dashboard',
        icon: <IoCalendarOutline />,
        href: '/dashboard'
    },
    {
        name: 'Rest TODOS',
        href: '/dashboard/rest-todos',
        icon: <IoCheckboxOutline />
    },
    {
        name: 'Server Actions',
        href: '/dashboard/server-todos',
        icon: <IoListOutline />
    }
    ,
    {
        name: 'Cookies',
        href: '/dashboard/cookies',
        icon: <IoCodeWorkingOutline />
    }
    ,
    {
        name: 'Productos',
        href: '/dashboard/products',
        icon: <IoBasketOutline />
    },
    {
        name: 'Perfil usuario',
        href: '/dashboard/profile',
        icon: <IoPersonOutline />
    }
]
const sidebar = async () => {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/api/auth/signin')
    }
    return (
        <div>
            {/* TODO: src/components <Sidebar /> */}
            <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
                <div>
                    <div className="-mx-6 px-6 py-4">
                        {/* TODO: Next/Link hacia dashboard */}
                        <Link href="/dashboard" title="home">
                            {/* Next/Image */}
                            <Image
                                src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
                                className="w-32"
                                alt="tailus logo"
                                width={150}
                                height={150} />
                        </Link>
                    </div>

                    <div className="mt-8 text-center">
                        {/* Next/Image */}
                        <Image
                            src={session.user?.image ?? ''}
                            alt=""
                            width={150}
                            height={150} />
                        <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{session.user?.name}</h5>
                        <span className="hidden text-gray-400 lg:block">Admin</span>
                    </div>

                    <ul className="space-y-2 tracking-wide mt-8">
                        {/* TODO: src/components <SidebarItem /> */}
                        {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
                        {
                            menuItem.map(item => (
                                <SidebarItem key={item.name} {...item} />
                            ))
                        }
                    </ul>
                </div>

                <LogoutButton></LogoutButton>
            </aside>
        </div>
    )
}

export default sidebar
