
'use client'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { useEffect, useState } from 'react'
const Doublecolorball = () => {

  const [data, setData] = useState([])

  const fetchData = async () => {
    const res = await fetch('doublecolorball/api/getAll')
    const json = await res.json()
    if (json.code === 0) {
      setData(json.data)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (<div className="container overflow-y-auto mx-auto	mt-4">
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn width="100">期号</TableColumn>
        <TableColumn>开间时间</TableColumn>
        <TableColumn>红球</TableColumn>
        <TableColumn>蓝色球</TableColumn>
      </TableHeader>
      <TableBody>
        {
          data.map((item, idx) => {
            return <TableRow key={idx}>
              <TableCell>{item.code}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.red}</TableCell>
              <TableCell>{item.blue}</TableCell>
            </TableRow>
          })
        }

      </TableBody>
    </Table>
  </div>)

}


export default Doublecolorball