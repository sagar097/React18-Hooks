import { useRef, useEffect, useLayoutEffect } from "react";

function Flicker({ color }) {
    const ref = useRef();

    useLayoutEffect(() => {
        const refColor = ref.current.style.color;
        console.log(`${refColor} will always be the same as ${color}`);
        ref.current.style.color = "rgba(255,0,0)";
    }, [color]);

    useEffect(() => {
        
        const refColor = ref.current.style.color;
        console.log(
            `but ${refColor} can be different from ${color} if you play with the DOM`
        );

        setTimeout(()=> ref.current.style.color = color, 1000)

    }, [color]);


    return (
        <div ref={ref} style={{ color: color, fontWeight: 700 }}>
            Hello React Layout hook !
        </div>
    );
}

export default Flicker