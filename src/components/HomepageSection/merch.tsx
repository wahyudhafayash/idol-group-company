"use client";

import Link from "next/link";
import Image from "next/image";

const Merch = () => {
  return (
    <section className="w-full h-full flex justify-center items-center bg-purple-200 ">
      <div className="flex flex-col md:flex-row lg:flex flex-row justify-center items-center font-bold gap-40 py-20 px-[200px]">
        <div className="flex flex-col gap-16 ">
          <h1
            // data-aos="fade-right"
            // data-aos-once="true"
            className="text-5xl text-purple-900 "
          >
            Temukan Koleksi{" "}
            <span className="text-5xl text-purple-600 pb-10 lg:pb-0">
              Merch
            </span>{" "}
            Kami!
          </h1>
          <p
            // data-aos="fade-right"
            // data-aos-once="true"
            className="text-slate-700 text-justify font-bold"
          >
            Temukan koleksi lengkap merchandise berkualitas tinggi yang kami
            tawarkan untuk memenuhi kebutuhan penggemar dan pencinta produk
            berkualitas. Dari pakaian eksklusif dan aksesori stylish hingga
            barang-barang koleksi unik yang tak ternilai, kami hadirkan
            produk-produk yang memadukan kualitas, keindahan, dan nilai untuk
            setiap penggemar dan kolektor.
          </p>
          <Link
            // data-aos="fade-right"
            // data-aos-once="true"
            href="/product"
            className="border-2 border-purple-900 bg-purple-600 text-purple-100 px-5 py-4 w-48 rounded-lg shadow-xl hover:bg-purple-900"
          >
            Lihat Lebih Banyak
          </Link>
        </div>{" "}
        <div className="">
          <div
            // data-aos="fade-left"
            // data-aos-delay="500"
            // data-aos-once="true"
            className="border-2 rounded-xl border-purple-900 bg-purple-600 shadow-2xl gap-4 w-80 h-96 flex flex-col justify-center items-center p-8 pt-8"
          >
            <Image
              src="/2.png"
              alt="merch1"
              objectFit="cover"
              className="rounded-xl"
              width={400}
              height={400}
            />
            <h2 className="text-purple-100 ">Fiony BDay T-shirt</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Merch;
