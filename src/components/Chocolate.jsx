import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Chocolate = ({ chocolate , chocolates , setChocolates }) => {
    console.log(chocolate);
    const { name, photo, country, category, _id } = chocolate
    // console.log(_id);


    const handleDelete = (_id) => {
        // console.log(_id);
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
    
            console.log(_id);
            fetch(`http://localhost:5000/chocolate/${_id}`, {
              method: 'DELETE'
            })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                  const remaining = chocolates.filter(cof => cof._id !== _id)
                  setChocolates(remaining)
                }
              })
          }
        })
      }

    return (
        <div className='table-col chocolate-container'>
            <img src={photo} alt="" />
            <p>{name}</p>
            <p>{country}</p>
            <p>{category}</p>
            <div className='action-btn'>
                <Link to={`/updatechocolate/${_id}`}>
                    <button ><span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 icons-width h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>

                    </span></button>
                </Link>
                <button onClick={() => handleDelete(_id)}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 icons-width h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </span>
                </button>
            </div>
        </div>
    );
};

export default Chocolate;