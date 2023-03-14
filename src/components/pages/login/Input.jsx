import styled from 'styled-components';

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
min-width: 20rem;
max-width: 30rem;
border-radius: 7px;
border-style: none;
color:white;   
background-color: white;
display: flex;
align-items: center;

input {
  font-size:1rem;
  font-weight: bold;
  border: none;     
}

.profile-icon {
    color: grey;
    margin: 1rem
}
`
