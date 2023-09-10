import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 472px;
  @media (max-width: 720px) {
    margin: 0 10px;
    width: 300px;
  }
`

export const Text = styled.span`
  font-size: 1.375em;
  opacity: 0.5;
`

export const Title = styled.h1`
  font-size: 5.125em;
  margin: 0;
  @media (max-width: 720px) {
    font-size: 3.5em;
  }
`

export const Paragraph = styled.p`
  font-size: 1em;
  opacity: 0.5;
  line-height: 26px;
  margin-bottom: 20px;
`
