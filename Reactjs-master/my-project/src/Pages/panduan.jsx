import Header from "../components/Elemets/Fragments/Header"
import Navigasi from "../components/Elemets/Fragments/Navigasi"

const Panduan = () => {
    return (
        <div className="">
            <Header>
                <Navigasi
                    dashboardText="Dashboard"
                    forumText="Forum" 
                    panduanText="Panduan" 
                    pengaturanText="Pengaturan"
                />
            </Header>
            <div className="container mx-auto">
            <h1 className="text-2xl text-hijau font-semibold w-fit border-b-2 border-hijau mt-10">Panduan</h1>
            </div>
        </div>
    )
}

export default Panduan;