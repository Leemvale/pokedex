import Pokemons from "./containers/Pokemons.jsx";
import CaughtPokemons from "./containers/CaughtPokemons.jsx";
import PokemonDetail from "./containers/PokemonDetail.jsx";

const routes = [
    {
        path:"/",
        component: Pokemons,
        exact: true
    },
    {
        path:"/pokemons",
        component: Pokemons,
        exact: true
    },
    {
        path:"/caughtPokemons",
        component: CaughtPokemons,
        exact: true
    },
    {
        path:"/pokemons/:id",
        component: PokemonDetail,
        exact: true
    },
];

export default routes