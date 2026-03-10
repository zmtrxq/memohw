import './FavoritesPage.css'
import { useFavorites } from '../context/FavoritesContext'
import UserCard from '../components/UserCard'

function FavoritesPage() {
    const { favorites } = useFavorites()

    return (
        <div className="favorites-page">
            <h2 className="favorites-page__title">Favorites</h2>
            {favorites.length === 0 ? (
                <p className="favorites-page__empty">Нет избранных пользователей</p>
            ) : (
                <div className="favorites-page__grid">
                    {favorites.map(user => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default FavoritesPage
