import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function fetchData(pageNo) {
  const res = await fetch(`http://www.cwl.gov.cn/cwl_admin/front/cwlkj/search/kjxx/findDrawNotice?name=ssq&pageNo=${pageNo}&pageSize=30&systemType=PC`, {
    headers: {
      Accept: 'application/json, text/javascript, */*; q=0.01',
      'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
      'x-requested-with': 'XMLHttpRequest',
      cookie: 'HMF_CI=9f170df8dd1ac8ed43e74f5ce9697f1d0345af096d9dc45fa024a89adff4063639d5cb6491cc1c7191a1be2b10025c08f5e3749ecbc95dbb4e49a9d4e17cb559de; 21_vq=12',
      Referer: 'http://www.cwl.gov.cn/ygkj/wqkjgg/',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      Host: 'www.cwl.gov.cn',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
    }
  })
  const data = await res.json()

  return data
}
export async function GET() {

  const res = await fetchData(1)

  let dataArr = []
  for (let i = 1; i <= 54; i++) {
    const res = await fetchData(i)
    dataArr = dataArr.concat(res.result)
  }
  console.log(dataArr[0])
  console.log(`一共${dataArr.length}条数据`)
  dataArr = dataArr.map((item) => {
    return {
      code: item.code,
      date: new Date(item.date.replace(/\(\S\)/, '')),
      red: item.red,
      blue: item.blue
    }
  })
  const result = await prisma.DoubleColorBall.createMany({
    data: dataArr
  })

  return NextResponse.json(result)

  return NextResponse.json({ resulte: '未写入数据库' })

}