
import { Todo } from '@/generated/prisma/browser'
import React from 'react'
import TodoItem from './todoItem';
//import * as todosApi from '@/todos/helpers/todos'
//import { useRouter } from 'next/navigation';
import { toggleTodo } from "../actions/todo-actions";
interface Props {
    todos?: Todo[];
}

const TodosGrid = ({ todos = [] }: Props) => {
    // const router = useRouter();


    // const toggleTodo = async (id: string, complete: boolean) => {
    //   const updatedTodo = await todosApi.UpdateTodo(id, complete)
    // console.log(updatedTodo)
    // router.refresh();

    //}
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
            {todos.map(itemTodo => (
                <TodoItem key={itemTodo.id} todo={itemTodo} toggleTodo={toggleTodo} />
            )

            )}
        </div>
    )
}

export default TodosGrid
