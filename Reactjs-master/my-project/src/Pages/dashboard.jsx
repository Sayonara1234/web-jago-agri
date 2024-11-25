import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import Header from "../components/Elemets/Fragments/Header";
import Navigasi from "../components/Elemets/Fragments/Navigasi";
import WeatherForecast from "../components/Elemets/Fragments/weatherComponent";
import Footer from "../components/Elemets/Fragments/Footer";
import MyCalendar from "../components/Elemets/Fragments/Calanderd";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Dashboard = () => {
    const [jam, setJam] = useState("");
    const [tanggal, setTanggal] = useState("");
    const kota = "Banda Aceh";

    useEffect(() => {
        function updateJam() {
            const sekarang = new Date();
            const jam = sekarang.getHours().toString().padStart(2, '0');
            const menit = sekarang.getMinutes().toString().padStart(2, '0');
            setJam(`${jam}:${menit}`);
        }

        function updateTanggal() {
            const sekarang = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const tanggalFormatted = sekarang.toLocaleDateString('id-ID', options);
            setTanggal(tanggalFormatted);
        }

        const interval = setInterval(updateJam, 1000);
        updateJam();
        updateTanggal();

        return () => clearInterval(interval);
    }, []);

    return (
        <Fragment>
            <Header>
                <Navigasi 
                    dashboardText="Dashboard"
                    forumText="Forum" 
                    panduanText="Panduan" 
                    pengaturanText="Pengaturan"
                />
            </Header>
            <div className="flex flex-col mt-32 mx-5 gap-5">
                <div className="flex gap-5">
                    <img src="/img/jagung-1.png" alt=""  data-aos = "fade-right"/>
                    <div className="flex flex-col gap-4" data-aos = "fade-left">
                        <h2 className="p-4 bg-hijau rounded-full text-white font-bold text-xl w-fit mb-5">Selamat Datang di JagoAgri!</h2>
                        <p className="text-xl">
                            Jagung adalah tanaman pangan penting yang termasuk dalam keluarga rumput-rumputan (Poaceae) dan memiliki peran utama sebagai sumber karbohidrat di banyak negara. Selain sebagai makanan pokok, jagung juga digunakan dalam industri pakan ternak dan bahan baku produk olahan seperti minyak jagung, tepung, dan pati. Tanaman ini mudah dibudidayakan di berbagai kondisi iklim, terutama di daerah tropis. Jagung juga memiliki siklus panen yang relatif cepat dan produktivitas tinggi, menjadikannya pilihan ideal dalam mendukung ketahanan pangan dan industri pertanian.
                        </p>
                    </div>
                </div>
                <div className="mt-5">
                    <h2 className="font-semibold text-hijau text-4xl border-b-2 border-hijau w-fit my-16 mb-10">Diagnosis of disease and pest</h2>
                    <div className="flex mt-16 gap-5">
                        <Cards imgURL="/img/image 2.png" title="Hawar Daun" />
                        <Cards imgURL="/img/image 1.png" title="Penyakit Bulai" />
                        <Cards imgURL="/img/image 3.png" title="Busuk Batang" />
                        <Cards imgURL="/img/image 4.png" title="Ulat Grayak" />
                        <Cards imgURL="/img/image 5.png" title="Pengerek Batang" />
                    </div>
                </div>
                <h2 className="font-semibold text-hijau text-4xl border-b-2 border-hijau w-fit my-12">Weather</h2>
                <div className="flex space-x-5 mb-5">
                    <div className="bg-hijau w-[394.87px] h-[308.17px] rounded-[30px]">
                        <h2 className="font-semibold text-white text-3xl p-5 text-center">{kota}</h2>
                        <div id="jam" className="text-center text-white text-2xl mt-5">
                            <h1 className="font-bold text-[70px] my-10">{jam}</h1>
                            <h2 className="text-lg mt-3">{tanggal}</h2>
                            <h3 className="text-md mt-1">{kota}</h3>
                        </div>
                    </div>
                    <div className="bg-hijau w-[814.18px] h-[308.17px] rounded-[30px]">
                    </div>
                </div>
                <div className="flex space-x-5 mb-10">
                    <WeatherForecast />
                    <div className="bg-hijau w-[814.18px] h-[308.17px] rounded-[30px]"></div>
                </div>
            </div>
            <MyCalendar />
            <Footer />
        </Fragment>
    );
};

const Cards = (props) => {
    const { title, imgURL } = props;
    return (
        <motion.div 
            className="w-64 h-64 flex flex-col p-3 mb-20 justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="bg-hijau rounded-2xl flex flex-col p-4">
                <img src={imgURL} alt="" className="object-fill" height={"80px"} />
            </div>
            <div className="flex flex-col mt-10 justify-center">
                <div className="bg-hijau rounded-full text-white font-bold text-xl text-center p-2">
                    <h5>{title}</h5>
                </div>
            </div>
        </motion.div>
    );
};

export default Dashboard;
