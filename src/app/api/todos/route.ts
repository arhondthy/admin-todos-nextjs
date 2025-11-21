import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup'

const postSchema = yup.object({
    description: yup.string().required(),
    complete: yup.boolean().optional().default(false)
})

export async function POST(request: Request) {
    try {
        const { complete, description } = await postSchema.validate(await request.json());
        const todo = await prisma.todo.create({ data: { complete, description } })
        return NextResponse.json(todo)
    } catch (error) {
        return NextResponse.json(error, { status: 400 })
    }

}
export async function DELETE(request: Request) {

    await prisma.todo.deleteMany({
        where: {
            complete: true,
        },
    })
    return NextResponse.json({ message: 'borrado' })


}


export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const take = searchParams.get('take') ?? '10'
    const skip = searchParams.get('skip') ?? '10'
    if (isNaN(+skip)) {
        return NextResponse.json({
            message: "skip debe ser numero"
        }, { status: 400 })
    }
    if (isNaN(+take)) {
        return NextResponse.json({
            message: "take debe ser numero"
        }, { status: 400 })
    }
    const todos = await prisma.todo.findMany({
        skip: +skip,
        take: +take
    })
    return NextResponse.json(todos)
}