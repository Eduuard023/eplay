import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Sobrevivência é apenas o começo. Seis anos se passaram desde o desastre biológico em Raccoon City. Leon S. Kennedy, um dos sobreviventes, segue o rastro da raptada filha do presidente até uma vila europeia isolada, onde há algo terrivelmente errado com os habitantes.',
    title: 'Resident Evil 4 - Remake',
    system: 'Steam',
    info: ['20%', 'R$ 200,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Sobrevivência é apenas o começo. Seis anos se passaram desde o desastre biológico em Raccoon City. Leon S. Kennedy, um dos sobreviventes, segue o rastro da raptada filha do presidente até uma vila europeia isolada, onde há algo terrivelmente errado com os habitantes.',
    title: 'Resident Evil 4 - Remake',
    system: 'PS5',
    info: ['20%', 'R$ 240,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Sobrevivência é apenas o começo. Seis anos se passaram desde o desastre biológico em Raccoon City. Leon S. Kennedy, um dos sobreviventes, segue o rastro da raptada filha do presidente até uma vila europeia isolada, onde há algo terrivelmente errado com os habitantes.',
    title: 'Resident Evil 4 - Remake',
    system: 'Steam',
    info: ['20%', 'R$ 200,00'],
    image: resident
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Sobrevivência é apenas o começo. Seis anos se passaram desde o desastre biológico em Raccoon City. Leon S. Kennedy, um dos sobreviventes, segue o rastro da raptada filha do presidente até uma vila europeia isolada, onde há algo terrivelmente errado com os habitantes.',
    title: 'Resident Evil 4 - Remake',
    system: 'Steam',
    info: ['20%', 'R$ 200,00'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Junte-se à luta por Santuário no Diablo IV, a aventura suprema de RPG de ação. Vivencie a campanha aclamada pela crítica e os novos conteúdos de temporada.',
    title: 'Diablo IV',
    system: 'Battle.net',
    info: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Junte-se à luta por Santuário no Diablo IV, a aventura suprema de RPG de ação. Vivencie a campanha aclamada pela crítica e os novos conteúdos de temporada.',
    title: 'Diablo IV',
    system: 'PS5',
    info: ['17/05'],
    image: diablo
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'The Legend of Zelda: Tears of the Kingdom é um jogo eletrônico de ação-aventura desenvolvido e publicado pela Nintendo',
    title: 'The Legend of Zelda: Tears of the Kingdom',
    system: 'Nintendo',
    info: ['13/07'],
    image: zelda
  },
  {
    id: 8,
    category: 'Ação',
    description:
      'Star Wars Jedi: Survivor é um jogo de ação e aventura desenvolvido pela Respawn Entertainment e publicado pela Electronic Arts.',
    title: 'Star Wars Jedi: Survivor',
    system: 'Steam',
    info: ['07/08'],
    image: starWars
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
