'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
interface Props {
    name: string,
    href: string,
    icon: React.ReactNode
}

const SidebarItem = ({ name, icon, href }: Props) => {
    const currentPath = usePathname();
    return (
        <li>
            <Link href={href} className={`
            px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600  
            hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white
             ${currentPath === href ? ' text-white bg-gradient-to-r from-sky-600 to-cyan-400' : ''}
            `}>
                {icon}
                <span className="-mr-1 font-medium">{name}</span>
            </Link>
        </li>

    )
}

export default SidebarItem
