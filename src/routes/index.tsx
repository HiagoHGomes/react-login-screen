import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login/login"
import { Profile } from "../pages/Profile/profile"

export const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
        </Routes>
    )
}