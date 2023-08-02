export default function Layout(props) {
  console.log(Object.keys(props))
  return (
    <>
      {props.children}
      {props.games}
      {props.news}
      {/* 添加上 props.games , props.news   dashboard/detail  路径就失效了 */}
    </>
  )
}