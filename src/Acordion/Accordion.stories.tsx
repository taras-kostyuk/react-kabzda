import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';

import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component:Accordion ,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const callback = action("accordion mode change event fired")
export const Collapsed = () => <Accordion onClick={callback} collapsed={true} titleValue={"MENU"}/>
export const Hide = () => <Accordion onClick={callback} collapsed={false} titleValue={"MENU"}/>


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)


 return   <Accordion titleValue={"Menu"}  collapsed={value} onClick={() => {setValue(!value)}} />
}


