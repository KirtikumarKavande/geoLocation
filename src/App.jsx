
const App = () => {
navigator.geolocation.getCurrentPosition((position)=>{
console.log(position.coords)
})
  return (
    <div>App</div>
  )
}

export default App