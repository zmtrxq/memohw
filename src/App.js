import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UsersProvider } from './context/UsersContext'
import { FavoritesProvider } from './context/FavoritesContext'
import Header from './components/Header'
import UsersPage from './pages/UsersPage'
import FavoritesPage from './pages/FavoritesPage'

function App() {
    return (
        <BrowserRouter>
            <UsersProvider>
                <FavoritesProvider>
                    <Header />
                    <Routes>
                        <Route path="/" element={<UsersPage />} />
                        <Route path="/favorites" element={<FavoritesPage />} />
                    </Routes>
                </FavoritesProvider>
            </UsersProvider>
        </BrowserRouter>
    );
}

export default App
