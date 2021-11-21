import React from 'react'

const UserAPIContext = React.createContext({})

export const UserAPIProvider = UserAPIContext.Provider
export const UserAPIConsumer = UserAPIContext.Consumer
export default UserAPIContext