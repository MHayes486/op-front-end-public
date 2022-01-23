import {createSlice} from '@reduxjs/toolkit';

const ageCheckSlice = createSlice({
    name: 'ageCheck',
    initialState: {ageIsValid: false},
    reducers:{
        validate(state){
            state.ageIsValid = true;
        }
    }
});

export const ageCheckActions = ageCheckSlice.actions;

export default ageCheckSlice;
