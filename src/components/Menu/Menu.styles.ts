import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 150px;
  padding-top: 8px;
  @media (max-width: 720px) {
    margin-bottom: 20px;
    padding-top: 20px;
  }
`

export const Image = styled.img`
  @media (max-width: 720px) {
    display: none;
  }
`

export const ListMenu = styled.ul`
  display: flex;
  flex-direction: row;

  @media (max-width: 720px) {
    font-size: 10px;
    text-align: center;
  }
`

export const ListMenuItem = styled.li`
  list-style: none;
  font-weight: bold;
  font-family: Montserrat;
  a {
    padding: 0 10px;
    color: #202020;
    text-decoration: none;
    @media (max-width: 720px) {
      padding: 0 8px;
    }
  }
`
