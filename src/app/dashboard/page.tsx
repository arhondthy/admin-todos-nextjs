import WidgetItem from '@/components/WidgetItem'
import React from 'react'

const DashboardPage = () => {
    return (
        <div>
            {/* Este contenido va dentro de page.tsx */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <WidgetItem
                    title='Global Activities' pay='$23,988' percent='2%' subtitle='Compared to last week $13,988' />
            </div>
            {/* TODO: fin del dashboard/page.tsx  */}

        </div>
    )
}

export default DashboardPage
