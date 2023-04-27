import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function NotFoundPage() {
    const navigate = useNavigate();


    return (
        <div>

            <Button
                variant="contained"
                startIcon={<ArrowBackIcon />}
                onClick={()=>navigate('/')}
            >
                Go Back
            </Button>

            Not Found

        </div>
    )
}

export default NotFoundPage