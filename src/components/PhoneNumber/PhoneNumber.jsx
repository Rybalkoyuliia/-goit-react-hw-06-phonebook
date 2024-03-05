import { StyledLabel } from 'components/ContactForm/ContactForm.styled';
import React from 'react';
import InputMask from 'react-input-mask';

export default function PhoneNumber() {
  return (
    <div>
      <StyledLabel>
        Number
        <InputMask
          style={{
            height: '20px',
            borderRadius: '10px',
            border: 'none',
            padding: '2px 8px',
            outline: 'none',
          }}
          mask="(999)999-9999"
          type="tel"
          name="number"
          placeholder="(000)000-0000"
          required
        ></InputMask>
      </StyledLabel>
    </div>
  );
}
