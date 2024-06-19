"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <main className="m-0 h-full flex flex-col justify-center items-center">
      <section className="w-full h-full flex justify-center items-center text-white bg-purple-400 p-2 md:p-10 lg:p-16">
        <div className="flex flex-col justify-center items-left py-14 px-10 gap-10">
          <div data-aos-once data-aos="fade">
            <h2 className="text-3xl font-bold text-center md:text-left lg:text-left">
              MDN48 adalah sebuah grup idola asal Indonesia yang merupakan
              bagian dari waralaba besar AKB48 dari Jepang. Berikut adalah
              beberapa informasi singkat tentang MDN48:
            </h2>
          </div>
          <div className="flex flex-col gap-10 px-4">
            <div>
              <h2 className="text-2xl font-bold">Sejarah Pembentukan:</h2>
              <ul className="list-disc list-inside text-xl">
                <li>MDN48 didirikan pada tahun 2024 di Medan, Indonesia.</li>
                <li>
                  Grup ini diinspirasi oleh konsep "idola yang bisa bertemu
                  langsung" yang populer di Jepang dan diadaptasi untuk pasar
                  Indonesia.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Manajemen dan Struktur:</h2>
              <ul className="list-disc list-inside text-xl">
                <li>MDN48 dikelola oleh PT. Sehat Jaya Sejahtera.</li>
                <li>
                  Mereka beroperasi di bawah lisensi dari AKS Co., Ltd.,
                  perusahaan yang mengelola waralaba AKB48 di Jepang.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Sistem dan Kegiatan:</h2>
              <ul className="list-disc list-inside text-xl">
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
              <h2 className="text-2xl font-bold">Populeritas dan Pengaruh:</h2>
              <ul className="list-disc list-inside text-xl">
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
              <h2 className="text-2xl font-bold">Dampak Budaya:</h2>
              <ul className="list-disc list-inside text-xl">
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
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
