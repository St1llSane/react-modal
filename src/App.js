import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Modal from './components/Modal'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <Button setOpen={setOpen} />
      <Modal open={open} setOpen={setOpen} />
    </div>
  )
}

export default App
