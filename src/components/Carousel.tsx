import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

const CarouselComponent = () => {
  return (
    <Carousel
      className="rounded-xl w-full md:w-96 h-auto"
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      placeholder={undefined}
    >
      <Image width={400} height={400} src="/voucher1af.png" alt="voucher1" />
      <Image width={400} height={400} src="/voucher2af.png" alt="voucher2" />
      <Image width={400} height={400} src="/voucher1af.png" alt="voucher3" />
    </Carousel>
  );
};

export default CarouselComponent;
