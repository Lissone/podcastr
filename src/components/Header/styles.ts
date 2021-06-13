import styled from 'styled-components';

export const HeaderContainer = styled.header`
	background: var(--white);
	height: 6.5rem;

	display: flex;
	align-items: center;

	padding: 2rem 4rem;

	border-bottom: 1px solid var(--gray-100);

	p {
		margin-left: 2rem;
		padding: 0.25rem 0 0.25rem 2rem;
		border-left: 1px solid var(--gray-100);

		@media (max-width: 650px) {
      display: none;
    }
	}
	
	span {
		margin-left: auto;
		text-transform: capitalize;
	}

	@media (max-width: 650px) {
    padding: 0 2rem;
  }
`
