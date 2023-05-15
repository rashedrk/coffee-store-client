

const CoffeeCard = ({ coffee }) => {
    const { name, chef, supplier, taste, category, details, photo } = coffee;
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
                        <button className="btn">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;