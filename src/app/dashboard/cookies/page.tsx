import { TabBar } from '@/components/TabBar';
import type { Metadata } from 'next';
import React from 'react'
import { cookies } from 'next/headers'

export const metadata: Metadata = {
    title: 'Cookies page',
    description: 'descripcion'

};
const Cookiespage = async () => {
    const cookieStore = await cookies()
    const tab = cookieStore.get('tab')?.value ?? '1';
    console.log(tab)
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
            <div className='flex flex-col'>
                <span className='text-3xl'>Tabs</span>
                <TabBar currentTab={+tab} />
            </div>

        </div>
    )
}

export default Cookiespage
