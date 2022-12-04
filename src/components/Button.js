import './Button.css'

function Button({ setOpen }) {
  return (
    <>
      <button className="modal-button" onClick={() => setOpen(true)}>
        Open Modal
      </button>
    </>
  )
}

export default Button
