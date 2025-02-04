import { Outlet, useNavigation } from "react-router-dom"
import { Footer } from "./static/Footer"
import { Header } from "./static/Header"
import { Loading } from "./static/Loading"

export const Applayout = () => {

    const navigation = useNavigation()

    if(navigation.state==="loading"){
        return (
            <Loading />
        )
    }
    
    return (
        <>
            <Header />
            <Outlet />
            <Footer />  
        </>
    )
}