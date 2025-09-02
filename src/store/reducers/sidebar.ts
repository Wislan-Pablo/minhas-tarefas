// store/reducers/sidebar.ts
import { createSlice } from '@reduxjs/toolkit'

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
    }
  }
})

export const { abrirSidebar, fecharSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer
