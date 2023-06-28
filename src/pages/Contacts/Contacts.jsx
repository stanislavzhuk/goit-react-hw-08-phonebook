import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/contactsThunk";
import { selectContacts, selectError, selectIsLoading } from "redux/contacts/selectors";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import Loader from "components/Loader/Loader";
import css from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.container}>
      {error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <h1 className={css.title}>Phonebook</h1>
          <ContactForm />
          {isLoading && !error && <Loader />}
          {contacts.length ? (
            <>
              <h2 className={css.titleContacts}>Contacts</h2>
              <Filter />
              <ContactList />
            </>
          ) : (
            <p className={css.textInfo}>No any contacts</p>
          )}
        </>
      )}
    </div>
  );
};

export default Contacts;