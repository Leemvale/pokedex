import AllPokemons from "./containers/AllPokemons.jsx";
import CaughtPokemons from "./containers/CaughtPokemons.jsx";
import PokemonDetail from "./containers/PokemonDetail.jsx";

const routes = [
    {
        path:"/",
        component: AllPokemons,
        exact: true
    },
    {
        path:"/pokemons",
        component: AllPokemons,
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