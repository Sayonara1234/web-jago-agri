import FromResetUsername from "../components/Elemets/Fragments/FromResetUsername"
import AutsLayouts from "../components/Elemets/Layouts/AutsLayout"

const ResetUsername = () => {
    return (
        <AutsLayouts title="Reset Username" type='resetusername' bg="login">
            <FromResetUsername />
        </AutsLayouts>
    )
}
export default ResetUsername;