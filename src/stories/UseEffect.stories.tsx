import React, {useEffect, useMemo, useState} from "react";

export default {
    title:'useEffect demo',
}



export const SimpleExample = () => {
    console.log('SimpleExample')

    const [counter,setCounter] = useState<number>(1)
    const [fake,setFake] = useState<number>(1)

useEffect(() => {
    debugger
    console.log('useEffect every render')
     document.title = counter.toString()
    // api.getUsers().then('')
    //setInterval
    //indexGB
    //document.getElementById
    //document.title = "User";
})
    useEffect(() => {
        debugger
        console.log('useEffect only first render (component DidMount)')
        document.title = counter.toString()

    },[])
    useEffect(() => {
        debugger
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()

    },[counter])

    return<>
        Hello  {counter} {fake}

        <button onClick={() => setFake(fake +1)}>fake+</button>

        <button onClick={() => setCounter(counter +1)}>counter +</button>
    </>
}

