'use client'
import { Todo } from '@/generated/prisma/browser';
import React, { startTransition } from 'react'
import styles from './todoItem.module.css';
import { useOptimistic } from "react";
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';
interface Props {
    todo: Todo;
    toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>
}
const TodoItem = ({ todo, toggleTodo }: Props) => {

    const [todoOptimistic, toggleTodoOPtimistic] = useOptimistic(
        todo,
        (state, newCompleteValue: boolean) => ({ ...state, complete: newCompleteValue })
    );

    const onToggleTodo = async () => {
        try {
            startTransition(() => toggleTodoOPtimistic(!todoOptimistic.complete))

            await toggleTodo(todoOptimistic.id, !todoOptimistic.complete)
        } catch (error) {
            startTransition(() => toggleTodoOPtimistic(!todoOptimistic.complete))
        }
    }
    return (
        <div className={todoOptimistic.complete ? styles.todoDone : styles.todoPending}>
            <div className='flex flex-col sm:flex-row justify-start items-center gap-4'>
                <div onClick={() => onToggleTodo()}
                    className={`flex p-2 rounded-md cursor-pointer
                    hover:bg-opacity-60
                ${todoOptimistic.complete ? 'bg - blue - 100}' : ' bg-red-100'} `}>
                    {
                        todoOptimistic.complete
                            ? <IoCheckboxOutline size={30} />
                            : <IoSquareOutline size={30} />
                    }
                </div>
                <div className='text-center sm:text-left'> {todoOptimistic.description}</div>

            </div>
        </div>
    )
}

export default TodoItem
