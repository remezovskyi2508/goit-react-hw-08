import css from './Contact.module.css';
import { ImUser } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import DeleteModal from '../DeleteModal/DeleteModal';
import { selectIsOpen, selectModalContactId } from '../../redux/auth/selectors';
import { openModal } from '../../redux/contacts/contactsSlice';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen);
  const modalContactId = useSelector(selectModalContactId);

  const handleIsOpenModal = () => {
    dispatch(openModal(id));
  };

  return (
    <div className={css.wrapper}>
      <div className={css.contactInfo}>
        <div className={css.wrapperInfo}>
          <ImUser />
          <p className={css.nameInfo}>{name}</p>
        </div>
        <div className={css.wrapperInfo}>
          <BsFillTelephoneFill />
          <p className={css.phoneInfo}>{number}</p>
        </div>
      </div>
      <div>
        <button
          className={css.btn}
          type="button"
          // onClick={() => dispatch(deleteContact(id))}
        >
          <EditIcon />
        </button>
        <button className={css.btn} type="button" onClick={handleIsOpenModal}>
          <DeleteForeverIcon />
        </button>
      </div>
      {isOpen && modalContactId === id ? <DeleteModal id={id} /> : null}
    </div>
  );
}
