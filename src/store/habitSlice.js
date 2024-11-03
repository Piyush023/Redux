import { createSlice } from '@reduxjs/toolkit';

const interface Habit{
    id:string,
    name:string,
    frequency:'daily|weekly',
    completedDates: string[],
    createdAt: string
}

const interface HabitState{
    habits: Habit[]
}

const initialData = {
    habits:[]
}
export const habitSlice = createSlice({
    name:'habits'
    initialState:
});
