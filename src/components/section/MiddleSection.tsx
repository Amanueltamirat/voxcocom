
import React from "react";
import FeatureCard from "./src/components/FeatureCard"; // adjust this path if needed
import { Phone, Smartphone, Sparkles, Map, Globe, PhoneCall } from "lucide-react";
// Accepted
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
  )
  }
{/* function MiddleSection() {
  return (
    <div className='m-10 font-sans'>
        <div className='my-20 text-center'>
        <h2 className='text-5xl font-semibold mb-5'>What We Do</h2>
        <p className='text-xl'>International Toll Free, Premium and Virtual Numbers.</p>
        </div>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3 gap-5 '>
        <div className='relative overflow-hidden flex gap-5 p-5  bg-white transition-all duration-200 shadow-sm shadow-gray-700 rounded-lg before:absolute before:inset-0 before:bg-gray-600 before:transform before:origin-bottom before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300 before:ease-in-out cursor-pointer group'>
            
                    <div className=' relative z-10  group-hover:hidden h-[250px]'>
                        <div className='flex justify-between gap-5 items-center'>
                            <TabletSmartphone size={40} className='text-orange-400' />
                        <h2 className='group-hover:text-white text-2xl font-semibold pb-5 text-gray-900'>International Toll free numbers
                            </h2>
                        </div>
                        <p className='group-hover:text-gray-200 tracking-[0.05rem] font-semibold text-gray-800' >Toll-Free numbers allow callers (from anywhere in the world) to reach your business without being charged for the call. It gives companies a global presence and enables their customers to communicate with them in an affordable and simple medium.</p>
                    </div>
                    <div className=' relative z-10  hidden group-hover:block h-[250px]'>

                         <div className='flex items-center gap-2'>
                            <Check className='text-orange-400' />
                            <p className='tracking-[0.05rem] font-semibold text-white'>Simple</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <Check className='text-orange-400' />
                            <p className='tracking-[0.05rem] font-semibold text-white'>Affordable</p>
                        </div>

                          <div className='flex items-center gap-2'>
                            <Check className='text-orange-400' />
                            <p className='tracking-[0.05rem] font-semibold text-white'>Global presence</p>
                        </div>

                        
                        
                        
                    </div>
        </div>

          <div className='relative overflow-hidden flex gap-5 p-5  bg-white transition-all duration-200 shadow-sm shadow-gray-700 rounded-lg before:absolute before:inset-0 before:bg-gray-600 before:transform before:origin-bottom before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300 before:ease-in-out cursor-pointer group'>
            
                    <div className=' relative z-10  group-hover:hidden h-[200px]'>
                        <div className='flex justify-between gap-5 items-center'>
                             <TabletSmartphone size={40}  className='text-orange-400 '/>
                        <h2 className='group-hover:text-white text-2xl font-semibold pb-5 text-gray-900'>Virtual mobile numbers
                          </h2>
                        </div>
                        <p className='group-hover:text-gray-200 tracking-[0.05rem] font-semibold text-gray-800' >A virtual mobile number is the same as a common mobile number, the only difference being that you don’t need a physical SIM card to use it. This peculiarity allows you to use a virtual mobile number on any device where you can make and receive calls and send and receive texts.</p>
                    </div>
                    <div className=' relative z-10  hidden group-hover:block h-[200px]'>

                         <div className='flex items-center gap-2'>
                            <Check className='text-orange-400' />
                            <p className='tracking-[0.05rem] font-semibold text-white'>Virtual numbers</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <Check className='text-orange-400' />
                            <p className='tracking-[0.05rem] font-semibold text-white'>Improve communication</p>
                        </div>

                          <div className='flex items-center gap-2'>
                            <Check className='text-orange-400' />
                            <p className='tracking-[0.05rem] font-semibold text-white'>Flexibility</p>
                        </div>
                    </div>
        </div>

          <div className='relative overflow-hidden flex gap-5 p-5  bg-white transition-all duration-200 shadow-sm shadow-gray-700 rounded-lg before:absolute before:inset-0 before:bg-gray-600 before:transform before:origin-bottom before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300 before:ease-in-out cursor-pointer group'>
            
                    <div className=' relative z-10  group-hover:hidden h-[200px]'>
                        <div className='flex gap-5 items-center'>
                            <ShieldQuestionMark size={40} className='text-orange-400' />
                        <h2 className='group-hover:text-white text-2xl font-semibold pb-5 text-gray-900'>International Premium Rate Numbers
                         </h2>
                        </div>
                        <p className='group-hover:text-gray-200 tracking-[0.05rem] font-semibold text-gray-800' >We offer International premium rate numbers which can be used for voice and data services, voting, live chats, TV quiz shows and much more. We have negotiated very competitive rates and share the revenue with our Partners.</p>
                    </div>
                    <div className=' relative z-10  hidden group-hover:block h-[200px]'>

                         <div className='flex items-center gap-2'>
                            <Check className='text-orange-400' />
                            <p className='tracking-[0.05rem] font-semibold text-white'>Premium quality services</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <Check className='text-orange-400' />
                            <p className='tracking-[0.05rem] font-semibold text-white'>Immediate activation</p>
                        </div>

                          <div className='flex items-center gap-2'>
                            <Check className='text-orange-400' />
                            <p className='tracking-[0.05rem] font-semibold text-white'>Extensive coverage</p>
                        </div>

                          <div className='flex items-center gap-2'>
                            <Check className='text-orange-400' />
                            <p className='tracking-[0.05rem] font-semibold text-white'>Flexible charging options</p>
                        </div> 
                    </div>
        </div>

          <div className='relative overflow-hidden flex gap-5 p-5  bg-white transition-all duration-200 shadow-sm shadow-gray-700 rounded-lg before:absolute before:inset-0 before:bg-gray-600 before:transform before:origin-bottom before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300 before:ease-in-out cursor-pointer group'>
            
                    <div className=' relative z-10  group-hover:hidden '>
                       <div className='flex items-center gap-5'>
                        <BringToFront size={40} className='text-orange-400' />
                        <h2 className='group-hover:text-white text-2xl font-semibold pb-5 text-gray-900'>Extensive Coverage
                         </h2>
                       </div>
                        <p className='group-hover:text-gray-200 tracking-[0.05rem] font-semibold text-gray-800' >We provide premium quality global voice origination services. Virtual numbers are available for immediate activation. Extensive coverage of local, mobile, national and toll-free virtual numbers. We partner with licensed operators directly in every country in which we provide virtual numbers.</p>
                    </div>
                    <div className=' relative z-10  hidden group-hover:block h-[100%]'>

                         <div className='flex items-center gap-2'>
                            <Check className='text-orange-400' />
                            <p className='tracking-[0.05rem] font-semibold text-white'>Premium quality services</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <Check className='text-orange-400' />
                            <p className='tracking-[0.05rem] font-semibold text-white'>Immediate activation</p>
                        </div>

                          <div className='flex items-center gap-2'>
                            <Check className='text-orange-400' />
                            <p className='tracking-[0.05rem] font-semibold text-white'>Extensive coverage</p>
                        </div>

                          <div className='flex items-center gap-2'>
                            <Check className='text-orange-400' />
                            <p className='tracking-[0.05rem] font-semibold text-white'>Flexible charging options</p>
                        </div> 
                    </div>
        </div>

        <div className='relative overflow-hidden flex gap-5 p-5  bg-white transition-all duration-200 shadow-sm shadow-gray-700 rounded-lg before:absolute before:inset-0 before:bg-gray-600 before:transform before:origin-bottom before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300 before:ease-in-out cursor-pointer group'>
            
                    <div className=' relative z-10  group-hover:hidden h-[200px]'>
                        <div className='flex items-center gap-5'>
                            <GlobeLock size={40} className='text-orange-400' />
                        <h2 className='group-hover:text-white text-2xl font-semibold pb-5 text-gray-900'>Global Inbound Numbers
                         </h2>
                        </div>
                        <p className='group-hover:text-gray-200 tracking-[0.05rem] font-semibold text-gray-800' >We offer global inbound numbers from over 100 countries which are delivered locally through our global POP’s.</p>
                    </div>
                    <div className=' relative z-10  hidden group-hover:block h-[200px]'>

                         <div className='flex items-center gap-2'>
                            <Check className='text-orange-400' />
                            <p className='tracking-[0.05rem] font-semibold text-white'>Inbound numbers</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <Check className='text-orange-400' />
                            <p className='tracking-[0.05rem] font-semibold text-white'>Global and local presence</p>
                        </div>                     
                    </div>
        </div>

         <div className='relative overflow-hidden flex gap-5 p-5  bg-white transition-all duration-200 shadow-sm shadow-gray-700 rounded-lg before:absolute before:inset-0 before:bg-gray-600 before:transform before:origin-bottom before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300 before:ease-in-out cursor-pointer group'>
            
                    <div className=' relative z-10  group-hover:hidden h-[250px]'>
                        <div className='flex items-center gap-5'>
                            <AudioLines size={40} className='text-orange-400' />
                        <h2 className='group-hover:text-white text-2xl font-semibold pb-5 text-gray-900'>Two Way voice services
                         </h2>
                        </div>
                        <p className='group-hover:text-gray-200 tracking-[0.05rem] font-semibold text-gray-800' >Two-way voice services offer you the ability to make and receive local and international calls and have access to emergency services and number portability in multiple countries across the world from a single vendor through a single SIP connection to our Global Voice Network.</p>
                    </div>
                    <div className=' relative z-10  hidden group-hover:block h-[250px]'>

                         <div className='flex items-center gap-2'>
                            <Check className='text-orange-400' />
                            <p className='tracking-[0.05rem] font-semibold text-white'>International Voice services</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <Check className='text-orange-400' />
                            <p className='tracking-[0.05rem] font-semibold text-white'>Single vendor</p>
                        </div> 

                        <div className='flex items-center gap-2'>
                            <Check className='text-orange-400' />
                            <p className='tracking-[0.05rem] font-semibold text-white'>Single SIP connection</p>
                        </div>                     
                    </div>
        </div>

          <div className='relative overflow-hidden flex gap-5 p-5  bg-white transition-all duration-200 shadow-sm shadow-gray-700 rounded-lg before:absolute before:inset-0 before:bg-gray-600 before:transform before:origin-bottom before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300 before:ease-in-out cursor-pointer group'>
            
                    <div className=' relative z-10  group-hover:hidden h-[250px]'>
                        <div className='flex items-center gap-5'>
                            <AudioLines  size={40} className='text-orange-400'/>
                        <h2 className='group-hover:text-white text-2xl font-semibold pb-5 text-gray-900'>Voice Termination
                         </h2>
                        </div>
                        <p className='group-hover:text-gray-200 tracking-[0.05rem] font-semibold text-gray-800' >Voxco offer cost-efficient and high-quality wholesale voice termination across our global network.</p>
                    </div>
                    <div className=' relative z-10  hidden group-hover:block h-[250px]'>

                         <div className='flex items-center gap-2'>
                            <Check className='text-orange-400' />
                            <p className='tracking-[0.05rem] font-semibold text-white'>High quality</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <Check className='text-orange-400' />
                            <p className='tracking-[0.05rem] font-semibold text-white'>Global network</p>
                        </div>                    
                    </div>
        </div>
    </div>
    </div>
  );
} */}

export default MiddleSection;
