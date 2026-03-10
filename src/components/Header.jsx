import './Header.css'
import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'

function Header() {
    const { favorites } = useFavorites()

    return (
        <header className="header">
            <span className="header__logo">Users Catalog</span>
            <nav className="header__nav">
                <Link className="header__link" to="/">Users</Link>
                <Link className="header__link" to="/favorites">
                    Favorites
                    {favorites.length > 0 && (
                        <span className="header__badge">{favorites.length}</span>
                    )}
                </Link>
            </nav>
        </header>
    )
}

export default Header
