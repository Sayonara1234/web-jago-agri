import Button from "../Button/Index"
import InputForm from "../Input/Index";

const FromResetUsername = () => {
    return (
        <form className="flex flex-col">
        <InputForm
            type="email"
            name="email"
            placeholder="New Email"
            htmlFor="email"
            id="email"
        />

        <InputForm
            type="text"
            name="text"
            placeholder="Confirm New Username"
        />
        <div className="flex justify-center w-full mt-20">
            <Button classname="bg-yellow-500 text-white w-1/3 hover:bg-yellow-600">
                Confirm
            </Button>
        </div>
    </form>

    )
}

export default FromResetUsername;