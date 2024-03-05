import PhoneNumber from 'components/PhoneNumber/PhoneNumber';
import {
  LeftStyledList,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts, selectContacts } from 'components/redux/slice';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const number = e.target.elements.number.value;
    const name = e.target.elements.name.value;

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    if (contacts.find(person => person.name === name)) {
      alert(`${name} is already in contacts!`);
      return;
    } else if (contacts.find(person => person.number === number)) {
      alert(`${name}'s number "${number}" is already in contacts!`);
      return;
    } else if (!validatePhoneNumber(e)) {
      alert(`Phone is invalid`);
      return;
    } else {
      dispatch(addContacts(name, number));
    }

    const reset = () => {
      e.target.elements.name.value = '';
      e.target.elements.number.value = '';
    };
    reset();
  };

  const validatePhoneNumber = e => {
    const number = e.target.elements.number.value;
    const PhoneNumberPattern = new RegExp(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
    );
    return PhoneNumberPattern.test(number);
  };

  return (
    <>
      <StyledForm
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <LeftStyledList>
          <StyledLabel>
            Name
            <StyledInput type="text" name="name" required />
          </StyledLabel>
          <PhoneNumber />
        </LeftStyledList>
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </>
  );
};

export default ContactForm;
