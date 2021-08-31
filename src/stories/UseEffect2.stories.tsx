import React, {useEffect, useMemo, useState} from "react";

export default {
    title: 'useEffect demo 2',
}


export const SimpleExample = () => {
    console.log('SimpleExample')

    const [counter, setCounter] = useState<number>(1)
    const [fake, setFake] = useState<number>(1)

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
        // api.getUsers().then('')
        //setInterval
        //indexGB
        //document.getElementById
        //document.title = "User";
    })


    return <>
        Hello {counter} {fake}

        <button onClick={() => setFake(fake + 1)}>fake+</button>

        <button onClick={() => setCounter(counter + 1)}>counter +</button>
    </>
}


export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')

    const [counter, setCounter] = useState<number>(1)


    useEffect(() => {
        setInterval(() => {
            console.log("setTimeout")
            setCounter(state => state + 1)
        }, 1000)

    }, [])


    return <>
        Hello counter : {counter}

    </>
}

export const HWWatch = () => {
    console.log('SetTimeoutExample')

    const [watchCounter, watchSetCounter] = useState(new Date())


    useEffect(() => {
        const time = new Date()

        watchSetCounter(time)

    }, [new Date()])


    return <>
        Time : {watchCounter.getHours()}:{watchCounter.getMinutes()}:{watchCounter.getSeconds()}

    </>
}
