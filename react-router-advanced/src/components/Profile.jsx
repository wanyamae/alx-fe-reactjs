import { Link, Outlet } from "react-router-dom"

export default function Profile() {
    return (
        <div>
            <h2> Profile </h2>
            <nav>
                <Link to="settings">Settings</Link>
                <Link to="activity">Activity</Link>
            </nav>
            <Outlet />
        </div>
    )
}