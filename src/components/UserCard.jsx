import './UserCard.css'
import { useFavorites } from '../context/FavoritesContext'

function UserCard({ user }) {
    const { favorites, addFavorite, removeFavorite } = useFavorites()
    const isFavorite = favorites.some(u => u.id === user.id)

    return (
        <div className="user-card">
            <img className="user-card__image" src={user.image} alt={user.firstName} />
            <p className="user-card__name">{user.firstName} {user.lastName}</p>
            <p className="user-card__age">Age: {user.age}</p>
            <p className="user-card__email">{user.email}</p>
            <button
                className={`user-card__btn${isFavorite ? ' user-card__btn--active' : ''}`}
                onClick={() => isFavorite ? removeFavorite(user.id) : addFavorite(user)}
            >
                {isFavorite ? 'Remove' : 'Add to Favorites'}
            </button>
        </div>
    )
}

export default UserCard
