import React from 'react'

function Button({alertText}) {
    return (
        <button onClick={(() => {
            return (
                alert(alertText)
            )
        })}>Click here!</button>
    )
}

export default Button