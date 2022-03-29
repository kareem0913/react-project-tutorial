import React, { useEffect } from 'react'

const Alert = ({message, showModal, setShowModal}) => {
  useEffect(() => {
    if (showModal) {
      const hideModal = setTimeout(() => {setShowModal({show:false, msg :''})}, 4000)
      return () => clearTimeout(hideModal)
    }
  }, [showModal])
  return <p className="alert">{message}</p>
}

export default Alert
