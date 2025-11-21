import { Todo } from "@/generated/prisma/client";



export const UpdateTodo = async (id: string, complete: boolean): Promise<Todo> => {

    const body = { complete };
    const todo = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    console.log(id)

    return todo;
}

export const NewTodo = async (description: string): Promise<Todo> => {

    const body = { description };
    const todo = await fetch(`/api/todos`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())

    return todo;
}

export const deleteTodos = async (): Promise<Todo> => {

    const todo = await fetch(`/api/todos`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())

    return todo;
}