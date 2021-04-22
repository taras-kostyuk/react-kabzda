import {reducer, StateType, TOGGLE_CONSTANT} from "./reducer";

test('reducer should change value to opposite value ',() => {
    //data

    const  state: StateType = {
        collapsed:false
    }

    //action

    const newState = reducer(state,{type:TOGGLE_CONSTANT})

    //expect
    expect(newState.collapsed).toBe(true)

})
test('collapsed should be false ',() => {
    //data

    const  state: StateType = {
        collapsed:true
    }

    //action

    const newState = reducer(state,{type:TOGGLE_CONSTANT})

    //expect
    expect(newState.collapsed).toBe(false)

})
test('reducer should throw error because action type is incorect  ',() => {
    //data

    const  state: StateType = {
        collapsed:true
    }

    //action



    //expect
    expect( ( ) => {
        reducer(state, {type:"FAKE"})
    }).toThrowError()

})