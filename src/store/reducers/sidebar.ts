// store/reducers/sidebar.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SidebarState = {
  open: boolean
}

const initialState: SidebarState = { open: false }

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    abrirSidebar: (state) => {
      state.open = true
    },
    fecharSidebar: (state) => {
      state.open = false
    },
    REHYDRATE: (state, action: PayloadAction<SidebarState>) => {
      return action.payload
    }
  }
})

export const { abrirSidebar, fecharSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer
