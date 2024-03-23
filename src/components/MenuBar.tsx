import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { IoIosArrowRoundForward } from "react-icons/io";

const menuBar = [
  {
    img: "/menu/item-1.png",
    title: "Stilton and pancetta penne",
    price: "$80.00",
  },

  {
    img: "/menu/item-2.png",
    title: "Chorizo and avocado spaghetti",
    price: "$70.00",
  },

  {
    img: "/menu/item-3.png",
    title: "Crayfish and black pepper toastie",
    price: "$60.oo",
  },

  {
    img: "/menu/item-4.png",
    title: "Orange and banana cookies",
    price: "$50.00",
  },
];
const MenuBar = () => {
  return (
    <section className=" relative py-12 xl:py-24 bg-menu" id="menu">
      <div className="container mx-auto">
        <div>
          <h2> Favorite Menu</h2>
          <Link className="text-green" href="/">
            view all
            <IoIosArrowRoundForward />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3 md:gap-[15px] xl:grid-cols-4">
          {menuBar.map((item, index) => {
            return (
              <div
                key={index}
                className="max-w-[270px] bg-white shadow-2xl  mx-auto xl:mx-0 group"
              >
                <div>
                  <Image
                    className=""
                    src={item.img}
                    width={270}
                    height={270}
                    alt="image"
                  />
                </div>
                <div>
                  <Link href="/">
                    <h3 className="">{item.title}</h3>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuBar;
