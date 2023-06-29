import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/contactsThunk";
import { selectContacts, selectError, selectIsLoading } from "redux/contacts/selectors";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import Loader from "components/Loader/Loader";
import { Container, TextInfo, Title, TitleContacts } from "./Contacts.styled";

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Container>
      {error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <Title>Phonebook</Title>
          <ContactForm />
          {isLoading && !error && <Loader />}
          {contacts.length ? (
            <>
              <TitleContacts>Contacts</TitleContacts>
              <Filter />
              <ContactList />
            </>
          ) : (
            <TextInfo>No any contacts</TextInfo>
          )}
        </>
      )}
    </Container>
  );
};

export default Contacts;