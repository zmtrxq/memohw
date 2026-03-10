import { createContext, useContext, useState, useEffect } from 'react'

const UsersContext = createContext()

export function UsersProvider({ children }) {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')

    useEffect(() => {
        setLoading(true)
        const url = search ? `https://dummyjson.com/users/search?q=${search}` : 'https://dummyjson.com/users'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUsers(data.users || [])
                setLoading(false)
            })
    }, [search])

    return (
        <UsersContext.Provider value={{ users, loading, search, setSearch }}>
            {children}
        </UsersContext.Provider>
    )
}

export function useUsers() {
    return useContext(UsersContext)
}
