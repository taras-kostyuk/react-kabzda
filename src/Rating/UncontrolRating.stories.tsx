import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';

import {Rating, RatingValueType} from "./Rating";
import {UnControlRating} from "./UnControledRating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UnControlRating  ',
    component: UnControlRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;
const callback = action("rating changed inside component")
export const EmptyRating = () => <UnControlRating defaultValue={0} onChange={callback}/>
export const Rating1 = () => <UnControlRating defaultValue={1} onChange={callback}/>
export const Rating2 = () => <UnControlRating defaultValue={2} onChange={callback}/>
export const Rating3 = () => <UnControlRating defaultValue={3} onChange={callback}/>
export const Rating4 = () => <UnControlRating defaultValue={4} onChange={callback}/>
export const Rating5 = () => <UnControlRating defaultValue={5} onChange={callback}/>


