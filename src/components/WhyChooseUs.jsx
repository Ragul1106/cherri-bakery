import React from "react";
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";
import card4 from "../assets/images/card4.png";
import card5 from "../assets/images/card5.png";

const WhyChooseUs = () => {
  const cards = [card1, card2, card3, card4, card5];

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-12">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#D99A6C] mb-8">
        Why Choose Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {cards.map((img, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-300 flex items-center justify-center"
          >
            <img
              src={img}
              alt={`Card ${index + 1}`}
              className="w-[150px] sm:w-[450px] h-auto max-h-[200px] sm:max-h-[450px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;




// import React from "react";
// import FreshImg from "../assets/images/fresh.png";
// import LocalImg from "../assets/images/local.png";
// import CustomImg from "../assets/images/custom.png";
// import WarmImg from "../assets/images/warm.png";
// import PassionImg from "../assets/images/passion.png";

// const cards = [
//   {
//     img: FreshImg,
//     title: "Fresh, Handcrafted Daily",
//     text: "Every morning, our bakers start early to bring you the freshest breads, pastries, and cakes—made from scratch using real, wholesome ingredients.",
//   },
//   {
//     img: LocalImg,
//     title: "Locally Sourced Ingredients",
//     text: "We partner with local farms and suppliers to ensure the highest quality and support our community.",
//     textClass: "mt-1",
//   },
//   {
//     img: CustomImg,
//     title: "Unique & Custom Creations",
//     text: "From classic croissants to custom birthday cakes, we bake with creativity and care—tailored to your tastes and special occasions.",
//   },
//   {
//     img: WarmImg,
//     title: "Warm, Welcoming Atmosphere",
//     text: "We’re more than just a bakery—we’re your neighborhood spot for sweet treats, good coffee, and friendly smiles.",
//     textClass: "mt-1",
//   },
//   {
//     img: PassionImg,
//     title: "Passion for Excellence",
//     text: "Baking is our passion, and it shows in every detail—from the golden crust to the last crumb.",
//     textClass: "mt-1",
//   },
// ];

// export default function WhyChooseUs() {
//   return (
//     <section className="bg-[#fdf5ef] py-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#D99A6C] mb-8">
//           Why Choose Us
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className="bg-white px-3 py-4 rounded-2xl shadow-sm text-center flex flex-col items-center border border-gray-300 shadow-md w-[250px] h-[320px] md:w-[220px] md:h-[300px] lg:w-[190px] lg:h-[340px] mx-auto"
//             >
//               {/* Circle border with background */}
//               <div className="w-16 h-16 flex items-center justify-center border-2 border-[#D99A6C] bg-[#D99A6C] rounded-full mb-2">
//                 <img
//                   src={card.img}
//                   alt={card.title}
//                   className="w-8 h-8 object-contain"
//                 />
//               </div>

//               <h3 className="text-lg font-bold text-[#D99A6C] mb-1 leading-tight">
//                 {card.title}
//               </h3>

//               <p
//                 className={`text-sm text-gray-700 font-medium leading-snug ${card.textClass || ""}`}
//               >
//                 {card.text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
