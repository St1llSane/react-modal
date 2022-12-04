import { useState } from 'react'
import './Modal.css'

function Modal({ open, setOpen }) {
  const closeModal = (event) => {
    if (event.target.classList.contains('fade')) {
      setOpen(false)
    }
  }

  const [inputLogin, setInputLogin] = useState('')
  const [inputPass, setInputPass] = useState('')

  function formOnSubmit(event) {
    event.preventDefault()
  }

  function inputLoginChange(e) {
    setInputLogin(e.target.value.replace(/[`~'",\|/!#№%^&?*()=+\s]/g, ''))
  }
  function inputPassChange(e) {
    setInputPass(e.target.value.replace(/\s/g, ''))
  }

  return (
    <div className={`fade ${open ? 'animation' : ''}`} onClick={closeModal}>
      <div className="modal">
        <button className="close-modal" onClick={() => setOpen(false)}></button>
        <form className="modal__form" action="#" onSubmit={formOnSubmit}>
          <label className="modal__form-label">
            <span className="modal__form-span">Login</span>
            <input
              className="modal__form-input"
              type="text"
              placeholder="Login or email"
              value={inputLogin}
              onChange={inputLoginChange}
            />
            <span className="modal__form-hint show">* @ required</span>
          </label>
          <label className="modal__form-label">
            <span className="modal__form-span">Password</span>
            <input
              className="modal__form-input"
              type="password"
              placeholder="********"
              value={inputPass}
              onChange={inputPassChange}
            />
            <span className="modal__form-hint show">
              * at least 8 characters
            </span>
          </label>
          <button className="modal__form-btn">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Modal
