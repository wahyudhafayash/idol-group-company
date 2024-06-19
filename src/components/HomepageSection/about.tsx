const About = () => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center text-purple-100 bg-purple-600 p-8 md:p-16">
      <div className="max-w-5xl w-full mx-auto flex flex-col justify-center items-center gap-8 py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          MDN48: Budaya Idol Indonesia
        </h2>
        <p className="text-lg md:text-xl text-justify">
          MDN48 adalah grup idola asal Indonesia yang merupakan bagian dari
          waralaba AKB48 dari Jepang. Grup ini didirikan pada tahun 2024 di
          Medan dengan konsep "idola yang bisa bertemu langsung dengan
          penggemar", mirip dengan AKB48. MDN48 memiliki beberapa tim, seperti
          Team M, Team D, dan Team N, serta memiliki sistem trainee untuk
          anggota yang sedang dalam masa pelatihan sebelum debut resmi.
        </p>
        <p className="text-lg md:text-xl text-justify">
          Mereka rutin mengadakan pertunjukan di teater mereka di Jakarta dan
          aktif dalam berbagai aktivitas yang berkaitan dengan musik,
          pertunjukan, dan kegiatan komunitas. MDN48 memiliki basis penggemar
          yang besar dan aktif, serta memberikan kontribusi signifikan dalam
          mempopulerkan budaya idol di Indonesia.
        </p>
      </div>
    </section>
  );
};

export default About;
