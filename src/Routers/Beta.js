import React from 'react'
import { useParams } from 'react-router-dom'

export const Beta = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            Beta <br />
            {params?.city} <br />
            {params?.name}
        </div>
    )
}
