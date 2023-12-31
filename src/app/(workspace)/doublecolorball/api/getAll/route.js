import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export async function GET() {
    const result = await prisma.DoubleColorBall.findMany()
    console.log(result)
    return NextResponse.json({
        code: 0,
        data: result
    })
}