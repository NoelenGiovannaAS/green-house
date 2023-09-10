import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.1);
  width: 585px;
  height: 75px;
  & > svg {
    flex: 0.3;
  }
  & > input {
    flex: 2;
  }
  & > button {
    height: 100%;
    flex: 1;
  }

  @media (max-width: 720px) {
    margin-left: 8px;
    width: 100%;
    height: 75px;
  }
`

export const Input = styled.input`
  border: none;
`

export const Button = styled.button`
  border: none;
  background-color: #ffcb47;
  color: white;
  font-size: 1em;
`
