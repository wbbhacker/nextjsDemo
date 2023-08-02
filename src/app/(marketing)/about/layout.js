export default function Layout(props) {
  console.log(Object.keys(props))
  return (
    <>
      <div>about layout.js</div>
      {props.children}
    </>
  )
}