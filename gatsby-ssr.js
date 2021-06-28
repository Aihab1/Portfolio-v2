import "./src/styles/global.css"
import React from "react"
import reducer, { initialState } from './src/contextapi/reducer'
import { StateProvider } from './src/contextapi/StateProvider'

export const wrapRootElement = ({ element }) => (
<StateProvider initialState={initialState} reducer={reducer}>
    {element}
</StateProvider>
)