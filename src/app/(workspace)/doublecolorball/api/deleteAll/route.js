import { NextResponse } from 'next/server'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()


export async function GET (){
    const deletedUserCount = await prisma.DoubleColorBall.deleteMany({})
    return NextResponse.json(deletedUserCount)
}