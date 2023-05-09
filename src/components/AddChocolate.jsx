import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddChocolate = () => {


    const handleAddChocolate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const photo = form.photo.value
        const newChocolate = { name, country, category,photo }
        console.log(newChocolate);
        //send data to the server
        fetch('http://localhost:5000/chocolate',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newChocolate)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title : 'Success!',
                    text : 'Coffee Added Successfully',
                    icon : 'success',
                    confirmButtonText : 'Cool'
                })
            }
        })
    }

    return (
        <div className='add-container'>
            <Link to="/">
                <div className='back-home-btn'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 icons-width h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>

                    </span>
                    <h3>All Chocolate</h3>
                </div>
            </Link>
            <hr />
            <div className='add-form'>
                <div className='text-center'>
                    <h2>New Chocolates</h2>
                    <p>Use the below form to create a new product</p>
                </div>

                <form onSubmit={handleAddChocolate} className='form'>
                    <label htmlFor="name">
                        <p>Name</p>
                        <input placeholder='Hot Pink Chocolate' type="text" name="name" id="name" required />
                    </label>
                    <label htmlFor="country">
                        <p>country</p>
                        <input placeholder='Enter Country Name' type="text" name="country" id="country" required />
                    </label>
                    <label htmlFor="PhotoUrl">
                        <p>Photo Url</p>
                        <input placeholder='Enter PhotoUrl ' type="text" name="photo" id="PhotoUrl" required />
                    </label>
                    <label htmlFor="Category">
                        <p>Category</p>
                        {/* <input placeholder='Enter Category Name' type="text" name="Category" id="Category" required /> */}
                        <select id="category" name="category">
                            <option value="Basic">Basic</option>
                            <option value="Standard">Standard</option>
                            <option value="Premium">Premium</option>
                        </select>
                    </label>
                    <input className='submit' type="submit" value="Save" />
                </form>
            </div>
        </div>
    );
};

export default AddChocolate;