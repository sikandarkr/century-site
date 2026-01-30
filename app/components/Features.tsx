import Image from "next/image";

export default function Features() {
    return (
        <section className="bg-gray-50 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">

                <div>
                    <p className="text-3xl">🌱</p>
                    <h3 className="font-semibold mt-2">High Germination</h3>
                </div>

                <div>
                    <p className="text-3xl">🛡️</p>
                    <h3 className="font-semibold mt-2">Field Tested</h3>
                </div>

                <div>
                    <p className="text-3xl">👨‍🌾</p>
                    <h3 className="font-semibold mt-2">Trusted Farmers</h3>
                </div>

                <div>
                    <p className="text-3xl">💰</p>
                    <h3 className="font-semibold mt-2">Affordable Pricing</h3>
                </div>

            </div>
        </section>
    );
}
