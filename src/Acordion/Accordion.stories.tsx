import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";
 const GetCategoryObj = (categoryName:string) => ( {
    table:{
        category:categoryName
    }
 })


export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        color:{
            control:'color',
            table:{
                category:GetCategoryObj("Color")
            }
        },
        onClick:{
            ...GetCategoryObj('Event')
        }
    },
    items:{...GetCategoryObj('main')}
} as Meta

//export const Primary: React.VFC<AccordionPropsType> = (args) => <Accordion {...args}/>

const callback = action("accordion mode change event fired")
 const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

const callbackProps = {
    onClick: callback,
    collapsed: true,
    titleValue: "MENU"
}
export const Collapsed = Template.bind({})
Collapsed.args = {
    ...callbackProps
}

export const Hide = Template.bind({})
Hide.args = {
    ...callbackProps
}

//export const Collapsed = () => <Accordion onClick={callback} collapsed={true} titleValue={"MENU"}/>
//export const Hide = () => <Accordion onClick={callback} collapsed={false} titleValue={"MENU"}/>


export const ModeChanging:Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion {...args} collapsed={value} onClick={() => {setValue(!value)}}/>
}

ModeChanging.args ={
    titleValue:"User"

}

