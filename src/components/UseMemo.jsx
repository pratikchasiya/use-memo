import React, { Fragment, useMemo, useState } from 'react'

/* USE MEMO AND USE EFFECT A BNNE SAME J CHE ONLY DIFFERENCE A CHE K USE EFFECT A FUNCTION NI RITE J USE THAY JYRE USE MEMO NE APRE VARIABLE NI RITE  USE THAY */



const UseMemo = () => {
    const [counter, setcounter] = useState(1)

    // const memoFunction = ()=>{
    //     console.log("pratik")
    //     return '500'
    // }

    /* MEMO NE EK VARIABLE TARIKE USE KARVANO FUNCTION NI RITE NAI */
    const memoFunction = useMemo(() =>{

        console.log("pratik")
        return counter
    }
   
    , [counter])
    /* JO APRE DEPENDENCY MA KAI LAKSU NAI AND BLANK RAKHSU TO A BIJI VAR RENDER NAI THSE AND JO APRE DEPENDENCY MA KOI NE JYRE PN UPDATE KARAVU HOI AND A APRE NE DAR VAKHTE JOITU HOI TYRE APRE ANE DEPENDENCY MA LAKHVU PDE TO A DAR VAKHTE UPDATE KRSU TYRE A RENDER THSE */

  return (
    <Fragment>
        <div>UseMemo</div>
        <h3>Counter : {counter}</h3>
        <h4>{memoFunction}</h4>
        <button onClick={() => setcounter(counter + 1)}>Click</button>
    </Fragment>
  )
}

export default UseMemo