import NavBar from "./NavBar";
import Footer from "./Footer";
import {useTheme} from '@/context/ThemeContext';

export default function Layout({children}) {
    const {isDarkMode} = useTheme();

    return (
        <>
            <div className="base-colour" style={{backgroundColor: isDarkMode ? '#000' : '#FFF'}}/>
            <div className="noise"/>
            {/*<NavBar/>*/}
            {children}
            {/*<Footer/>*/}
        </>
    )
}