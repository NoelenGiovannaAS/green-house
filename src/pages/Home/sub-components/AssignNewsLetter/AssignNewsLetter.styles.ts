import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const Image = styled.div`
  position: relative;
  & img {
    position: absolute;
    top: -188px;
    right: -560px;
    @media (max-width: 720px) {
      display: none;
    }
  }
`
