import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 4rem;
  height: calc(100vh - 6.5rem);
  overflow-y: scroll;

  h2 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 1450px) {
    height: 100%;
    
    overflow-y: unset;
  }

  @media (max-width: 650px) {
    padding: 0 2rem;
  }
`

export const LatestEpisodes = styled.section`
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;

    li {
      background: ${({theme}) => theme.colors.subBackground};
      border: 1px solid ${({theme}) => theme.colors.border};
      padding: 1.25rem;
      border-radius: 1.5rem;
      position: relative;

      display: flex;
      align-items: center;

      img {
        width: 6rem;
        height: 6rem;
        border-radius: 1rem;
      }

      button {
        position: absolute;
        right: 2rem;
        bottom: 2rem;

        width: 2.5rem;
        height: 2.5rem;
        background: ${({theme}) => theme.colors.subBackground};
        border: 1px solid ${({theme}) => theme.colors.border};
        border-radius: 0.675rem;
        font-size: 0;

        transition: filter 0.2s;

        img {
          width: 1.5rem;
          height: 1.5rem;
        }

        &:hover {
          filter: brightness(0.9);
        }
      }
    }

    @media (max-width: 950px) {
      display: flex;
      flex-direction: column;

      gap: 0;
    }
  }
`

export const EpisodeDetails = styled.div`
  flex: 1;
  margin-left: 1rem;
  width: 100%;

  a {
    display: block;
    color: ${({theme}) => theme.colors.text};
    font-family: Lexend, sans-serif;
    font-weight: 600;
    text-decoration: none;
    line-height: 1.4rem;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    font-size: 0.875rem;
    margin-top: 0.5rem;
    max-width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    display: inline-block;
    margin-top: 0.5rem;
    font-size: 0.875rem;

    &:last-child {
      margin-left: 0.5rem;
      padding-left: 0.5rem;
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
  }
`

export const AllEpisodes = styled.section`
  padding-bottom: 2rem;

  table {
    width: 100%;

    th, td {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid ${({theme}) => theme.colors.border};
    }

    th {
      color: ${({theme}) => theme.colors.description};
      text-transform: uppercase;
      font: 500 0.75rem Lexend, sans-serif;
      text-align: left;
    }
    
    td {
      font-size: 0.875rem;

      img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.5rem;
      }

      a {
        color: ${({theme}) => theme.colors.text};
        font-family: Lexend, sans-serif;
        font-weight: 600;
        text-decoration: none;
        line-height: 1.4rem;
        font-size: 1rem;

        &:hover {
          text-decoration: underline;
        }
      }

      button {
        width: 2.5rem;
        height: 2.5rem;
        background: ${({theme}) => theme.colors.subBackground};
        border: 1px solid ${({theme}) => theme.colors.border};
        border-radius: 0.5rem;
        font-size: 0;

        transition: filter 0.2s;

        img {
          width: 1.25rem;
          height: 1.25rem;
        }

        &:hover {
          filter: brightness(0.9);
        }
      }
    }

    @media (max-width: 950px) {
      th:nth-child(3), td:nth-child(3) {
        display: none;
      }
    }

    @media (max-width: 700px) {
      th:nth-child(4), td:nth-child(4) {
        display: none;
      }
    }

    @media (max-width: 650px) {
      th:nth-child(1), td:nth-child(1) {
        display: none;
      }
    }

    @media (max-width: 450px) {
      th:nth-child(5), td:nth-child(5) {
        display: none;
      }
    }
  }
`