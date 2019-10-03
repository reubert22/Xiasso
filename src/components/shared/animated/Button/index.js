import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

const AnimatedButton = ({ type, title, style, onClick }) => {
  const [clicked, setClicked] = useState(false)
  const { scale } = useSpring({ scale: clicked ? 0.8 : 1 })

  return (
    <animated.button
      type={type}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
      onClick={onClick}
      style={{
        ...style,
        transform: scale.interpolate(s => `scale(${s})`)
      }}
      children={title}
    />
  )
}

export default AnimatedButton