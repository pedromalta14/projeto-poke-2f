import poke from './assets/pokeapi_256 2.png'
import eevee from './assets/eevee.jpg'
import './Home.css'
import PokeFlex from './Pokeflex'
import PokeGrid from './PokeGrid'
import Menu from './Menu'
const Home = ()=>{
    return (
        <div>
            <Menu    />
           <PokeFlex />
           <PokeGrid />
             
        </div>
    )
}

export default Home
