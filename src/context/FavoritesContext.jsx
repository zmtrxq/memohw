import { createContext, useContext, useState } from 'react'

const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([])

    function addFavorite(user) {
        setFavorites(prev => {
            if (prev.find(u => u.id === user.id)) return prev
            return [...prev, user]
        })
    }

    function removeFavorite(id) {
        setFavorites(prev => prev.filter(u => u.id !== id))
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export function useFavorites() {
    return useContext(FavoritesContext)
}
