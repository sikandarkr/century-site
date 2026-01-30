import Image from "next/image";

export default function Products() {
    return (
        <section className="py-16 max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                {[
                    { name: "Tomato Hybrid", img: "/chs-maze.png" },
                    { name: "Yard Long Bean", img: "/bodi.png" },
                    { name: "Bhindi Seeds", img: "/bhindi.png" },
                    { name: "Paddy Seeds", img: "/tomato.png" },
                    { name: "Paddy Seeds", img: "/watermelon.png" },
                ].map((product, i) => (
                    <div
                        key={i}
                        className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                    >
                        <Image
                            src={product.img}
                            alt={product.name}
                            width={400}
                            height={400}
                            className="w-full h-60 object-contain bg-white p-4"
                        />

                        <div className="p-4 text-center">
                            <h3 className="font-semibold">{product.name}</h3>

                            <button className="mt-3 bg-green-700 text-white px-4 py-2 rounded">
                                View Product
                            </button>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
