import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex justify-center py-20 md:py-24 bg-purple-200">
      <div className="flex flex-col justify-center items-center px-6 md:px-12 lg:px-32 gap-12 md:flex-row lg:flex-row w-full max-w-7xl">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-900 mb-4 md:mb-8">
            Ayo Saksikan <span className="text-purple-500">Theater</span> Kami!
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-purple-900 text-left lg:text-justify">
            MDN48 adalah grup idola asal Indonesia yang merupakan bagian dari
            waralaba AKB48 dari Jepang. Mereka didirikan pada tahun 2024 di
            Medan dengan konsep &quot;idola yang bisa bertemu langsung&quot;.
            Seperti grup-grup AKB48 lainnya, MDN48 memiliki teater di mana
            anggota-anggota mereka tampil secara rutin. Mereka terbagi dalam
            beberapa tim, seperti Team M, Team D, dan Team N, serta memiliki
            sistem trainee untuk anggota yang sedang dalam masa pelatihan
            sebelum debut resmi.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src="/voucher2af.png"
            alt="image"
            width={700}
            height={700}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
