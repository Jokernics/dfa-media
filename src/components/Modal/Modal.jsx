import './index.scss';
import Portal from '../Portal/Portal';

export default function Modal({close}) {

  return (
    <Portal>
      <div onClick={(e) => {
        close()
      }} className='modal-container'>
        <div onClick={(e) => e.stopPropagation()} className='modal-wrp'>
          <input  placeholder='Что-нибудь введите' type="text" />
          <input className='header-btn' type="button" value='Submit' />
        </div>
      </div>
    </Portal>
  )
}