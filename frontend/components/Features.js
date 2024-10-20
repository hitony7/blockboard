// ./frontend/app/components/Features.js
import { headingFont } from "../utils/fonts";
import {
  FaVoteYea,
  FaShieldAlt,
  FaMoneyBillWave,
  FaLayerGroup,
} from "react-icons/fa";

const features = [
  {
    icon: <FaVoteYea size={40} />,
    title: "Decentralized Decision-Making",
    description:
      "As an investor, you hold the power to vote on key startup decisions and help shape their future.",
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Blockchain-Powered Transparency",
    description:
      "Every investment and transaction is recorded on the blockchain, ensuring full transparency and trust.",
  },
  {
    icon: <FaMoneyBillWave size={40} />,
    title: (<>Low Barriers<br/> to Entry</>),
    description:
      "Start investing with minimal capital, making it easy for anyone to build and diversify their portfolio.",
  },
  {
    icon: <FaLayerGroup size={40} />,
    title: "Portfolio Diversification",
    description:
      "Spread your investments across multiple startups, increasing your potential for success while reducing risk.",
  },
];

export default function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2
          className={`${headingFont.className} text-center text-4xl mb-3 capitalize`}
        >
          Why BlockBoard?
        </h2>
        <p className="text-gray-300 text-center text-lg mb-8 max-w-2xl mx-auto">Our platform is designed to provide investors with transparency, control, and the power to shape the startups they believe in.</p>
        <div className="flex flex-wrap -mx-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 flex"
            >
              <div className="px-4 py-8 shadow-lg flex-1 bg-secondary">
                <div className="mb-4">{feature.icon}</div>
                <h3
                  className={`${headingFont.className} text-primary text-2xl mb-2`}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}