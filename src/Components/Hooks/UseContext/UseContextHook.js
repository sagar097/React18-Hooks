import { useState } from 'react';
import LoginButton from './LoginButton';
import { CurrentUserContext } from './UserContext';

export default function UseContextHook() {

    const [currentUser, setCurrentUser] = useState(null);


    return (
        <div className='layout-container'>

            <CurrentUserContext.Provider
                value={{
                    currentUser,
                    setCurrentUser
                }}
            >
                <Form />
            </CurrentUserContext.Provider>

        </div>

    );
}

function Form({ children }) {
    return (
        <Panel title="Welcome">
            <LoginButton />
        </Panel>
    );
}

function Panel({ title, children }) {
    return (
        <section className="panel">
            <h1>{title}</h1>
            {children}
        </section>
    )
}
