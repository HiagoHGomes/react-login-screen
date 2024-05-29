import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login/login"
import { Profile } from "../pages/Profile/profile"
import { RequireAuth } from "../contexts/Auth/RequireAuth"

export const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>}></Route>
        </Routes>
    )
}