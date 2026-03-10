import './UsersPage.css'
import { useState, useMemo } from 'react'
import { useUsers } from '../context/UsersContext'
import UserCard from '../components/UserCard'

function UsersPage() {
    const { users, loading, search, setSearch } = useUsers()
    const [maxAge, setMaxAge] = useState('')

    const filtered = useMemo(() => {
        return users.filter(u => maxAge === '' || u.age <= Number(maxAge))
    }, [users, maxAge])

    if (loading) return <div className="loading">Loading...</div>

    return (
        <div className="users-page">
            <div className="users-page__controls">
                <input
                    className="users-page__input"
                    type="text"
                    placeholder="Search users..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <input
                    className="users-page__input"
                    type="number"
                    placeholder="Max age..."
                    value={maxAge}
                    onChange={e => setMaxAge(e.target.value)}
                />
            </div>
            {filtered.length === 0 ? (
                <p className="users-page__empty">Пользователи не найдены</p>
            ) : (
                <div className="users-page__grid">
                    {filtered.map(user => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default UsersPage
