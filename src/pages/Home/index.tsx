import { Intro } from './components/Intro'
import { OurCoffees } from './components/OurCoffees'
import { HomeContainer } from './styles'

export function Home() {
  console.log('teste')
  return (
    <HomeContainer>
      <Intro />
      <OurCoffees />
    </HomeContainer>
  )
}
