import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import { usePlayer } from '../../contexts/PlayerContext'
import { api } from '../../services/api'
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString'

import { Scroll, Content, ThumbnailContainer, Description } from '../../styles/episodes'
import React from 'react'

type Episode = {
  id: string
  title: string
  thumbnail: string
  members: string
  url: string
  duration: number
  durationAsString: string
  publishedAt: string
  description: string
}

type EpisodeProps = {
  episode: Episode
}

export default function Episode({episode}: EpisodeProps) {
  const { play } = usePlayer()

  return (
    <Scroll>
      <Head>
        <title>{episode.title} | Podcastr</title>
      </Head>

      <Content>
        <ThumbnailContainer>
          <Link href="/">
            <button type="button">
              <img src="/arrow-left.svg" alt="Voltar"/>
            </button>
          </Link>
          <Image
            width={700} 
            height={160} 
            src={episode.thumbnail} 
            alt={episode.title}
            objectFit="cover"
          />
          <button type="button" onClick={() => play(episode)}>
            <img src="/play.svg" alt="Tocar episodio"/>
          </button>
        </ThumbnailContainer>

        <header>
          <h1>{episode.title}</h1>
          <span>{episode.members}</span>
          <span>{episode.publishedAt}</span>
          <span>{episode.durationAsString}</span>
        </header>

        <Description 
          dangerouslySetInnerHTML={{ __html: episode.description }} //Fazer valor ser apresentado como html
        />
      </Content>
    </Scroll>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {  //Necessário para telas estaticas dinamicas
  const { data } = await api.get('/episodes', {
    params: {
      _limit: 2,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const paths = data.map(episode => {
    return {
      params: {
        slug: episode.id
      }
    }
  })

  return {
    paths, //Colocar params que deseja acessar de forma estática
    fallback: 'blocking' //Apenas mostrar a página quando as informações da api já estiverem em tela
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params

  const { data } = await api.get(`/episodes/${slug}`)

  const episode = {
    id: data.id,
    title: data.title,
    description: data.description,
    thumbnail: data.thumbnail,
    members: data.members,
    url: data.file.url,
    duration: Number(data.file.duration),
    durationAsString: convertDurationToTimeString(Number(data.file.duration)),
    publishedAt: format(parseISO(data.published_at), 'd MMM yy', { locale: ptBR })
  }

  return {
    props: {
      episode
    },
    revalidate: 60 * 60 * 24 //24 horas
  }
}