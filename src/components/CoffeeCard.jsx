import Swal from "sweetalert2";


const CoffeeCard = ({ coffee }) => {
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

    const handleDelete = _id => {
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
                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className=" flex justify-between w-full ">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p> {chef} </p>
                    <p> {supplier} </p>
                    <p> {taste} </p>
                    <p> {category} </p>
                    <p> {details} </p>
                </div>
                <div className="card-actions pr-5 pb-5 justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn ">View</button>
                        <button className="btn">Edit</button>
                        <button onClick={() => handleDelete(_id)} className="btn bg-orange-500 border-none hover:bg-orange-400">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;