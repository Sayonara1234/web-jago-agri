import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError
    return(
        <div className="flex justify-center items-center flex-col h-screen">
            <h1 className="text-hijau font-bold text-5xl mb-5">Opps 404</h1>
            <p className="text-slate-600 text-xl">Sorry, an unexpected error has ocured</p>
            <p>{error.statusText || error.message}</p>
        </div>
    ) 
}
export default ErrorPage