import css from './Contact.module.css';
import { ImUser } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOps';
import DeleteModal from '../DeleteModal/DeleteModal';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const isClose = true;
  const isOpen = true;
  const isAccept = false;
  const awaiAcceptDelete = () => {
    if (isAccept) {
      dispatch(deleteContact(id));
    }
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
        <button className={css.btn} type="button" onClick={awaiAcceptDelete}>
          <DeleteForeverIcon isClose={isClose} isAccept={isAccept}/>
        </button>
      </div>
      {isOpen && <DeleteModal />}
    </div>
  );
}
