import Navigasi from "./Navigasi";

const Header = (props) => {
    const {children,} = props;
    return (
        <div className="flex justify-between items-center text-black pl-10 bg-white h-20 sticky top-0  z-20">
            <img src="/logo.svg" alt="logo jagoagro" width={"80px"} />
            {children}
        </div>
    )
}

export default Header;
