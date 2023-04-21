import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

 export function App() {
    const formatUserName = (userName)=> `@${userName}`
    return (
        <section className='App'>
            <TwitterFollowCard
                formatUserName={formatUserName}
                inicialIsFollowing
                userName="Enzo_EVP"
                name="Enzo Vera Pagnard"
            />
            <TwitterFollowCard
                formatUserName={formatUserName}
                inicialIsFollowing ={false}
                userName="midudev"
                name="Miguel Ángel Durán" />
        </section>
    )
}