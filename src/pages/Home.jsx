import NavBar from "../components/NavBar";

export default function Home() {
    const response = {
        page: 1,
        results: [
            {
                store_id: 1,
                id: 1,
                name: "Keyboard",
                price: 500000,
                stock: 10,
                image_url: "https://i.ibb.co.com/TBn3CLPj/keyboard.jpg",
            },
            {
                userId: 1,
                id: 2,
                name: "Mousepad",
                price: 50000,
                stock: 10,
                image_url: "https://i.ibb.co.com/xSNRYmt8/mousepad.png",
            },
            {
                userId: 1,
                id: 3,
                name: "Mouse",
                price: 50000,
                stock: 10,
                image_url: "https://i.ibb.co.com/tp6hgbqm/mouse.jpg",
            },
            {
                userId: 1,
                id: 4,
                name: "Webcam",
                price: 250000,
                stock: 10,
                image_url: "https://i.ibb.co.com/Cs9ZYj5N/webcam.jpg",
            },
            {
                userId: 1,
                id: 5,
                name: "Pen Tablet",
                price: 300000,
                stock: 10,
                image_url: "https://i.ibb.co.com/QjvHW7f0/pentab.jpg",
            },
        ],
    };

    return (
        <div id="main-page" className="flex flex-col min-h-screen w-screen bg-jk-black overflow-x-hidden">
            <NavBar />
            <div id="content" className="flex flex-col items-center justify-center h-full w-full p-4 mt-24"> 
                <h1 className="text-4xl font-bold text-jk-text-white mt-4 mb-8">Welcome to B-Shop!</h1>
                <div id="card-container" className="w-full max-w-6xl mb-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {response.results.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col items-center bg-jk-white rounded-lg shadow-md p-4"
                            >
                                <img
                                    src={item.image_url}
                                    alt={item.name}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h2 className="text-xl font-semibold text-jk-text-black">{item.name}</h2>
                                <p className="text-jk-dark-gray">Price: Rp {item.price.toLocaleString()}</p>
                                <p className="text-jk-dark-gray">Stock: {item.stock}</p>
                                <button className="mt-4 px-4 py-2 bg-jk-sky text-jk-text-white rounded hover:bg-jk-text-black">
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}