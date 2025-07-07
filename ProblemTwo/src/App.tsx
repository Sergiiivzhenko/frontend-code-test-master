import React from 'react'
import Calculator from './components/Calculator'

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <Calculator />
    </div>
  )
}

export default App