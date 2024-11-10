import css from './Contact.module.css';
import { ImUser } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteContact} from '../../redux/contacts/contactsOps';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
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

      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
}
