import './App.css'
import { TwitterFollowCard } from './twitterFollowCard'

export function App () {
    return (
       <TwitterFollowCard username="manupedrob" name="Manuel Pedrobelli" />
    )
}



/* cual es la diferencia entre componente y elemento?

un componente es una factoria de elementos
un componente es una funcion que al ejecutarla te devuelve elementos

el elemento es lo que renderiza react

react renderiza ELEMENTOS

*/