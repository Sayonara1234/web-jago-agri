import React, { useState } from 'react';

const jenisHama = [
    {
        id: 1,
        name: "Hawar Daun",
        img: "/img/image 2.png",
    },
    {
        id: 2,
        name: "Penyakit Bulai",
        img: "/img/image 1.png",
    },
    {
        id: 3,
        name: "Busuk Batang",
        img: "/img/image 3.png",
    },
    {
        id: 4,
        name: "Ulat Grayak",
        img: "/img/image 4.png",
    },
    {
        id: 5,
        name: "Pengerek Batang",
        img: "/img/image 5.png",
    },
];

const Hama = () => {
    const [data, setData] = useState(jenisHama);
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {data.map((hama) => (
                <div key={hama.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src={hama.img} alt={hama.name} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">{hama.name}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Hama;
