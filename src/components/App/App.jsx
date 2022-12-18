import { ContactForm } from '../ContactForm/ContactForm ';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Title, Conteiner } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'Redux/FetchContact';
import { ColorRing } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Conteiner>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {selector.error && (
        <p style={{ textAlign: 'center' }}>Сервер не працює</p>
      )}
      {selector.isLoading ? (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          wrapperStyle={{ margin: 'auto' }}
          ariaLabel="blocks-loading"
          wrapperClass="blocks-wrapper"
          colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
        />
      ) : (
        <ContactList />
      )}
    </Conteiner>
  );
};
