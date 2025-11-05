import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <Header />
            <main className="container text-center">
                <Outlet />
            </main>
        </>
    )
}