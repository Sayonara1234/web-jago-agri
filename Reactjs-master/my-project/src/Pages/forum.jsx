import { Fragment } from "react"
import Header from "../components/Elemets/Fragments/Header"
import Navigasi from "../components/Elemets/Fragments/Navigasi";
import Button from "../components/Elemets/Button/Index";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Forum = () => {
    const card = [
        {
            id: 1,
            name: "Lorem Ipsum",
            img: "/img/image-9.png",
            
        },
        {
            id: 2,
            name: "Lorem Ipsum",
            img: "/img/image-10.png",
        },
        {
            id: 3,
            name: "Lorem Ipsum",
            img: "/img/image-11.png",
        },
        {
            id: 1,
            name: "Lorem Ipsum",
            img: "/img/image-9.png",
            
        },
        {
            id: 2,
            name: "Lorem Ipsum",
            img: "/img/image-10.png",
        },
        {
            id: 3,
            name: "Lorem Ipsum",
            img: "/img/image-11.png",
        },
    ]
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
            <div className="container mx-auto">
                <h1 className="text-2xl text-hijau font-semibold border-b-hijau w-fit mt-10 border-b-2">Forum</h1>
                <div className="bg-hijau p-3 mt-10 rounded-lg flex gap-5 items-center">
                    <div className="bg-white rounded-full w-[50px] h-[50px]"></div>
                    <input type="text" placeholder="Let’s share what going on your mind......" className="w-[80%] h-12 rounded-xl placeholder:text-slate-500 placeholder:italic text-slate-700 focus:outline-none placeholder:pl-5 " />
                    <Button classname="bg-kuning w-36">Create Post</Button>
                </div>
                <div className="mt-10">
                    {card.map((item) => (
                        <div className="border-hijau border-2 p-3 mt-10 rounded-xl flex gap-5" data-aos = "fade-right">
                            <img src={item.img} alt="" />
                            <div className="flex flex-col items-center">
                                <h1 className="text-black text-xl font-bold">{item.name}</h1>
                                <div className="flex gap-3 items-center flex-wrap mt-20">
                                    <div className="rounded-full w-8 h-8 bg-hijau"></div>
                                    <div className="flex flex-col">
                                        <span className="text-slate-900 font-bold text-sm">Willy sinaga</span>
                                        <span className="text-slate-900 font-semibold text-sm">28 Oktober 2024</span>
                                    </div>
                                </div>
                                <div className="flex gap-3 mt-5">
                                    <button type="button" className="text-white bg-kuning py-1 px-3 rounded-xl text-sm">Hama</button>
                                    <button type="button" className="text-white bg-kuning py-1 px-3 rounded-xl text-sm">Hama</button>
                                </div>
                            </div>
                            <div className="flex gap-5 items-end ml-[30rem] md:ml-[45rem]">
                                <img src="/icons/like.png" alt="like" className="h-7" />
                                <img src="/icons/komentar.png" alt="comment" className="h-7" />
                                <img src="/icons/shere.png" alt="" className="h-7" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};
export default Forum;