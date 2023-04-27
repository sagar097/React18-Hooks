import React from 'react'
import { Grid } from "@mui/material";
import ButtonWithTooltip from './ButtonWithTooltip.js';
import './Layout.css'

function TooltipRenderer() {

    return (
        <Grid container className="layout-container">
            <Grid item md={12} xs={12}>

                <ButtonWithTooltip
                    tooltipContent={
                        <div>
                            This tooltip does not fit above the button.
                            <br />
                            This is why it's displayed below instead!
                        </div>
                    }
                >
                    Hover over me (tooltip above)
                </ButtonWithTooltip>

            </Grid>

            <Grid item md={12} xs={12}>

                <div style={{ height: 50 }} />
                <ButtonWithTooltip
                    tooltipContent={
                        <div>This tooltip fits above the button</div>
                    }
                >
                    Hover over me (tooltip below)
                </ButtonWithTooltip>

            </Grid>


            <Grid item md={12} xs={12}>

                <div style={{ height: 50 }} />


                <ButtonWithTooltip
                    tooltipContent={
                        <div>This tooltip fits above the button</div>
                    }
                >
                    Hover over me (tooltip below)
                </ButtonWithTooltip>


            </Grid>

        </Grid>
    )
}

export default TooltipRenderer