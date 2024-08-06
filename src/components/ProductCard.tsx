import { PHASE_PRODUCTION_BUILD } from "next/dist/shared/lib/constants"
import Image from "next/image"
import IconCart from "../../public/icon-cart.svg"
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({ subsets: ["latin"] });


const ProductCard = () => {
    const productCard =[
        {
            productId : 1,
            image : "/images/image-product-1.jpg",
            productCategory : "Perfume",
            productName : "Gabrielle Essence Eau De Parfum",
            desc : "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the house of CHANEL.",
            price : 149.99,
            soldePrice : 169.99,
        }
    ]
  return (
    <>
      {/* Mobile Screen */}
      <div className="md:hidden flex flex-col max-w-[343px] bg-white rounded-lg">
        {/* Image div */}
        <div className=" relative h-[280px]  ">
          <Image
            src="/image-product-mobile.jpg"
            alt={productCard[0].productName}
            fill
            className="rounded-t-lg   "
            />
            </div>

          
         

        {/* Text div */}
        <div className=" flex flex-col gap-2 px-6">
          <p className="text-darkGrayishBlue pt-6 text-[0.88rem] tracking-[5px] uppercase ">
            {productCard[0].productCategory}
          </p>
          <h1
            className={`text-black text-[32px] font-extrabold ${fraunces.className}`}
          >
            {productCard[0].productName}
          </h1>
          <p className="text-darkGrayishBlue text-[0.88rem] leading-[22px]">
            {productCard[0].desc}
          </p>
          <div className="flex gap-5 items-center">
            <span
              className={`${fraunces.className} text-darkcyan font-bold text-[2rem]`}
            >
              {productCard[0].price}
            </span>
            <span className="text-[0.88rem] text-darkGrayishBlue font-medium line-through">
              {productCard[0].soldePrice}
            </span>
          </div>
          <button className="bg-darkcyan mb-6  hover:bg-darkcyanhover transition-all flex items-center justify-center gap-2.5 p-3 rounded-lg text-white font-semibold">
            <Image src="/icon-cart.svg" alt="Cart" width={15} height={16} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Desktop Screen */}

      <div className="hidden md:flex max-w-[600px] max-h-[450px]  bg-white rounded-lg">
        <div className=" relative w-1/2  ">
          <Image
            src="/image-product-desktop.jpg"
            alt={productCard[0].productName}
            width={300}
            height={450}
            className="rounded-l-lg object-contain "
          />
        </div>

        {/* Text div */}
        <div className=" flex flex-col gap-4  p-8 w-1/2">
          <p className="text-darkGrayishBlue  text-[0.88rem] tracking-[5px] uppercase ">
            {productCard[0].productCategory}
          </p>
          <p
            className={`text-black text-4xl  font-extrabold ${fraunces.className}`}
          >
            {productCard[0].productName}
          </p>
          <p className="text-darkGrayishBlue  text-[0.88rem] leading-[22px]">
            {productCard[0].desc}
          </p>
          <div className="flex gap-5 items-center">
            <span
              className={`${fraunces.className} text-darkcyan font-bold text-[2rem]`}
            >
              {productCard[0].price}
            </span>
            <span className="text-[0.88rem] text-darkGrayishBlue font-medium line-through">
              {productCard[0].soldePrice}
            </span>
          </div>
          <button className="bg-darkcyan h-[48px] hover:bg-darkcyanhover transition-all flex items-center justify-center gap-2.5 p-3 rounded-lg text-white font-semibold">
            <Image src="/icon-cart.svg" alt="Cart" width={15} height={16} />
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard