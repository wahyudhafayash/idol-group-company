"use client";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import CarouselComponent from "../Carousel";
const Home = () => {
  return (
    <main className="m-0 h-full flex flex-col justify-center items-center">
      {/* Hero Section */}
      <section className="w-full h-screen flex justify-center  bg-purple-200 ">
        <div className="flex justify-center items-center px-32 gap-20">
          <div className="w-1/2 flex flex-col  gap-14">
            <Fade triggerOnce={true} damping={0.5} duration={300}>
              <h1 className="text-5xl font-bold text-purple-900">
                Ayo Saksikan{" "}
                <span className="text-5xl font-bold text-purple-500">
                  {" "}
                  Theater
                </span>{" "}
                Kami!
              </h1>
              <p className="text-slate-700 text-justify font-bold">
                MDN48 adalah grup idola asal Indonesia yang merupakan bagian
                dari waralaba AKB48 dari Jepang. Mereka didirikan pada tahun
                2024 di Medan dengan konsep "idola yang bisa bertemu
                langsung".Seperti grup-grup AKB48 lainnya, MDN48 memiliki teater
                di mana anggota-anggota mereka tampil secara rutin. Mereka
                terbagi dalam beberapa tim, seperti Team M, Team D, dan Team N,
                serta memiliki sistem trainee untuk anggota yang sedang dalam
                masa pelatihan sebelum debut resmi.
              </p>
            </Fade>
          </div>

          <div>
            <CarouselComponent />
          </div>
        </div>
      </section>
      {/* Company Overview */}
      <section className="w-full h-full flex justify-center items-center text-purple-100 bg-[#8e24aa] p-16">
        <div className="flex flex-col justify-center items-left py-10 gap-10">
          <Fade cascade triggerOnce={true} direction="left" duration={300}>
            <div>
              <h2 className="text-2xl font-bold ">
                MDN48 adalah sebuah grup idola asal Indonesia yang merupakan
                bagian dari waralaba besar AKB48 dari Jepang. Berikut adalah
                beberapa informasi singkat tentang MDN48:
              </h2>
            </div>

            <div>
              <h2 className="text-xl font-bold">Sejarah Pembentukan:</h2>
              <ul className="list-disc list-inside">
                <li>MDN48 didirikan pada tahun 2024 di Medan, Indonesia.</li>
                <li>
                  Grup ini diinspirasi oleh konsep "idola yang bisa bertemu
                  langsung" yang populer di Jepang dan diadaptasi untuk pasar
                  Indonesia.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold">Manajemen dan Struktur:</h2>
              <ul className="list-disc list-inside">
                <li>MDN48 dikelola oleh PT. Sehat Jaya Sejahtera.</li>
                <li>
                  Mereka beroperasi di bawah lisensi dari AKS Co., Ltd.,
                  perusahaan yang mengelola waralaba AKB48 di Jepang.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold">Sistem dan Kegiatan:</h2>
              <ul className="list-disc list-inside">
                <li>
                  Mirip dengan grup AKB48 lainnya, MDN48 memiliki teater di mana
                  para anggota tampil secara rutin.
                </li>
                <li>
                  Mereka terbagi dalam beberapa tim (seperti Team M, Team D, dan
                  Team N) serta memiliki sistem trainee untuk anggota yang
                  sedang dalam masa pelatihan sebelum debut resmi.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold">Populeritas dan Pengaruh:</h2>
              <ul className="list-disc list-inside">
                <li>
                  MDN48 telah menjadi sangat populer di Indonesia dan memiliki
                  penggemar yang besar di Asia Tenggara.
                </li>
                <li>
                  Mereka merilis berbagai single dan album, mengadakan konser,
                  serta berpartisipasi dalam berbagai acara media untuk
                  memperkuat citra mereka.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold">Dampak Budaya:</h2>
              <ul className="list-disc list-inside">
                <li>
                  Grup ini berperan penting dalam mempromosikan budaya pop
                  Jepang (J-pop) di Indonesia dan membentuk budaya penggemar
                  yang mirip dengan yang ada di Jepang.
                </li>
                <li>
                  Anggota MDN48 juga aktif dalam kegiatan amal dan pengabdian
                  masyarakat, yang menguatkan citra positif mereka di mata
                  publik
                </li>
              </ul>
            </div>
          </Fade>
        </div>
      </section>
      {/* Products or services */}
      <section className="w-full h-full flex justify-center items-center bg-purple-200 ">
        <div className=" flex justify-center items-center font-bold gap-40 py-20 px-[200px]">
          <div className="flex flex-col gap-16 ">
            <Fade cascade triggerOnce={true} direction="left">
              <h1 className="text-5xl text-purple-900 ">
                Temukan Koleksi Merch Kami!
              </h1>
              <p className="text-slate-700 text-justify font-bold">
                Temukan koleksi lengkap merchandise berkualitas tinggi yang kami
                tawarkan untuk memenuhi kebutuhan penggemar dan pencinta produk
                berkualitas. Dari pakaian eksklusif dan aksesori stylish hingga
                barang-barang koleksi unik yang tak ternilai, kami hadirkan
                produk-produk yang memadukan kualitas, keindahan, dan nilai
                untuk setiap penggemar dan kolektor.
              </p>
              <Link
                href="/product"
                className="border-2 border-purple-900 bg-purple-600 text-purple-100 px-5 py-4 w-48 rounded-lg shadow-xl hover:bg-purple-900"
              >
                Lihat Lebih Banyak
              </Link>
            </Fade>
          </div>

          <div className="">
            <Fade triggerOnce={true} direction="right" delay={800}>
              <div className="border-2 rounded-xl border-purple-900 bg-purple-600 shadow-2xl gap-4 w-80 h-96 flex flex-col justify-center items-center p-8 pt-8">
                <Fade triggerOnce={true} damping={0.5} delay={1500}>
                  <img
                    className="w-auto h-auto rounded-xl shadow-2xl "
                    src="https://pbs.twimg.com/media/Fm45E3tagAAV_NO.jpg"
                    alt=""
                  />
                </Fade>
                <h2 className="text-purple-100 ">Fiony BDay T-shirt</h2>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="w-full h-full bg-purple-400 flex justify-center items-center ">
        <div className=" flex flex-col justify-center items-center font-bold py-20">
          <Fade cascade triggerOnce={true} direction="right">
            <div>
              <h1 className="text-4xl text-purple-900">TESTIMONI</h1>
            </div>
            <div className="grid grid-cols-4 pt-10 justify-center items-center gap-10">
              <div className="border-2 rounded-xl border-purple-600 shadow-inner shadow-purple-100 bg-[#8e24aa] flex gap-4 w-80 h-48 p-8 pt-8">
                <div className="flex gap-4 ">
                  <img
                    className="w-10 h-10 rounded-xl shadow-2xl"
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white text-xl">Cristoval</h1>
                  <p className="text-white text-xs">Joined 2024</p>
                  <h1 className="pt-4 text">⭐️⭐️⭐️⭐️⭐️</h1>
                  <p className="text-white">Lorem ipsum dolor sit amet</p>
                </div>
              </div>

              <div className="border-2 rounded-xl border-purple-600 shadow-inner shadow-purple-100 bg-purple-600 flex gap-4 w-80 h-48 p-8 pt-8">
                <div className="flex gap-4 ">
                  <img
                    className="w-10 h-10 rounded-xl shadow-2xl"
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white text-xl">Daffa</h1>
                  <p className="text-white text-xs">Joined 2024</p>
                  <h1 className="pt-4 text">⭐️⭐️⭐️⭐️⭐️</h1>
                  <p className="text-white">Lorem ipsum dolor sit amet</p>
                </div>
              </div>
              <div className="border-2 rounded-xl border-purple-600 shadow-inner shadow-purple-100 bg-purple-600 flex gap-4 w-80 h-48 p-8 pt-8">
                <div className="flex gap-4 ">
                  <img
                    className="w-10 h-10 rounded-xl shadow-2xl"
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white text-xl">Fayass</h1>
                  <p className="text-white text-xs">Joined 2024</p>
                  <h1 className="pt-4 text">⭐️⭐️⭐️⭐️⭐️</h1>
                  <p className="text-white">Lorem ipsum dolor sit amet</p>
                </div>
              </div>
              <div className="border-2 rounded-xl border-purple-600 shadow-inner shadow-purple-100 bg-purple-600 flex gap-4 w-80 h-48 p-8 pt-8">
                <div className="flex gap-4 ">
                  <img
                    className="w-10 h-10 rounded-xl shadow-2xl"
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white text-xl">Gamsky</h1>
                  <p className="text-white text-xs">Joined 2024</p>
                  <h1 className="pt-4 text">⭐️⭐️⭐️⭐️⭐️</h1>
                  <p className="text-white">Lorem ipsum dolor sit amet</p>
                </div>
              </div>
              <div className="border-2 rounded-xl border-purple-600 shadow-inner shadow-purple-100 bg-purple-600 flex gap-4 w-80 h-48 p-8 pt-8">
                <div className="flex gap-4 ">
                  <img
                    className="w-10 h-10 rounded-xl shadow-2xl"
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white text-xl">Dhavi</h1>
                  <p className="text-white text-xs">Joined 2024</p>
                  <h1 className="pt-4 text">⭐️⭐️⭐️⭐️⭐️</h1>
                  <p className="text-white">Lorem ipsum dolor sit amet</p>
                </div>
              </div>
              <div className="border-2 rounded-xl border-purple-600 shadow-inner shadow-purple-100 bg-purple-600 flex gap-4 w-80 h-48 p-8 pt-8">
                <div className="flex gap-4 ">
                  <img
                    className="w-10 h-10 rounded-xl shadow-2xl"
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white text-xl">Lucas</h1>
                  <p className="text-white text-xs">Joined 2024</p>
                  <h1 className="pt-4 text">⭐️⭐️⭐️⭐️⭐️</h1>
                  <p className="text-white">Lorem ipsum dolor sit amet</p>
                </div>
              </div>
              <div className="border-2 rounded-xl border-purple-600 shadow-inner shadow-purple-100 bg-purple-600 flex gap-4 w-80 h-48 p-8 pt-8">
                <div className="flex gap-4 ">
                  <img
                    className="w-10 h-10 rounded-xl shadow-2xl"
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white text-xl">Nia</h1>
                  <p className="text-white text-xs">Joined 2024</p>
                  <h1 className="pt-4 text">⭐️⭐️⭐️⭐️⭐️</h1>
                  <p className="text-white">Lorem ipsum dolor sit amet</p>
                </div>
              </div>
              <div className="border-2 rounded-xl border-purple-600 shadow-inner shadow-purple-100 bg-purple-600 flex gap-4 w-80 h-48 p-8 pt-8">
                <div className="flex gap-4 ">
                  <img
                    className="w-10 h-10 rounded-xl shadow-2xl"
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white text-xl">Ka Bagas</h1>
                  <p className="text-white text-xs">Joined 2024</p>
                  <h1 className="pt-4 text">⭐️⭐️⭐️⭐️⭐️</h1>
                  <p className="text-white">Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </main>
  );
};

export default Home;
