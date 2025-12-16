'use client'
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react'
import Image from 'next/image'

const ProfilePage = () => {
    const { data: session } = useSession();
    useEffect(() => {
        console.log('clientSide')
    }, [])
    return (
        <>
            <h1>
                page profile
            </h1>
            <div className='flex flex-col'>
                <Image
                    src={session?.user?.image ?? ''}
                    alt=""
                    width={150}
                    height={150} />
                <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{session?.user?.name}</h5>
                <span className="hidden text-gray-400 lg:block">{session?.user?.email}</span>

            </div>
        </>

    )
}

export default ProfilePage
