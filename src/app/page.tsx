import Image from "next/image";

const page = () => {
  return (
    <div className="w-screen h-screen flex bg-slate-300 justify-center items-center">
      <Image
        src="https://images.unsplash.com/photo-1505968409348-bd000797c92e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={600}
        height={600}
        alt="poto"
        className="w-100 h-80 object-fit"
      />
      <Image
        src="https://disk.mediaindonesia.com/files/news/2022/12/30/WhatsApp%20Image%202022-12-22%20at%2017.06.28.jpg"
        width={600}
        height={600}
        alt="gunung"
        className="w-100 h-80 object-fit"
      />
    </div>
  );
};

export default page;
