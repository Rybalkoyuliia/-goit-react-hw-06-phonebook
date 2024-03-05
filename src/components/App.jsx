import { Filter } from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import {
  StyledMainTitle,
  StyledMainWrapper,
  StyledTitle,
  StyledWrapper,
} from './App.styled';

const App = () => {
  return (
    <StyledMainWrapper>
      <StyledMainTitle>My Phonebook</StyledMainTitle>
      <StyledWrapper>
        <ContactForm />
      </StyledWrapper>

      <StyledWrapper>
        <StyledTitle>Contacts</StyledTitle>
        <Filter />
      </StyledWrapper>

      <ContactList />
    </StyledMainWrapper>
  );
};

export default App;
