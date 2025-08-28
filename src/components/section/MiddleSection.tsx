import React from "react";
import FeatureCard from "./src/components/FeatureCard"; // adjust this path if needed
import { Phone, Smartphone, Sparkles, Map, Globe, PhoneCall } from "lucide-react";

function MiddleSection() {
  const items = [
    {
      title: "International Toll free numbers",
      description:
        "Toll-Free numbers allow callers (from anywhere in the world) to reach your business without being charged for the call. It gives companies a global presence and enables their customers to communicate with them in an affordable and simple medium.",
      bullets: ["Simple", "Affordable", "Global presence"],
      bodyHeight: "h-[250px]",
      icon: <Phone className="w-6 h-6 text-purple-600" />,
    },
    {
      title: "Virtual mobile numbers",
      description:
        "A virtual mobile number is the same as a common mobile number, the only difference being that you don’t need a physical SIM card to use it. This peculiarity allows you to use a virtual mobile number on any device where you can make and receive calls and send and receive texts.",
      bullets: ["Virtual numbers", "Improve communication", "Flexibility"],
      bodyHeight: "h-[200px]",
      icon: <Smartphone className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "International Premium Rate Numbers",
      description:
        "We offer International premium rate numbers which can be used for voice and data services, voting, live chats, TV quiz shows and much more. We have negotiated very competitive rates and share the revenue with our Partners.",
      bullets: [
        "Premium quality services",
        "Immediate activation",
        "Extensive coverage",
        "Flexible charging options",
      ],
      bodyHeight: "h-[250px]",
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
    },
    {
      title: "Extensive Coverage",
      description:
        "We provide premium quality global voice origination services. Virtual numbers are available for immediate activation. Extensive coverage of local, mobile, national and toll-free virtual numbers. We partner with licensed operators directly in every country in which we provide virtual numbers.",
      bullets: [
        "Premium quality services",
        "Immediate activation",
        "Extensive coverage",
        "Flexible charging options",
      ],
      bodyHeight: "h-full", // same as your previous h-[100%]
      icon: <Map className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: "Global Inbound Numbers",
      description:
        "We offer global inbound numbers from over 100 countries which are delivered locally through our global POP’s.",
      bullets: ["Inbound numbers", "Global and local presence"],
      bodyHeight: "h-[200px]",
      icon: <Globe className="w-6 h-6 text-teal-600" />,
    },
    {
      title: "Voice Termination",
      description:
        "Voxco offer cost-efficient and high-quality wholesale voice termination across our global network.",
      bullets: ["High quality", "Global network"],
      bodyHeight: "h-[250px]",
      icon: <PhoneCall className="w-6 h-6 text-fuchsia-600" />,
    },
  ] as const;

  return (
    <div className="m-10 font-sans">
      <div className="my-20 text-center">
        <h2 className="text-5xl font-semibold mb-5">What We Do</h2>
        <p className="text-xl">
          International Toll Free, Premium and Virtual Numbers.
        </p>
      </div>

      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {items.map((it) => (
          <FeatureCard
            key={it.title}
            title={it.title}
            description={it.description}
            bullets={it.bullets} 
            bodyHeight={it.bodyHeight}
            icon={it.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default MiddleSection;
