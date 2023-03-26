import React from 'react'

const Tile = () => {
    let tiles = [
        { name:"COP 4530" },
        { name:"CDA 3201" }
    ];
    return (
        <div className="grid grid-cols-3 gap-4 content-start text-center m-12">
            <div className="bg-white font-bold text-2xl rounded-lg cursor-pointer hover:bg-orange-200 duration-200">COP 4530 </div>
            <div className="bg-white font-bold text-2xl rounded-lg cursor-pointer hover:bg-orange-200 duration-200">CDA 3201</div>
            <div className="bg-white font-bold text-2xl rounded-lg cursor-pointer hover:bg-orange-200 duration-200">CDA 3201L</div>
            <div className="bg-white font-bold text-2xl rounded-lg cursor-pointer hover:bg-orange-200 duration-200">COT 3100</div>
            <div className="bg-white font-bold text-2xl rounded-lg cursor-pointer hover:bg-orange-200 duration-200">COP 3514</div>
            <div className="bg-white font-bold text-2xl rounded-lg cursor-pointer hover:bg-orange-200 duration-200">CDA 3103</div>
        </div>
    )
}

export default Tile