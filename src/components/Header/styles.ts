import styled from 'styled-components';

export const HeaderContainer = styled.header`
	background: ${({theme}) => theme.colors.subBackground};
	height: 6.5rem;

	display: flex;
	align-items: center;

	padding: 2rem 4rem;

	border-bottom: 1px solid ${({theme}) => theme.colors.border};

	p {
		margin-left: 2rem;
		padding: 0.25rem 0 0.25rem 2rem;
		border-left: 1px solid ${({theme}) => theme.colors.border};

		@media (max-width: 650px) {
      display: none;
    }
	}
	
	span {
		margin-left: auto;
		padding: 0 1.5rem;
		text-transform: capitalize;
	}

	@media (max-width: 650px) {
    padding: 0 2rem;
  }
`
