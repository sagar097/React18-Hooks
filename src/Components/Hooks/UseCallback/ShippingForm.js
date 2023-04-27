import { Button, Grid } from '@mui/material';
import { memo, useState } from 'react';

function ShippingForm({ onSubmit }) {

    const [count, setCount] = useState(1);

    console.log('[ARTIFICIALLY SLOW] Rendering <ShippingForm />');
    let startTime = performance.now();
    while (performance.now() - startTime < 500) {
        // Do nothing for 500 ms to emulate extremely slow code
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const orderDetails = {
            ...Object.fromEntries(formData),
            count
        };
        onSubmit(orderDetails);
    }

    return (
        <form onSubmit={handleSubmit}>

            <Grid container spacing={3}>

                <Grid item xs={12} >
                    <p><b>Note: <code>ShippingForm</code> is artificially slowed down!</b></p>
                </Grid>

                <Grid item xs={12}>
                    <label>
                        Number of items:
                        <button type="button" onClick={() => setCount(count - 1)}>–</button>
                        {count}
                        <button type="button" onClick={() => setCount(count + 1)}>+</button>
                    </label>
                </Grid>

                <Grid item xs={12}>
                    <label>
                        Street:
                        <input name="street" />
                    </label>
                </Grid>

                <Grid item xs={12}>
                    <label>
                        City:
                        <input name="city" />
                    </label>
                </Grid>

                <Grid item xs={12}>
                    <label>
                        Postal code:
                        <input name="zipCode" />
                    </label>

                    <Button type="submit">Submit</Button>
                </Grid>

            </Grid>
            
        </form>
    );
};

export default memo(ShippingForm);
