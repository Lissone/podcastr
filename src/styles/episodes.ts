import styled from 'styled-components'

export const Scroll = styled.div`
  height: calc(100vh - 6.5rem);
  overflow-y: scroll;

  margin: 0 auto;

  @media (max-width: 1450px) {
    overflow-y: hidden;
  }
`

export const Content = styled.div`
  max-width: 45rem;
  padding: 3rem 2rem;
  margin: 0 auto;

  header {
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({theme}) => theme.colors.border};

    h1 {
      margin-top: 2rem;
      margin-bottom: 1.5rem;

      transition: all 0.6s ease;

      @media (max-width: 500px) {
        font-size: 1.6rem;
      }
    }

    span {
      display: inline-block;
      font-size: 0.875rem;

      & + span {
        margin-left: 1rem;
        padding-left: 1rem;
        position: relative;

        &::before {
          content: "";
          width: 4px;
          height: 4px;
          border-radius: 2px;
          background: ${({theme}) => theme.colors.subText};
          position: absolute;
          left: 0;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }

      @media (max-width: 450px) {
        padding-top: 1rem;

        & + span {
          margin-left: 0;
          padding-left: 0;
        }

        &:last-child {
          padding-left: 1rem;
        }

        &::before {
          display: none;
        }
      }
    }
  }
`

export const ThumbnailContainer = styled.div`
  position: relative;

  img {
    border-radius: 1rem;
  }

  button {
    width: 3rem;
    height: 3rem;
    border-radius: 0.75rem;
    border: 0;
    position: absolute;
    z-index: 5;
    font-size: 0;

    transition: filter 0.2s;

    &:first-child {
      left: 0;
      top: 50%;
      background: ${({theme}) => theme.colors.secondary};
      transform: translate(-50%, -50%);
    }

    &:last-child {
      right: 0;
      top: 50%;
      background: ${({theme}) => theme.colors.active};
      transform: translate(50%, -50%);
    }

    &:hover {
      filter: brightness(0.9)
    }
  }
`

export const Description = styled.div`
  margin-top: 2rem;
  line-height: 1.675rem;
  color: ${({theme}) => theme.colors.text};

  p {
    margin: 1.5rem 0;
  }
`