import { nanoid } from 'nanoid';
import React from 'react';
import {
  ListWrapper,
  SpanWrapper,
  StyledDelButton,
  StyledLiWrapper,
  StyledName,
  StyledNumber,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  filteredContacts,
  removeContacts,
  selectContacts,
} from 'components/redux/slice';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(filteredContacts);

  const handleDelete = id => dispatch(removeContacts(id));

  const handleFilteredList = () => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  };

  return (
    <ListWrapper>
      {handleFilteredList().map(({ id = nanoid(6), name, number }) => (
        <StyledLiWrapper key={id}>
          <SpanWrapper>
            <StyledName>{name}</StyledName>
            <StyledNumber>{number}</StyledNumber>
          </SpanWrapper>
          <StyledDelButton onClick={() => handleDelete(id)}>
            Delete
          </StyledDelButton>
        </StyledLiWrapper>
      ))}
    </ListWrapper>
  );
}
