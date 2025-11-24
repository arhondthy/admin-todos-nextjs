export const dynamic = 'force-dynamic';
export const revalidate = 0
import prisma from '@/lib/prisma'
import { NewTodo } from '@/todos/components/NewTodos'
import TodosGrid from '@/todos/components/TodosGrid'

import React from 'react'

const ServerTodos = async () => {
    const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })
    return (
        <div>
            server todos
            <div>
                <div className="w-full px-3 mx-5 mb-5">
                    <NewTodo />
                </div>

                <TodosGrid todos={todos} />

            </div>
        </div>
    )
}

export default ServerTodos
