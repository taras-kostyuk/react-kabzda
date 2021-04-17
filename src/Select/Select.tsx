import React, {KeyboardEvent, useEffect, useState} from 'react';
import styles from './Select.module.css'

type  ItemType = {
    title: string
    value?: any
}
export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]


}


export function Select(props: SelectPropsType) {


    const toggleItems = () => setActive(!active)
    const [active, setActive] = useState(false)
    const [hoveredElementValue, SetHoveredElementValue] = useState(props.value)
    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    useEffect(() => {
        SetHoveredElementValue(props.value)
    }, [props.value])
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const prettendentElemen = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (prettendentElemen) {
                        props.onChange(prettendentElemen.value)
                        return
                    }

                }
            }
            if(!selectedItem){
                props.onChange(props.items[0].value)
            }

        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }

    }

    return (
        <>

            <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>

                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active &&
                <div className={styles.items}>
                    {props.items.map(i => <div
                        onMouseEnter={() => {
                            SetHoveredElementValue(i.value)
                        }}
                        className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                        key={i.value}
                        onClick={() => {
                            onItemClick(i.value)
                        }}
                    >{i.title}


                    </div>)}
                </div>
                }
            </div>
        </>)
}

