import React from "react"

export default function Box(props) {
  const [on, setOn] = React.useState(props.on)

  const toggle = () => setOn(prevOn => !prevOn)

  const styles = {
    backgroundColor: on ? "#222222" : "white",
    color: on ? "white" : "#222222"
  }

  return (
    <div style={styles} className="box" onClick={toggle}>
      {props.id}
    </div>
  )
}
