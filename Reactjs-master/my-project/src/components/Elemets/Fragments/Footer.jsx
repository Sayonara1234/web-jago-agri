import { Link } from "react-router-dom";

const Footer =  () => {
    return (
        <div className="bg-hijau">
            <div className="flex justify-around">
            <div className="flex space-x-3 items-center px-5 py-7">
                <img src="/logo2.svg" alt="" className="" />
                <h1 className="text-white font-semibold text-xl">JagoAgri</h1>
            </div>
            <div className="px-5 py-7 flex flex-col gap-4">
                <h5 className="text-white font-semibold text-xl">Tentang Kami</h5>
                <Link to="" className="text-white text-center">lorem impsum</Link>
                <Link to="" className="text-white text-center">lorem impsum</Link>
                <Link to="" className="text-white text-center">lorem impsum</Link>
                <Link to="" className="text-white text-center">lorem impsum</Link>
                
            </div>
            <div className="px-5 py-7 flex flex-col gap-4">
                <h5 className="text-white font-semibold text-xl">Album</h5>
                <Link to="" className="text-white text-center">lorem impsum</Link>
                <Link to="" className="text-white text-center">lorem impsum</Link>
                <Link to="" className="text-white text-center">lorem impsum</Link>
                <Link to="" className="text-white text-center">lorem impsum</Link>
                
            </div>
            <div className="px-5 py-7 flex flex-col gap-4">
                <h5 className="text-white font-semibold text-xl">Kontak</h5>
                <Link to="" className="text-white text-center">lorem impsum</Link>
                <Link to="" className="text-white text-center">lorem impsum</Link>
                <Link to="" className="text-white text-center">lorem impsum</Link>
                <Link to="" className="text-white text-center">lorem impsum</Link>
                
            </div>
            </div>
            <p className="text-white text-center py-10">JagoAgri2024
            R</p>
        </div>
    )
}
export default Footer;