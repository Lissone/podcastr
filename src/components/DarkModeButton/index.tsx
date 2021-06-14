import { FaMoon } from 'react-icons/fa'

import { Container } from './styles'

interface DarkModeButtonProps {
  toggleTheme: () => void
}

export function DarkModeButton({ toggleTheme }: DarkModeButtonProps) {
  return (
    <Container onClick={toggleTheme}>
      <FaMoon />
    </Container>
  )
}