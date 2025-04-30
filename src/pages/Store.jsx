import NavBar from "../components/NavBar";

export default function Store() {
    const response = {
        page: 1,
        results: [
            {
                userId: 1,
                id: 1,
                title: "Weekend Regenerasi",
                body: "Pemaparan materi antara yang diselingi aktvitas-aktivitas team building untuk meningkatkan kerja sama dan rasa kekeluargaan kepengurusan baru KMK Teknik.",
                image: "https://i.ibb.co.com/GQ6YGRX0/IMG-20250429-WA0032.jpg",
            },
            {
                userId: 1,
                id: 2,
                title: "Welcoming Staff",
                body: "Wadah untuk pengurus baru KMK Teknik saling mengenal antar bidang melalui kegiatan team building dan ice breaking.",
                image: "https://i.ibb.co.com/zWXJvG7K/IMG-20250429-WA0035.jpg",
            },
        ],
    };

    return (
        <div id="main-page" className="flex flex-col min-h-screen w-screen bg-jk-black overflow-x-hidden">
            <NavBar />
            <div id="content" className="flex flex-col items-center justify-center h-full w-full p-4 mt-24"> 
                <h1 className="text-4xl font-bold text-jk-text-white mt-4 mb-8">Welcome to B-Shop!</h1>
                <div id="card-container" className="w-full max-w-6xl mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {response.results.map((item) => (
                            <div key={item.id} className="bg-jk-dark-gray rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-xl font-bold text-jk-sky mb-2 line-clamp-2">
                                        {item.title}
                                    </h2>
                                    <p className="text-jk-light-gray line-clamp-3">
                                        {item.body.replace(/\n/g, ' ')}
                                    </p>
                                    <button className="mt-4 px-4 py-2 bg-jk-blue text-jk-text-white rounded hover:bg-jk-dark-blue transition-colors duration-300">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}