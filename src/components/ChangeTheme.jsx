import React from 'react'
import { useColorMode } from 'theme-ui'
export default props => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <button
      onClick={e => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default')
      }}>
      {colorMode === 'default' ? 'Dark' : 'Light'}
    </button>
  )
}
