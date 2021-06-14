import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;

  main {
    flex: 1;
  }

  @media (max-width: 1450px) {
    flex-direction: column;

    main {
      max-height: calc(100vh - 13rem);
      min-height: calc(100vh - 13rem);
      
      overflow-y: scroll;
    }
  }
`