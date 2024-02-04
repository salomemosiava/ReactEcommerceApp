import { Route, Routes } from "react-router-dom"
import { HomePage, LoginPage, SignUpPage } from "../pages"

export const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    )
}
