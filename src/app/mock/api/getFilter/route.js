import { NextResponse } from 'next/server'

export async function GET() {

    return NextResponse.json({
        errors: [], data: {
            maintain: {
                data: [{
                    label: '1',
                    value: '1'
                }, {
                    label: '2',
                    value: '2'
                }],
                selected: ''
            }
        }
    })
}