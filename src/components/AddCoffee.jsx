import Swal from 'sweetalert2';

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, chef, supplier, taste, category, details, photo };
        console.log(newCoffee);
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="bg-[#F4F3F0] p-4">
            <h2 className="font-bold text-2xl mb-2">Add coffee here</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form name & chef row */}
                <div className="md:flex mb-4 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:ms-4 md:w-1/2">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Coffee chef" name="chef" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier & taste row */}
                <div className="md:flex mb-4 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Enter coffee Supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:ms-4 md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Coffee taste" name="taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category & details row */}
                <div className="md:flex mb-4 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Enter coffee Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:ms-4 md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Coffee details" name="details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form photo row */}
                <div className=" mb-4 ">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Enter coffee photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form button row */}
                <input type="submit" value="Add Coffee" className="btn btn-block" />
            </form >
        </div >
    );
};

export default AddCoffee;