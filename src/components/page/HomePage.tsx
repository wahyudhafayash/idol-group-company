"use client";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import CarouselComponent from "../Carousel";
const Home = () => {
  return (
    <main className="m-0 h-full flex flex-col justify-center items-center">
      {/* Hero Section */}
      <section className="w-full h-[80vh] flex justify-center  ">
        <div className="flex justify-center items-center px-32 gap-20">
          <div className="w-1/2 flex flex-col  gap-14">
            <Fade triggerOnce={true} damping={0.5}>
              <h1 className="text-5xl font-bold">
                Saksikan Theater Tiap Minggunya
              </h1>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                quam iste delectus laborum provident similique, blanditiis
                officia numquam maiores, accusamus sunt cumque praesentium!
                Provident ipsam doloremque eum fugit voluptas quos?
              </p>
              <Link
                className="border w-48 border-purple-900 bg-purple-600 text-purple-100 text-center px-5 py-4 rounded-lg shadow-xl hover:bg-purple-900"
                href="/"
              >
                Beli sekarang
              </Link>
            </Fade>
          </div>

          <div>
            <CarouselComponent />
          </div>
        </div>
      </section>
      {/* Company Overview */}
      <section className="w-full h-full flex justify-center items-center ">
        <div className="flex flex-col justify-center items-center"></div>
      </section>
      {/* Products or services */}
      <section className="w-full h-screen flex justify-center items-center ">
        <div className=" flex justify-center items-center font-bold gap-40 py-20">
          <div className="flex flex-col gap-10 w-1/2">
            <Fade triggerOnce={true} direction="left">
              <h1 className="text-5xl text-purple-900">Lihat Merch MDN48</h1>
              <p>
                Kami menyediakan merchandise MDN48 berupa bday t-shirt, light
                stick, cd, dan lainnya.{" "}
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
          <div>
            <h1 className="text-4xl text-purple-900">TESTIMONI</h1>
          </div>
          <div className="grid grid-cols-4 pt-10 justify-center items-center gap-10">
            <div className="border-2 rounded-xl border-purple-900 shadow-2xl bg-purple-600 flex gap-4 w-80 h-48 p-8 pt-8">
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

            <div className="border-2 rounded-xl border-purple-900 shadow-2xl bg-purple-600 flex gap-4 w-80 h-48 p-8 pt-8">
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
            <div className="border-2 rounded-xl border-purple-900 shadow-2xl bg-purple-600 flex gap-4 w-80 h-48 p-8 pt-8">
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
            <div className="border-2 rounded-xl border-purple-900 shadow-2xl bg-purple-600 flex gap-4 w-80 h-48 p-8 pt-8">
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
            <div className="border-2 rounded-xl border-purple-900 shadow-2xl bg-purple-600 flex gap-4 w-80 h-48 p-8 pt-8">
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
            <div className="border-2 rounded-xl border-purple-900 shadow-2xl bg-purple-600 flex gap-4 w-80 h-48 p-8 pt-8">
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
            <div className="border-2 rounded-xl border-purple-900 shadow-2xl bg-purple-600 flex gap-4 w-80 h-48 p-8 pt-8">
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
            <div className="border-2 rounded-xl border-purple-900 shadow-2xl bg-purple-600 flex gap-4 w-80 h-48 p-8 pt-8">
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
        </div>
      </section>
      {/* company logo and tagline */}
      <section className="w-full h-screen flex justify-center items-center bg-purple-200">
        <div>
          <h1 className="font-bold text-5xl">MDN48</h1>
        </div>
      </section>
      {/* about us */}
      <section className="w-full h-screen flex justify-center items-center bg-purple-400">
        <div>
          <h1 className="font-bold text-5xl">KITA INI GROUP IDOL</h1>
        </div>
        <div className="border"></div>
      </section>
    </main>
  );
};

export default Home;
