import { NextResponse } from 'next/server'
import { readFileSync } from 'node:fs';
import path from 'node:path'
 
export async function GET() {
    const ctx  = readFileSync(path.resolve('/Users/admin/work/datadiv','data1.txt'),{encoding:'utf-8'})
    return NextResponse.json(JSON.parse(ctx))
}