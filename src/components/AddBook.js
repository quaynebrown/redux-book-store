import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addThisBook, updateThisBook } from "../actions";


const AddBook = (props) => {
   
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const dispatch = useDispatch();

    useEffect(() => { 
        // if 'update book' is clicked
            // take the value from each property and assign them to there corresponding state
        // else if 'Add Book' is clicked
            // set initial state
        const { name, price, category, description, image } = props.book;
        setName(name);
        setPrice(price);
        setCategory(category);
        setDescription(description);
        setImage(image)
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(props.action == 'Add Book'){
            dispatch(addThisBook({
                name,
                price,
                category,
                description,
                image
            }))
        } else if (props.action == 'Update Book'){
            dispatch(updateThisBook([{
                name,
                price,
                category,
                description,
                image
            }, props.bookIndex]))
        }
    }

    const handlePriceChange = (e) => {
        if(e.target.value !== ''){
            setPrice(parseInt(e.target.value))
        }else{
            setPrice(0)
        }
    }

    return (
        <div className="form-container">
            <h2>{props.action}</h2>
            <form>
                <h3>Enter book details</h3>
                <div className="form-elements">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={e => setName(e.target.value)} value={name}/>

                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" 
                    onChange={ handlePriceChange } value={price}/>

                    <label htmlFor="category">Category</label>
                    <input type="text" name="category" id="category" onChange={e => setCategory(e.target.value)} value={category}/>

                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" onChange={e => setDescription(e.target.value)} value={description}/>
                </div>

                <button onClick={handleSubmit} type="submit">{props.action}</button>
            </form>
        </div>
    )
}

export default AddBook;
