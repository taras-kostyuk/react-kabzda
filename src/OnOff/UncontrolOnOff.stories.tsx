import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';

import {action} from "@storybook/addon-actions";
import {UnControlledOnOff} from "./UncontroledOnOff";

export default {
    title: 'UnControlledOnOff  ',
    component: UnControlledOnOff,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const callback = action("on or off")

export const OnMode = () => <UnControlledOnOff defaultOn={true}  onChange={callback}/>
export const OffMode = () => <UnControlledOnOff defaultOn={false}  onChange={callback}/>


