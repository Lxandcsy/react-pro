import { createSlice } from '@reduxjs/toolkit'

const tabSlice = createSlice({
    name: 'tab', // 命名空间
    // 状态
    initialState: {
        isCollapse: false
    },
    // 修改状态的方法
    reducers: {
        collapseChange: state => {
            state.isCollapse = !state.isCollapse
        }
    }
})

export const { collapseChange } = tabSlice.actions
export default tabSlice.reducer