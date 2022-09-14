import { useState } from 'react';
import Modal from '../../Modal/Modal';
import './index.scss';

export default function Header({ isOpen, setIsOpen }) {
  const handleBurgerClick = () => {
    setIsOpen(prev => !prev)
  }
  const [isModal, setIsModal] = useState(false);

  const handleModal = () => {
    setIsModal(p => !p)
  }

  return (
    <header className="header">
      <div className='header-container'>
        <div onClick={handleBurgerClick}>
          {!isOpen && <div className='header-burger'></div>}
        </div>
        <p>Мероприятия</p>
        <button onClick={handleModal} className='header-btn'>Кнопочка</button>
      </div>
      {isModal && <Modal close={() => setIsModal(false)} />}
    </header>
  )
}