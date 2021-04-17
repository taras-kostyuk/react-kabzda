import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Select, SelectPropsType} from "./Select";

const GetCategoryObj = (categoryName:string) => ( {
    table:{
        category:categoryName
    }
})

export default {
    title: 'Select',
    component: Select,
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


const Template: Story<SelectPropsType> = (args) => <Select {...args}/>


export const BaseExampleNoState = Template.bind({})
BaseExampleNoState.args = {
    value:'1',
    items:[{title:'Kiev',value:'1'},
{title:'Moscow',value:'2'},
{title:'Minsk',value:'3'},
{title:'London',value:'4'}],
    onChange:action("value changed")

}


//export const Collapsed = () => <Accordion onClick={callback} collapsed={true} titleValue={"MENU"}/>
//export const Hide = () => <Accordion onClick={callback} collapsed={false} titleValue={"MENU"}/>


export const BaseExample:Story<SelectPropsType> = (args) => {
const [value, setValue] = useState('2')
    return <Select   value={value} onChange={setValue}
                      items={[{title:'Kiev',value:'1'},
                          {title:'Moscow',value:'2'},
                          {title:'Minsk',value:'3'},
                          {title:'London',value:'4'}]} />
}



export const WithOutValue:Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState(null)
    return <Select   value={value} onChange={setValue}
                     items={[{title:'Kiev',value:'1'},
                         {title:'Moscow',value:'2'},
                         {title:'Minsk',value:'3'},
                         {title:'London',value:'4'}]} />
}

