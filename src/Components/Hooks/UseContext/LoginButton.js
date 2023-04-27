import { Button } from "@mui/material";
import { useContext } from "react";
import { CurrentUserContext } from "./UserContext";

function LoginButton() {
    const {
        currentUser,
        setCurrentUser
    } = useContext(CurrentUserContext);

    if (currentUser !== null) {
        return <p>
            You logged in as {currentUser.name}.
            <Button
                fullWidth
                variant="contained"
                style={{ margin: '12px', width: '200px' }}
                onClick={() => {
                    setCurrentUser(null)
                }}>
                Log out
            </Button>
        </p>;
    }

    return (
        <Button
            fullWidth
            variant="contained"
            style={{ margin: '12px', width: '200px' }}
            onClick={() => {
                setCurrentUser({ name: 'Sagar' })
            }}>
            Log in as Sagar
        </Button>
    );
}

export default LoginButton