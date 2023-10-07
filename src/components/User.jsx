const User = () => {
    return ( 
        <div className="flex px-5 justify-between items-center py-7">
            <div className="bg-white text-black p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div>
                <span className="text-sm">LHERBIAS</span>
                <h2 className="text-sm">Administrador ASI</h2>
            </div>
        </div>
     );
}
 
export default User;