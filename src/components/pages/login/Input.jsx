import styled from 'styled-components';
import { theme } from '../../../theme';

export default function Input({ value, onChange, Icon, ...otherProps }) {
  // State

  // Behavior

  // Render
  return (
    <InputStyled>
      {Icon && Icon}
      <input
        onChange={onChange}
        value={value}
        type="text"
        {...otherProps}
      />
    </InputStyled>
  )
}

// Styles
const InputStyled = styled.div`
height: 4rem;
min-width: 18rem;
border-radius: ${theme.borderRadius.round};
border-style: none;  
background-color: ${theme.colors.white};
display: flex;
align-items: center;

input {
  font-size:${theme.fonts.P0};
  font-weight: ${theme.fonts.weights.regular};
  color: ${theme.colors.greyDark}; 
  border: none;  
}

.profile-icon {
    color: ${theme.colors.greyDark};
    margin: ${theme.spacing.xs}
}
`
