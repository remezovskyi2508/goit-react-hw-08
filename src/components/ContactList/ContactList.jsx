import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contacts/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contactsOps';
import { useEffect } from 'react';
import { selectLoading } from '../../redux/auth/slice';

export default function ContactList() {
  //Filtr for list
  // const filtredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const сontacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <ul className={css.wrapper}>
        {Array.isArray(сontacts) && сontacts.length === 0 && (
          <div>There are no contacts in your phonebook yet!</div>
        )}
        {Array.isArray(сontacts) &&
          сontacts.length > 0 &&
          сontacts.map(contact => {
            return (
              <li key={contact.id} className={css.listItem}>
                <Contact {...contact} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
