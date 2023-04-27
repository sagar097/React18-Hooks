import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './RenderHooks.css'
import UseStateHook from '../Components/Hooks/UseState/UseStateHook';
import UseReducerHook from '../Components/Hooks/UseReducer/UseReducerHook';
import UseEffectHook from '../Components/Hooks/UseEffect/UseEffectHook';
import UseLayoutHook from '../Components/Hooks/UseLayoutEffect/UseLayoutHook';
import UseContextHook from '../Components/Hooks/UseContext/UseContextHook';
import UseMemoHook from '../Components/Hooks/UseMemo/UseMemoHook';
import UseCallbackHook from '../Components/Hooks/UseCallback/UseCallbackHook';
import UseRefHook from '../Components/Hooks/UseRef/UseRefHook';
import UseImperativeHandleHook from '../Components/Hooks/UseImperativeHandle/UseImperativeHandleHook';

function RenderHooks(props) {

    let { hookName } = useParams();
    const navigate = useNavigate();


    // switch (hookName) {
    //     case 'useState':
    //         renderComponent = <UseStateHook />;
    //     default:
    //         return renderComponent;
    // }

    return (
        <div className='hooks-container'>

            <Button
                variant="contained"
                startIcon={<ArrowBackIcon />}
                onClick={() => navigate('/')}
            >
                Go Back
            </Button>

            <h2>Let's get started!</h2>
           
            {
                
              {

                'useState' :  <UseStateHook/>,
                'useReducer': <UseReducerHook/>,
                'useEffect' : <UseEffectHook/>,
                'useLayoutEffect': <UseLayoutHook/>,
                'useContext' : <UseContextHook/>,
                'useMemo' : <UseMemoHook/>,
                'useCallback' : <UseCallbackHook/>,
                'useRef' : <UseRefHook/>   ,
                'useImperativeHandle' : <UseImperativeHandleHook/>

              }[hookName]

            }

        </div>
    )
}

export default RenderHooks