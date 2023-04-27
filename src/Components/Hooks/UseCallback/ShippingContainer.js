import { Grid } from '@mui/material';
import { useState } from 'react';
import ProductPage from './ProductPage.js';

function ShippingContainer() {

    const [isDark, setIsDark] = useState(false);

    return (
        <Grid container spacing={3}>

            <Grid item >
                <label>
                    <input
                        type="checkbox"
                        checked={isDark}
                        onChange={e => setIsDark(e.target.checked)}
                    />
                    Dark mode
                </label>
                <hr />
            </Grid>

            <Grid item >
                <ProductPage
                    referrerId="wizard_of_oz"
                    productId={123}
                    theme={isDark ? 'dark' : 'light'}
                />
            </Grid>

        </Grid>
    );
}

export default ShippingContainer;