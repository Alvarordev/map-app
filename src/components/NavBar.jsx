import MainNav from "./MainNav";
import User from "./User";

const Navbar = () => {
    return ( 
        <nav className=" text-white bg-[#020817] h-full w-[230px] fixed border-r border-[#1e293b]">
            <h1 className="text-3xl text-center pt-5 pb-3 font-bold">Soluciones Inteligentes</h1>
            <User/>
            <MainNav/>
            <footer className="absolute bottom-0 px-5">
                <button className="pb-3">Cerrar Sesion</button>
            </footer>
        </nav>
     );
}
 
export default Navbar;