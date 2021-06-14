import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import { DarkModeButton } from '../DarkModeButton'
import { Logo } from '../Logo'

import { HeaderContainer } from './styles'

interface HeaderProps {
  toggleTheme: () => void
}

export function Header({toggleTheme}: HeaderProps) {
	const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
		locale: ptBR
	})

  return (
		<HeaderContainer>
			<Logo />

			<p>O melhor para você ouvir, sempre</p>

			<span>{currentDate}</span>

			<DarkModeButton toggleTheme={toggleTheme}/>
		</HeaderContainer>
	);
}