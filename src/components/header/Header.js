import React from "react";
import Menu from "./components/Menu";
const menu = [
    'Me',
    'CV',
    'Projects'
]
export default function Header() {
    return (
        <>
            <div className="flex flex-row justify-center mt-10 ml-10">
                {
                    menu.map(
                        (element, key)=>(
                            <Menu name={element}/>
                        )
                    )
                }     
            </div>
        </>
    )
}
