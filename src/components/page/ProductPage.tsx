"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

const ProductPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <main className="w-full h-full flex justify-center items-center bg-purple-200">
      <div className="max-w-7xl w-full mx-auto flex flex-col justify-center items-center font-bold py-20 px-8 md:px-16 lg:px-24">
        <h1
          data-aos="zoom-out"
          data-aos-once
          className="text-5xl pb-10 text-purple-900"
        >
          Lihat Produk Kami
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          <div
            data-aos="fade-right"
            data-aos-once
            className="border-2 rounded-xl border-purple-900 bg-purple-600 gap-4 flex flex-col justify-center items-center p-4 md:p-8"
          >
            <div className="w-52 h-52 md:w-80 md:h-80 relative">
              <Image
                src="/1.png"
                alt="merch1"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <h2 className="text-purple-100">Landyard</h2>
            <button
              onClick={() => alert("Coming Soon")}
              className="border-2 border-purple-900 bg-purple-200 text-purple-900 px-4 py-2 rounded-lg shadow-xl mt-4"
            >
              BELI SEKARANG
            </button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-once
            className="border-2 rounded-xl border-purple-900 bg-purple-600 gap-4 flex flex-col justify-center items-center p-4 md:p-8"
          >
            <div className="w-52 h-52 md:w-80 md:h-80 relative">
              <Image
                src="/3.png"
                alt="merch1"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <h2 className="text-purple-100">MDN48 T-shirt</h2>
            <button
              onClick={() => alert("Coming Soon")}
              className="border-2 border-purple-900 bg-purple-200 text-purple-900 px-4 py-2 rounded-lg shadow-xl mt-4"
            >
              BELI SEKARANG
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-once
            className="border-2 rounded-xl border-purple-900 bg-purple-600 gap-4 flex flex-col justify-center items-center p-4 md:p-8"
          >
            <div className="w-52 h-52 md:w-80 md:h-80 relative">
              <Image
                src="/2.png"
                alt="merch1"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <h2 className="text-purple-100">LightStick</h2>
            <button
              onClick={() => alert("Coming Soon")}
              className="border-2 border-purple-900 bg-purple-200 text-purple-900 px-4 py-2 rounded-lg shadow-xl mt-4"
            >
              BELI SEKARANG
            </button>
          </div>
          <div
            data-aos="fade-right"
            data-aos-once
            className="border-2 rounded-xl border-purple-900 bg-purple-600 gap-4 flex flex-col justify-center items-center p-4 md:p-8"
          >
            <div className="w-52 h-52 md:w-80 md:h-80 relative">
              <Image
                src="/1.png"
                alt="merch1"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <h2 className="text-purple-100">Landyard</h2>
            <button
              onClick={() => alert("Coming Soon")}
              className="border-2 border-purple-900 bg-purple-200 text-purple-900 px-4 py-2 rounded-lg shadow-xl mt-4"
            >
              BELI SEKARANG
            </button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-once
            className="border-2 rounded-xl border-purple-900 bg-purple-600 gap-4 flex flex-col justify-center items-center p-4 md:p-8"
          >
            <div className="w-52 h-52 md:w-80 md:h-80 relative">
              <Image
                src="/3.png"
                alt="merch1"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <h2 className="text-purple-100">MDN48 T-shirt</h2>
            <button
              onClick={() => alert("Coming Soon")}
              className="border-2 border-purple-900 bg-purple-200 text-purple-900 px-4 py-2 rounded-lg shadow-xl mt-4"
            >
              BELI SEKARANG
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-once
            className="border-2 rounded-xl border-purple-900 bg-purple-600 gap-4 flex flex-col justify-center items-center p-4 md:p-8"
          >
            <div className="w-52 h-52 md:w-80 md:h-80 relative">
              <Image
                src="/2.png"
                alt="merch1"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <h2 className="text-purple-100">LightStick</h2>
            <button
              onClick={() => alert("Coming Soon")}
              className="border-2 border-purple-900 bg-purple-200 text-purple-900 px-4 py-2 rounded-lg shadow-xl mt-4"
            >
              BELI SEKARANG
            </button>
          </div>
          <div
            data-aos="fade-right"
            data-aos-once
            className="border-2 rounded-xl border-purple-900 bg-purple-600 gap-4 flex flex-col justify-center items-center p-4 md:p-8"
          >
            <div className="w-52 h-52 md:w-80 md:h-80 relative">
              <Image
                src="/1.png"
                alt="merch1"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <h2 className="text-purple-100">Landyard</h2>
            <button
              onClick={() => alert("Coming Soon")}
              className="border-2 border-purple-900 bg-purple-200 text-purple-900 px-4 py-2 rounded-lg shadow-xl mt-4"
            >
              BELI SEKARANG
            </button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-once
            className="border-2 rounded-xl border-purple-900 bg-purple-600 gap-4 flex flex-col justify-center items-center p-4 md:p-8"
          >
            <div className="w-52 h-52 md:w-80 md:h-80 relative">
              <Image
                src="/3.png"
                alt="merch1"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <h2 className="text-purple-100">MDN48 T-shirt</h2>
            <button
              onClick={() => alert("Coming Soon")}
              className="border-2 border-purple-900 bg-purple-200 text-purple-900 px-4 py-2 rounded-lg shadow-xl mt-4"
            >
              BELI SEKARANG
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-once
            className="border-2 rounded-xl border-purple-900 bg-purple-600 gap-4 flex flex-col justify-center items-center p-4 md:p-8"
          >
            <div className="w-52 h-52 md:w-80 md:h-80 relative">
              <Image
                src="/2.png"
                alt="merch1"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <h2 className="text-purple-100">LightStick</h2>
            <button
              onClick={() => alert("Coming Soon")}
              className="border-2 border-purple-900 bg-purple-200 text-purple-900 px-4 py-2 rounded-lg shadow-xl mt-4"
            >
              BELI SEKARANG
            </button>
          </div>
          <div
            data-aos="fade-right"
            data-aos-once
            className="border-2 rounded-xl border-purple-900 bg-purple-600 gap-4 flex flex-col justify-center items-center p-4 md:p-8"
          >
            <div className="w-52 h-52 md:w-80 md:h-80 relative">
              <Image
                src="/1.png"
                alt="merch1"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <h2 className="text-purple-100">Landyard</h2>
            <button
              onClick={() => alert("Coming Soon")}
              className="border-2 border-purple-900 bg-purple-200 text-purple-900 px-4 py-2 rounded-lg shadow-xl mt-4"
            >
              BELI SEKARANG
            </button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-once
            className="border-2 rounded-xl border-purple-900 bg-purple-600 gap-4 flex flex-col justify-center items-center p-4 md:p-8"
          >
            <div className="w-52 h-52 md:w-80 md:h-80 relative">
              <Image
                src="/3.png"
                alt="merch1"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <h2 className="text-purple-100">MDN48 T-shirt</h2>
            <button
              onClick={() => alert("Coming Soon")}
              className="border-2 border-purple-900 bg-purple-200 text-purple-900 px-4 py-2 rounded-lg shadow-xl mt-4"
            >
              BELI SEKARANG
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-once
            className="border-2 rounded-xl border-purple-900 bg-purple-600 gap-4 flex flex-col justify-center items-center p-4 md:p-8"
          >
            <div className="w-52 h-52 md:w-80 md:h-80 relative">
              <Image
                src="/2.png"
                alt="merch1"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <h2 className="text-purple-100">LightStick</h2>
            <button
              onClick={() => alert("Coming Soon")}
              className="border-2 border-purple-900 bg-purple-200 text-purple-900 px-4 py-2 rounded-lg shadow-xl mt-4"
            >
              BELI SEKARANG
            </button>
          </div>
          <div
            data-aos="fade-right"
            data-aos-once
            className="border-2 rounded-xl border-purple-900 bg-purple-600 gap-4 flex flex-col justify-center items-center p-4 md:p-8"
          >
            <div className="w-52 h-52 md:w-80 md:h-80 relative">
              <Image
                src="/1.png"
                alt="merch1"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <h2 className="text-purple-100">Landyard</h2>
            <button
              onClick={() => alert("Coming Soon")}
              className="border-2 border-purple-900 bg-purple-200 text-purple-900 px-4 py-2 rounded-lg shadow-xl mt-4"
            >
              BELI SEKARANG
            </button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-once
            className="border-2 rounded-xl border-purple-900 bg-purple-600 gap-4 flex flex-col justify-center items-center p-4 md:p-8"
          >
            <div className="w-52 h-52 md:w-80 md:h-80 relative">
              <Image
                src="/3.png"
                alt="merch1"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <h2 className="text-purple-100">MDN48 T-shirt</h2>
            <button
              onClick={() => alert("Coming Soon")}
              className="border-2 border-purple-900 bg-purple-200 text-purple-900 px-4 py-2 rounded-lg shadow-xl mt-4"
            >
              BELI SEKARANG
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-once
            className="border-2 rounded-xl border-purple-900 bg-purple-600 gap-4 flex flex-col justify-center items-center p-4 md:p-8"
          >
            <div className="w-52 h-52 md:w-80 md:h-80 relative">
              <Image
                src="/2.png"
                alt="merch1"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <h2 className="text-purple-100">LightStick</h2>
            <button
              onClick={() => alert("Coming Soon")}
              className="border-2 border-purple-900 bg-purple-200 text-purple-900 px-4 py-2 rounded-lg shadow-xl mt-4"
            >
              BELI SEKARANG
            </button>
          </div>
          <div
            data-aos="fade-right"
            data-aos-once
            className="border-2 rounded-xl border-purple-900 bg-purple-600 gap-4 flex flex-col justify-center items-center p-4 md:p-8"
          >
            <div className="w-52 h-52 md:w-80 md:h-80 relative">
              <Image
                src="/1.png"
                alt="merch1"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <h2 className="text-purple-100">Landyard</h2>
            <button
              onClick={() => alert("Coming Soon")}
              className="border-2 border-purple-900 bg-purple-200 text-purple-900 px-4 py-2 rounded-lg shadow-xl mt-4"
            >
              BELI SEKARANG
            </button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-once
            className="border-2 rounded-xl border-purple-900 bg-purple-600 gap-4 flex flex-col justify-center items-center p-4 md:p-8"
          >
            <div className="w-52 h-52 md:w-80 md:h-80 relative">
              <Image
                src="/3.png"
                alt="merch1"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <h2 className="text-purple-100">MDN48 T-shirt</h2>
            <button
              onClick={() => alert("Coming Soon")}
              className="border-2 border-purple-900 bg-purple-200 text-purple-900 px-4 py-2 rounded-lg shadow-xl mt-4"
            >
              BELI SEKARANG
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-once
            className="border-2 rounded-xl border-purple-900 bg-purple-600 gap-4 flex flex-col justify-center items-center p-4 md:p-8"
          >
            <div className="w-52 h-52 md:w-80 md:h-80 relative">
              <Image
                src="/2.png"
                alt="merch1"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <h2 className="text-purple-100">LightStick</h2>
            <button
              onClick={() => alert("Coming Soon")}
              className="border-2 border-purple-900 bg-purple-200 text-purple-900 px-4 py-2 rounded-lg shadow-xl mt-4"
            >
              BELI SEKARANG
            </button>
          </div>
          <div
            data-aos="fade-right"
            data-aos-once
            className="border-2 rounded-xl border-purple-900 bg-purple-600 gap-4 flex flex-col justify-center items-center p-4 md:p-8"
          >
            <div className="w-52 h-52 md:w-80 md:h-80 relative">
              <Image
                src="/1.png"
                alt="merch1"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <h2 className="text-purple-100">Landyard</h2>
            <button
              onClick={() => alert("Coming Soon")}
              className="border-2 border-purple-900 bg-purple-200 text-purple-900 px-4 py-2 rounded-lg shadow-xl mt-4"
            >
              BELI SEKARANG
            </button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-once
            className="border-2 rounded-xl border-purple-900 bg-purple-600 gap-4 flex flex-col justify-center items-center p-4 md:p-8"
          >
            <div className="w-52 h-52 md:w-80 md:h-80 relative">
              <Image
                src="/3.png"
                alt="merch1"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <h2 className="text-purple-100">MDN48 T-shirt</h2>
            <button
              onClick={() => alert("Coming Soon")}
              className="border-2 border-purple-900 bg-purple-200 text-purple-900 px-4 py-2 rounded-lg shadow-xl mt-4"
            >
              BELI SEKARANG
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-once
            className="border-2 rounded-xl border-purple-900 bg-purple-600 gap-4 flex flex-col justify-center items-center p-4 md:p-8"
          >
            <div className="w-52 h-52 md:w-80 md:h-80 relative">
              <Image
                src="/2.png"
                alt="merch1"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <h2 className="text-purple-100">LightStick</h2>
            <button
              onClick={() => alert("Coming Soon")}
              className="border-2 border-purple-900 bg-purple-200 text-purple-900 px-4 py-2 rounded-lg shadow-xl mt-4"
            >
              BELI SEKARANG
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
