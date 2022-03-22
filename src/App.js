import React from "react"
import {useState} from "react"
import Box from "./Box"

export default function App() {
  const data = [
    {id:1, on:true},
    {id:2, on:true},
    {id:3, on:false},
    {id:4, on:false},
    {id:5, on:false},
    {id:6, on:true},
  ]

  const [squares, setSquare] = useState(data)

  const squareElements = squares.map(square => {
    return (
      <Box
        id={square.id}
        on={square.on}
        key={square.id}/>
    )
  })

  return (
    <main className="container">
      {squareElements}
    </main>
  )
}
