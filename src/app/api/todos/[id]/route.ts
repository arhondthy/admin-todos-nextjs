import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup'

const putSchema = yup.object({
    description: yup.string().optional(),
    complete: yup.boolean().optional()
})
interface Segments {
    params: {
        id: string
    }
}

export async function GET(request: Request, { params }: Segments) {

    const todoById = await prisma.todo.findUnique({
        where: { id: params.id }
    })
    if (todoById === null) {
        return NextResponse.json({
            message: "no existe"
        }, { status: 404 })
    }
    return NextResponse.json(todoById);
}

export async function PUT(request: Request, { params }: Segments) {
    const { id } = params;
    const todoById = await prisma.todo.findUnique({
        where: { id }
    })
    if (todoById === null) {
        return NextResponse.json({
            message: "no existe"
        }, { status: 404 })
    }
    try {
        const { complete, description } = await putSchema.validate(await request.json());
        const updatedTodo = await prisma.todo.update({
            where: { id },
            data: { complete, description }
        })
        return NextResponse.json(updatedTodo);
    } catch (error) {
        return NextResponse.json(error, { status: 400 });
    }

}