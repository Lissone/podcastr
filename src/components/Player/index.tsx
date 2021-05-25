import Image from 'next/image'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { useRef, useEffect, useState } from 'react'

import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString'
import { usePlayer } from '../../contexts/PlayerContext'

import { Buttons, CurrentEpisode, EmptyPlayer, PlayerContainer, Progress } from './styles'

export function Player() {
	const audioRef = useRef<HTMLAudioElement>(null)
	const [progress, setProgress] = useState(0)

	const { 
		episodeList, 
		currentEpisodeIndex, 
		isPlaying,
		togglePlay,
		toggleLoop,
		setPlayingState,
		playNext,
		playPrevious,
		hasNext,
		hasPrevious,
		isLooping,
		isShuffling,
		toggleShuffle,
		clearPlayerState
	} = usePlayer()

	useEffect(() => {
		if(!audioRef.current) return

		if(isPlaying) 
			audioRef.current.play()
		else
			audioRef.current.pause()

	}, [isPlaying])

	function setupProgressListener() {
		audioRef.current.currentTime = 0

		audioRef.current.addEventListener('timeupdate',() => {
			setProgress(Math.floor(audioRef.current.currentTime))
		})
	}

	function handleSeek(ammount: number) {
		audioRef.current.currentTime = ammount
		setProgress(ammount)
	}

	function handleEpisodeEnded() {
		if(hasNext) 
			playNext()
		else
			clearPlayerState()
			setProgress(0)
	}
 
	const episode = episodeList[currentEpisodeIndex]

  return (
		<PlayerContainer>
			<header>
				<img src="/playing.svg" alt="Tocando agora"/>

				<strong>Tocando agora</strong>
			</header>

			{ episode ? (
				<CurrentEpisode>
					<Image
						width={592}
						height={592}
						src={episode.thumbnail}
						objectFit="cover"
					/>
					<strong>{ episode.title }</strong>

					<span>{ episode.members }</span>
				</CurrentEpisode>
			) : (
				<EmptyPlayer>
					<strong>Selecione um podcast para ouvir</strong>
				</EmptyPlayer>
			) }

			<footer className='empty'>
				<Progress className='progress'>
					<span>{convertDurationToTimeString(progress)}</span>

					<div className='slider'>
						{ episode ? (
							<Slider 
								max={episode.duration}
								value={progress}
								onChange={handleSeek}
								trackStyle={{ background: '#04d361' }}
								railStyle={{ background: '#9f75ff' }}
								handleStyle={{ borderColor: '#04d361', borderWidth: 4 }}
							/>
						) : (
							<div className='emptySlider' />
						) }
					</div>
					<span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
				</Progress>

				{ episode 
					&& (
						<audio 
							src={episode.url} 
							ref={audioRef}
							loop={isLooping}
							autoPlay
							onEnded={handleEpisodeEnded}
							onPlay={() => setPlayingState(true)}
							onPause={() => setPlayingState(false)}
							onLoadedMetadata={setupProgressListener}
						/>
					) 
				}

				<Buttons>
					<button 
						type="button" 
						disabled={!episode || episodeList.length == 1}
						onClick={toggleShuffle} 
						className={isShuffling ? 'isActive' : ''}
					>
						<img src="/shuffle.svg" alt="Embaralhar" />
					</button>
					<button type="button" onClick={playPrevious} disabled={!episode || !hasPrevious}>
						<img src="/play-previous.svg" alt="Tocar anterior" />
					</button>
					<button 
						type="button"
						className='playButton' 
						disabled={!episode} 
						onClick={togglePlay}
					>
						{ isPlaying 
							? <img src="/pause.svg" alt="Tocar" />
							: <img src="/play.svg" alt="Tocar" />
						}
					</button>
					<button type="button" onClick={playNext} disabled={!episode || !hasNext}>
						<img src="/play-next.svg" alt="Tocar próxima"/>
					</button>
					<button 
						type="button" 
						disabled={!episode}
						onClick={toggleLoop} 
						className={isLooping ? 'isActive' : ''}
					>
						<img src="/repeat.svg" alt="Repetir" />
					</button>
				</Buttons>
			</footer>
		</PlayerContainer>
	)
}