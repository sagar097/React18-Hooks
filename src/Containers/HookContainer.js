import React from 'react'
import Cards from '../Components/Cards';
import Grid from '@mui/material/Grid';

function HookContainer(props) {

    let { HookList } = props;

    return (
        <div>
            <Grid container spacing={2} className='card-container'>
                {HookList?.map((name, ind) => {
                    return <Cards title={name} key={ind} />
                })
                }
                
            </Grid>

        </div>
    )
}


HookContainer.defaultProps = {
    HookList: [
        "useState", "useReducer", "useEffect",
        "useLayoutEffect", "useContext", "useMemo",
        "useCallback", "useRef", "useImperativeHandle"
    ]


}

export default HookContainer