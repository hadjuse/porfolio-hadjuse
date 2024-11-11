import React from "react";

export default function Menu({ name }) {
    return (
        <>
            <div className="basis-1/4 bg-white-400 shadow-md rounded border-transparent border-b-4 hover:border-b-sky-400 p-2 text-center size-16 mx-5">
                {name}
            </div>
        </>
    )
}