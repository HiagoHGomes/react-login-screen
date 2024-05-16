import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Private } from "../pages/Private"

export const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/private" element={<Private/>}></Route>
      </Routes>
    )
}