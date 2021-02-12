import React from 'react'

const Button = (props) => {

    const handleDelete = () => {
        props.handleDelete(props.bookId)
    }

    return (
        <button onClick={handleDelete} type="button">{props.buttonName}</button>
    )
}

export default Button;