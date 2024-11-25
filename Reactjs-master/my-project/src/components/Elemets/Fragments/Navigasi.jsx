import { useState } from "react";
import { Link } from "react-router-dom";

const Navigasi = (props) => {
    const { dashboardText, forumText, panduanText, pengaturanText, kontakKamiText, signIn, tentangKami,classname } = props;
    const [showPengaturanMenu, setShowPengaturanMenu] = useState(false);

    const handlePengaturan = () => {
        setShowPengaturanMenu(!showPengaturanMenu);
    };

    return (
        <div className="flex items-center font-semibold">
            <Link className="hover:text-hijau hover:border-b-2 text-md hover:border-hijau duration-200 ease-in-out" to="/dashboard">{dashboardText}</Link>
            <Link className="hover:text-hijau hover:border-b-2 mx-10 text-md hover:border-hijau duration-200 ease-in-out" to="/forum">{forumText}</Link>
            <Link className="hover:text-hijau hover:border-b-2  mr-10 text-md hover:border-hijau duration-200 ease-in-out" to="/panduan">{panduanText}</Link>
            <button className="hover:text-hijau hover:border-b-2  text-md hover:border-hijau duration-200 ease-in-out" onClick={handlePengaturan}>
                {pengaturanText}
            </button>
            <Link className="hover:text-hijau hover:border-b-2 text-md  hover:border-hijau" to="/about">{kontakKamiText}</Link>
            <Link className="hover:text-hijau hover:border-b-2 text-md mx-10 hover:border-hijau" to="/">{tentangKami}</Link>
            <Link className={`hover:text-hijau hover:border-b-2  text-md hover:border-hijau ${classname}`} to="/login">{signIn}</Link>

            {/* Dropdown menu untuk pengaturan */}
            {showPengaturanMenu && (
                <div className="absolute bg-white border rounded shadow-lg mt-44 py-2 ml-[22rem] transition duration-700 ease-in-out">
                    <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="/profile">Profile</Link>
                    <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="/settings">Settings</Link>
                    <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="/">Logout</Link>
                </div>
            )}
        </div>
    );
};

export default Navigasi;
