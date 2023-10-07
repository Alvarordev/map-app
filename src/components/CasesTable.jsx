'use client'
import { AskDispatchIcon, AudioIcon, DispatchIcon, FlagIcon, HandleIcon, HistoryIcon } from "./Icons";
import { cases as incidences } from '../mocks/cases.json'
import { useEffect, useState } from "react";

const CasesTable = () => {
    const [search, setSearch] = useState('')
    const [newIncidences, setNewIncidences] = useState(incidences)

    const TABLE_HEAD = ['Acciones', 'Caso', 'Fecha Hora', 'Origen', 'Tipo', 'SubTipo', 'Reportante', 'Documento', 'Telefono', 'Sector', 'Direccion', 'Usuario', 'Anexo', 'Modalidad', 'Situacion']

    const ACTION_BUTTONS = [
        {
            title: 'Consulta Despachar',
            icon: AskDispatchIcon()
        },
        {
            title: 'Despachar',
            icon: DispatchIcon()
        },
        {
            title: 'Derivar',
            icon: HandleIcon()
        },
        {
            title: 'Historial',
            icon: HistoryIcon()
        },
        {
            title: 'Audio',
            icon: AudioIcon()
        },
        {
            title: 'Atendido',
            icon: FlagIcon()
        }
    ]

    useEffect(() => {
        const filterIncidences = () => {
            const filteredIncidences = incidences.filter((item) => {
                return search.toLocaleLowerCase() === ''
                    ? item
                    : item.origen.toLowerCase().includes(search) ||
                    item.tipo.toLowerCase().includes(search) ||
                    item.subTipo.toLowerCase().includes(search) ||
                    item.documento.toLowerCase().includes(search)
            })
            setNewIncidences(filteredIncidences)
        }

        filterIncidences()
    }, [search])

    return (
        <div className="w-full h-[1300px] bg-[#020817] border border-[#1e293b] mt-10 p-5 rounded-md">
            <div onChange={(e) => setSearch(e.target.value)} className="pb-3 flex items-center gap-2">
                <label htmlFor="search">Busqueda: </label>
                <input name='search' type="text" className="bg-[#1e293b] rounded-sm" />
            </div>
            <div className="rounded-md border border-[#27272a] w-full overflow-auto">
                <table className="max-w-none text-sm caption-bottom overflow-hidden">
                    <thead className="[&_tr]:border-b [&_tr]:border-[#1e293b]">
                        <tr>
                            {TABLE_HEAD.map(head => (
                                <th className="h-10 px-2 text-center align-middle font-medium" key={head}>{head}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {newIncidences.map(({ caso, fecha, origen, tipo, subTipo, reportante, documento, telefono, sector, direccion, usuario, anexo, modalidad, situacion }) => (
                            <tr key={caso} className="[&>td]:whitespace-nowrap [&>td]:p-2 [&>td]:border-r [&>td]:border-[#1e293b]">
                                <td>
                                    {ACTION_BUTTONS.map(({ title, icon }) => (
                                        <button
                                            title={title}
                                            key={title}
                                            className={`p-1 my-1 mx-0.5 rounded-md ${title !== 'Atendido' ? 'bg-[#3b82f6]' : ''} `}
                                        >
                                            {icon}
                                        </button>
                                    ))}
                                </td>
                                <td>
                                    <div>{caso}</div>
                                </td>
                                <td>
                                    <div>{fecha}</div>
                                </td>
                                <td>
                                    <div>{origen}</div>
                                </td>
                                <td>
                                    <div>{tipo}</div>
                                </td>
                                <td>
                                    <div>{subTipo}</div>
                                </td>
                                <td>
                                    <div>{reportante}</div>
                                </td>
                                <td>
                                    <div>{documento}</div>
                                </td>
                                <td>
                                    <div>{telefono}</div>
                                </td>
                                <td>
                                    <div>{sector}</div>
                                </td>
                                <td>
                                    <div>{direccion}</div>
                                </td>
                                <td>
                                    <div>{usuario}</div>
                                </td>
                                <td>
                                    <div>{anexo}</div>
                                </td>
                                <td>
                                    <div>{modalidad}</div>
                                </td>
                                <td>
                                    <div>{situacion}</div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CasesTable;