import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem;

  border-radius: 50px;

  cursor: pointer;
  background: ${({theme}) => theme.colors.subText};

  svg {
    width: 25px;
    height: 25px;

    color: ${({theme}) => theme.colors.subBackground};
  }
`