import styled from 'styled-components'

export const PlayerContainer = styled.div`
  padding: 1.5rem 4rem;
	width: 26.5rem;
	height: 100vh;

	background: var(--purple-500);
	color: var(--white);

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	header {
		display: 	flex;
		align-items: center;
		gap: 1rem;
		padding-bottom: 1rem;
	}

	strong {
		font-family: Lexend, sans-serif;
		font-weight: 600;
	}

	footer {
		align-self: stretch;

		&.empty .progress {
			opacity: 1;
		}
	}

	@media (max-width: 1450px) {
		width: 100%;
    height: 13rem;
		padding: 1rem 2rem;

		position: fixed;
    bottom: 0;

		header {
			display: none;
		}
  }
`

export const CurrentEpisode = styled.div`
  text-align: center;

  img {
    border-radius: 1.5rem;
  }

  strong {
    display: block;
    margin-top: 2rem;
    font: 600 1.25 Lexend, sans-serif;
    line-height: 1.75;
  }

  span {
    display: block;
    margin-top: 1rem;
    opacity: 0.6;
    line-height: 1.5rem;
  }

	@media (max-width: 1450px) {
		position: relative;
		top: -.8rem;

		img {
			display: none !important;
		}

		strong {
			margin: 0;
		}

		span {
			position: relative;
			margin: 0;

			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 1;
			overflow: hidden;
			text-overflow: ellipsis;
		}
  }
`

export const EmptyPlayer = styled.div`
  width: 100%;
	height: 20rem;
	border: 1.5px dashed var(--purple-300);
	border-radius: 1.5rem;
	background: linear-gradient(143.8deg, rgba(145, 100, 250, 0.8) 0%, rgba(0, 0, 0, 0) 100%);

	padding: 4rem;
	text-align: center;

	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 1450px) {
		width: 85%;
		height: 0;
		padding: 2rem 0;
  }
`

export const Progress = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	font-size: 0.875rem;

	span {
		display: inline-block;
		width: 4rem;
		text-align: center;
	}

	.slider {
		margin-bottom: .5rem;
		flex: 1;

		.emptySlider {
			width: 100%;
			height: 4px;
			background: var(--purple-300);
			border-radius: 2px;
		}
	}

	@media (max-width: 1450px) {
		justify-content: space-between;

		.slider {
			position: absolute;
			width: 100%;
			left: 0;
			top: -.5rem;

			.emptySlider {
				width: 0;
			}
		}
	}
`

export const Buttons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 2.5rem;
	gap: 1.5rem;

	button {
		background: transparent;
		border: 0;
		font-size: 0;

		transition: filter 0.2s;

		&:disabled {
			cursor: default;
			opacity: 0.5;
		}

		&:hover:not(:disabled) {
			filter: brightness(0.8);
		}

		&.isActive {
			filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);
		}

		&.isActive:hover {
			filter: brightness(0.6) invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);
		}

		&.playButton {
			width: 4rem;
			height: 4rem;
			border-radius: 1rem;
			background: var(--purple-400);

			&:hover:not(:disabled) {
				filter: brightness(0.95);
			}
		}
	}

	@media (max-width: 1450px) {
		margin-top: 0;
  }
`