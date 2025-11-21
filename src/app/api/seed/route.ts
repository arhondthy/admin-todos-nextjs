import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import { Todo } from '../../../generated/prisma/browser';

export async function GET(request: Request) {

    await prisma.todo.deleteMany();
    //const todo = await prisma.todo.create({
    //  data: { description: 'piedra del alma', complete: true }
    //})

    await prisma.todo.createMany({
        data: [
            { description: 'Piedra del alma', complete: true },
            { description: 'Piedra del poder' },
            { description: 'Piedra del tiempo' },
            { description: 'Piedra del espacio' },
            { description: 'Piedra de la realidad' },
        ]
    })
    //console.log(todo)
    return NextResponse.json({
        message: "seed"
    })
}