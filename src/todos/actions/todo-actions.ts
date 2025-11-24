'use server'
import { Todo } from "@/generated/prisma/client"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export const sleep = async (seconds: number = 0) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, seconds * 1000);
    })
}
export const deleteCompleted = async (): Promise<void> => {
    await prisma.todo.deleteMany({
        where: {
            complete: true,
        },
    })
    revalidatePath('/dashboard/server-todos')
}
export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {
    await sleep(3)
    const todo = await prisma.todo.findFirst({ where: { id } })
    if (!todo) {
        throw `Todo with id ${id} no encontrado`

    }
    const updateTodo = await prisma.todo.update({
        where: { id },
        data: { complete }
    })
    revalidatePath('/dashboard/server-todos')
    return updateTodo;
}
export const addTodo = async (description: string) => {
    try {
        //const { complete, description } = await postSchema.validate(await request.json());
        const todo = await prisma.todo.create({ data: { complete: false, description } })
        revalidatePath('/dashboard/server-todos')
        return todo
    } catch (error) {
        return { message: 'error creando todo' }
    }
}