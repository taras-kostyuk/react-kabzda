import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';

import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";
import {UnControlAccordion} from "./UncontroleAccordion";

export default {
    title: 'UnControlAccordion',
    component:UnControlAccordion ,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const callback = action("accordion mode change event fired")
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)


 return   <UnControlAccordion titleValue={"Menu"}    />
}


