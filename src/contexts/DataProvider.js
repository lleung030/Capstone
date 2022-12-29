import { useState, useEffect, createContext, useContext } from 'react'

export const DataContext = createContext()

export const DataProvider = function(props) {

async function searchArtists(){
    const response = await fetch(`https://api.spotify.com/v1/search`)
    const data = await response.json()
    return data
}

const value = {
    searchArtists
}

return (
    <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
    
}