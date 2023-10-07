'use client'
import Link from "next/link";
import { ServicesIcon, ServiceRolIcon, ArrowIcon, StadisticIcon, ProcessIcon, ReportsIcon, ConsultIcon } from "./Icons"
import { useState } from "react";
import { usePathname } from "next/navigation";


const MainNav = () => {
    const pathName = usePathname()

    const initialRoutes = [
        {
            title: 'Gestion De Casos',
            paths: [
                { href: '/GestionDeCasos/BandejaCasos', name: 'Bandeja Casos' },
                { href: '/GestionDeCasos/BandejaRecursos', name: 'Bandeja Recursos' }
            ],
            icon: ServicesIcon(),
            active: pathName.includes('/GestionDeCasos') ? true : false
        },
        {
            title: 'Rol De Servicio',
            paths: [
                { href: '/GestionDeCasos/BandejaCasos', name: 'Bandeja Casos' },
            ],
            icon: ServiceRolIcon(),
            active: false
        },
        {
            title: 'Procesos',
            paths: [
                { href: '/GestionDeCasos/BandejaCasos', name: 'Bandeja Casos' },
            ],
            icon: ProcessIcon(),
            active: false
        },
        {
            title: 'Estadistica',
            paths: [
                { href: '/GestionDeCasos/BandejaCasos', name: 'Bandeja Casos' },
            ],
            icon: StadisticIcon(),
            active: false
        },
        {
            title: 'Reportes',
            paths: [
                { href: '/GestionDeCasos/BandejaCasos', name: 'Bandeja Casos' },
            ],
            icon: ReportsIcon(),
            active: false
        },
        {
            title: 'Consultas',
            paths: [
                { href: '/GestionDeCasos/BandejaCasos', name: 'Bandeja Casos' },
            ],
            icon: ConsultIcon(),
            active: false
        }
    ]

    const [routes, setRoutes] = useState( initialRoutes)


    const handleClick = (index) => {
        const newRoutes = [...routes];

        newRoutes[index] = {
            ...newRoutes[index],
            active: !newRoutes[index].active,
        };

        if (newRoutes[index].active) {
            newRoutes.forEach((route, i) => {
                if (i !== index) {
                    route.active = false;
                }
            });
        }

        setRoutes(newRoutes);
    };

    return (
        <div className="px-3">
            <h2 className="font-semibold text-sm pl-2">MENÚ</h2>
            <ul className="flex flex-col gap-2 mt-2.5">
                {routes.map(({ title, paths, icon, active }, index) => (
                    <li key={title}>
                        <button onClick={() => handleClick(index)} className={`flex w-full ${active ? 'bg-[#3b82f6]' : ''} justify-between py-2 px-2 rounded-md items-center text-sm hover:bg-[#3b82f6]`}>
                            <span className="flex items-center gap-3 text-sm">
                                {icon}
                                {title}
                            </span>
                            <ArrowIcon />
                        </button>
                        {paths.map(({ href, name }) => (
                            <ul key={name} className={`${active ? '' : 'hidden'}`}>
                                <li className={`pl-4 py-2 hover:bg-[#1e293b] w-full ${pathName === href ? 'text-[#3b82f6]' : ''}`}>
                                    <Link className="flex" href={href}>{name}</Link>
                                </li>
                            </ul>
                        ))}

                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MainNav;