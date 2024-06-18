import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
const CarouselComponent = () => {
  return (
    <Carousel
      className="rounded-xl w-[650px] h-auto"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <Image width={800} height={800} src={"/voucher1.png"} alt="voucer1" />
      <Image width={800} height={800} src={"/voucher1.png"} alt="voucer1" />
      <Image width={800} height={800} src={"/voucher1.png"} alt="voucer1" />
    </Carousel>
  );
};

export default CarouselComponent;
