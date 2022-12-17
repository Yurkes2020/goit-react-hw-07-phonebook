import { ContactForm } from '../ContactForm/ContactForm ';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Title, Conteiner } from './App.styled';
import {
  useDispatch,
  // useSelector
} from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'Redux/FetchContact';

export const App = () => {
  const dispatch = useDispatch();
  // const selector = useSelector(state => state.contacts.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Conteiner>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Conteiner>
  );
};
