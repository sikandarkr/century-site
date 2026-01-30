import Image from "next/image";

export default function Welcome() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
      <Image
        src="/seeds.png"
        width={500}
        height={400}
        alt="Seeds"
        className="rounded-xl"
      />

      <div>
        <h2 className="text-3xl font-bold mb-4">
          Welcome to Century Hybrid Seeds
        </h2>

        <p className="text-gray-600 mb-6">
          Century Hybrid Seeds provides high quality hybrid vegetable seeds to farmers across India.
          Our mission is to improve crop yield through reliable genetics and field-tested varieties.
        </p>

        <button className="bg-green-700 text-white px-6 py-3 rounded-md">
          Learn More
        </button>
      </div>
    </section>
  );
}
