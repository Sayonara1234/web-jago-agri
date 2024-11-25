import axios from "axios";
import Forgot from "../Button/Forgot";
import Button from "../Button/Index";
import InputForm from "../Input/Index";

const FromLogin = () => {
    const handleLogin = async (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;

        try {
            // Kirim data ke API backend
            const response = await axios.post("http://localhost:3000/signin", {
                username,
                password,
            });

            // Simpan data pengguna di localStorage (misalnya, username atau token)
            localStorage.setItem("user", JSON.stringify(response.data.user));

            // Arahkan pengguna ke dashboard
            window.location.href = "/dashboard";
        } catch (error) {
            // Tangani error login (misalnya, user tidak ditemukan atau password salah)
            if (error.response) {
                alert(error.response.data.message);
            } else {
                console.error("Login error:", error);
            }
        }
    };

    return (
        <form onSubmit={handleLogin} className="flex flex-col">
            <InputForm
                type="text"
                name="username"
                placeholder="Username"
                htmlFor="username"
                id="username"
            />
            <InputForm
                type="password"
                name="password"
                placeholder="Password"
            />
            <Forgot>Forgot Account?</Forgot>
            <div className="flex justify-center w-full mt-4">
                <Button
                    classname="bg-yellow-500 text-white w-1/3 hover:bg-yellow-600"
                    type="submit"
                >
                    Sign In
                </Button>
            </div>
        </form>
    );
};

export default FromLogin;
