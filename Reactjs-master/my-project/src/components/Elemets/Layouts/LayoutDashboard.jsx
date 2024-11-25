const LayoutDashboard = (props) => {
    const { children } = props;
    return (
        <div className="flex justify-center items-center h-screen relative w-full bg-slate-100 gap-10">
            <div className="bg-[url('./logo.svg')] h-96 w-full max-w-xs bg-cover bg-center rounded-md"></div>
            <div className="max-w-md w-[698px] bg-hijau px-10 py-10 rounded-xl" >
                {children}
            </div>
        </div>
    )
}

export default LayoutDashboard;