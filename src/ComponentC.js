import React, { useContext } from 'react'
import { context } from './ComponentA'

function ComponentC() {
    const value = useContext(context)

    return (
        <div>{value}</div>
    )
}

export default ComponentC