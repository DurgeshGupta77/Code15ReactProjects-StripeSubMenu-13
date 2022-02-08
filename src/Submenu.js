import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "./context";

const SubMenu = () => {
    const { isSubmenuOpen, location, page: { page, links } } = useGlobalContext();
    const container = useRef(null);
    useEffect(() => {
        const subMenu = container.current;
        const { center, bottom } = location;
        subMenu.style.left = `${center}px`;
        subMenu.style.top = `${bottom}px`;
    }, [location])
    return <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
        <div className="submenu-container" >
            <h4>{page}</h4>
            <div className={`submenu-center`}>
                {links.map((link, index) => {
                    const { label, icon, url } = link;
                    return <a key={index} href={url}>{icon}<p>{label}</p></a>
                })}
            </div>
        </div>
    </aside>
}

export default SubMenu;