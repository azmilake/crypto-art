'use client'
import { useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import Marquee from 'react-fast-marquee'
import SliderCard from './components/SliderCard'
import CardSlider from './components/CardSlider'
import CardSales from './utils/cardDataLargest.json'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Stepper from './components/Stepper'

const tabs = [
  'Punks with a blue background are not for sale and have no current bids.',
  'Punks with a red background are available for sale by their owner.',
  'Punks with a purple background have an active bid on them',
]

const tabInfo = [
  {
    id: 'Punks with a blue background are not for sale and have no current bids.',
    img: '/bg-1.png',
  },
  {
    id: 'Punks with a red background are available for sale by their owner.',
    img: '/bg-2.png',
  },
  {
    id: 'Punks with a purple background have an active bid on them',
    img: '/bg-3.png',
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState(
    'Punks with a blue background are not for sale and have no current bids.'
  )

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <>
      <Navbar />

      <main className="">
        <section className="bg-[#101111] text-white h-full md:h-[606px] px-5 lg:px-0">
          <div className="flex flex-col justify-center items-center text-center pt-16 md:pt-44">
            <h2 className="text-[32px] md:text-[44px]">
              The project that inspired the modern CryptoArt movement
            </h2>
            <p className="w-full md:w-[650px] text-[15px] md:text-xl my-9">
              10,000 unique collectible characters with proof of ownership
              stored on the Ethereum blockchain.
            </p>
            <button className="py-3 px-6 bg-white text-black rounded-full">
              Min <span className="font-semibold">now</span>
            </button>
          </div>
        </section>

        <section className="bg-[#101111] text-white pt-20 md:pt-0">
          <Marquee autoFill>
            <img src="/marquee-1.png" className="mr-3" />
            <img src="/marquee-2.png" className="mr-3" />
            <img src="/marquee-3.png" className="mr-3" />
            <img src="/marquee-4.png" className="mr-3" />
            <img src="/marquee-5.png" className="mr-3" />
            <img src="/marquee-6.png" className="mr-3" />
            <img src="/marquee-7.png" className="mr-3" />
            <img src="/marquee-8.png" className="mr-3" />
          </Marquee>
        </section>

        <section className="bg-[#101111] text-white py-[130px] px-5 lg:px-0">
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
            <h2 className="font-medium text-[26px] mb-9 md:mb-[74px]">
              Featured in
            </h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
              <div className="border rounded-[28px] p-7 flex flex-col">
                <h3 className="text-2xl font-bold mb-4">Mashable</h3>
                <h4>
                  This ethereum-based project could change how we think about
                  digital art
                </h4>
                <hr className="border-t border-white -ml-7 w-[340px] md:w-[406px] my-8" />
                <span className="flex justify-between items-center">
                  <p>Read article</p>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.5 18V2H2.5V4H15.5L2.5 17L3.5 18L16.5 5V18H18.5ZM18.5 2H15.5V5H18.5V2Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
              <div className="border rounded-[28px] p-7 flex flex-col">
                <h3 className="text-2xl font-bold mb-4">Mashable</h3>
                <h4>
                  This ethereum-based project could change how we think about
                  digital art
                </h4>
                <hr className="border-t border-white -ml-7 w-[340px] md:w-[406px] my-8" />
                <span className="flex justify-between items-center">
                  <p>Read article</p>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.5 18V2H2.5V4H15.5L2.5 17L3.5 18L16.5 5V18H18.5ZM18.5 2H15.5V5H18.5V2Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
              <div className="border rounded-[28px] p-7 flex flex-col">
                <h3 className="text-2xl font-bold mb-4">Mashable</h3>
                <h4>
                  This ethereum-based project could change how we think about
                  digital art
                </h4>
                <hr className="border-t border-white -ml-7 w-[340px] md:w-[406px] my-8" />
                <span className="flex justify-between items-center">
                  <p>Read article</p>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.5 18V2H2.5V4H15.5L2.5 17L3.5 18L16.5 5V18H18.5ZM18.5 2H15.5V5H18.5V2Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#101111] text-white rounded-b-[40px] px-5 md:px-0">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between mb-32">
              <h1 className="font-medium text-[33px] md:text-[53px] mb-7 md:mb-0">
                Meet the Punks
              </h1>
              <div className="w-full md:w-1/2">
                <p className="text-base md:text-xl">
                  The CryptoPunks are 24x24 pixel art images, generated
                  algorithmically. Most are punky-looking guys and girls, but
                  there are a few rarer types mixed in: Apes, Zombies and even
                  the odd Alien. Every punk has their own profile page that
                  shows their attributes as well as their ownership/for-sale
                  status.
                </p>
                <div className="flex flex-col md:flex-row space-x-0 md:space-x-3 space-y-4 md:space-y-0 mt-7">
                  <button className="rounded-full px-10 py-3 bg-white text-black text-xl font-medium">
                    Buy a Punk
                  </button>
                  <button className="rounded-full px-10 py-3 text-white border text-xl font-medium">
                    View full collection
                  </button>
                </div>
              </div>
            </div>

            <div className="pb-[130px]">
              <div className="mt-8 flex flex-col md:flex-row justify-between space-x-0 md:space-x-10 space-y-10 md:space-y-0">
                {/* Tab menu */}
                <div className="w-full md:w-1/2 flex border-gray-300">
                  <ul className="w-full flex flex-col space-y-5">
                    {tabs.map((tab) => (
                      <li
                        key={tab}
                        className={`text-xl md:text-[28px] font-medium w-full md:w-[590px] p-6 md:p-10 border rounded-3xl border-gray-300 cursor-pointer ${
                          activeTab === tab
                            ? 'bg-[#638596] text-white border-0'
                            : 'hover:bg-[#638596]'
                        }`}
                        onClick={() => handleTabClick(tab)}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tab content */}
                <div className="w-full md:w-1/2 rounded-lg">
                  {tabInfo.map((tab) => (
                    <div
                      key={tab.id}
                      id={tab.id}
                      className={`${activeTab === tab.id ? '' : 'hidden'}`}
                    >
                      <img
                        src={tab.img}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-32 px-5 lg:px-0" id="largestSale">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <h1 className="text-[32px] md:text-[52px] font-medium mb-8 md:mb-0">
                Largest Sales
              </h1>
              <button className="text-xl font-medium rounded-full border px-6 py-3">
                View all
              </button>
            </div>

            <SliderCard>
              {CardSales.map((item) => (
                <SwiperSlide>
                  <CardSlider
                    key={item.id}
                    pic={item.pic}
                    price={item.price}
                    code={item.code}
                    date={item.date}
                  />
                </SwiperSlide>
              ))}
            </SliderCard>
          </div>
        </section>

        <section className="mt-32 px-5 lg:px-0" id="recentTransaction">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-8 md:mb-0">
                <h1 className="text-[32px] md:text-[52px] font-medium mb-5 md:mb-0">
                  Recent Transactions
                </h1>
                <p className="text-lg text-gray-600">Updated 25 seconds ago</p>
              </div>
              <button className="text-xl font-medium rounded-full border px-6 py-3">
                View all
              </button>
            </div>

            <SliderCard>
              {CardSales.map((item) => (
                <SwiperSlide>
                  <CardSlider
                    key={item.id}
                    pic={item.pic}
                    price={item.price}
                    code={item.code}
                    date={item.date}
                  />
                </SwiperSlide>
              ))}
            </SliderCard>
          </div>
        </section>

        <section
          className="bg-[#101111] text-white rounded-t-[40px] px-5 md:px-0 pb-52 mt-32"
          id="stepper"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between pt-32">
            <h2 className="font-medium text-[29px] md:text-[45px] mb-8 md:mb-0 w-full md:w-1/2">
              How do I get a punk?
            </h2>

            <div className="w-full md:w-1/2">
              <Stepper />
            </div>
          </div>
        </section>

        <section
          className="bg-[#101111] text-white pb-32 px-5 lg:px-0"
          id="faq"
        >
          <div className="max-w-7xl mx-auto">
            <h1 className="font-medium text-[34px] md:text-[52px] mb-12 md:mb-24">
              Details and FAQ
            </h1>

            <div className="">
              <div className="border-t border-white/60 flex flex-col md:flex-row justify-between py-6">
                <h3 className="w-full md:w-1/2 text-xl font-medium">
                  Where are the images for the punks stored?
                </h3>
                <p className="w-full md:w-1/2 text-base md:text-xl text-white/80">
                  When originally released, the actual images of the punks were
                  too large to store on the blockchain, so we took a hash of the
                  composite image of all the punks and embeded it into the
                  contract. You can verify that the punks being managed by the
                  Ethereum contract are the True Official Genuine CryptoPunks™
                  by calculating an SHA256 hash on the cryptopunks image and
                  comparing it to the hash stored in the contract.Since then,
                  due to some clever compression ideas and some help from
                  friends of the punks we have managed to put the entire image
                  and attribute data fully on chain. You can read more about the
                  mechanisms and details of the process in the announcement blog
                  post.
                </p>
              </div>
              <div className="border-t border-white/60 flex flex-col md:flex-row justify-between py-6">
                <h3 className="w-full md:w-1/2 text-xl font-medium">
                  Are the punks an ERC-721 token?
                </h3>
                <p className="w-full md:w-1/2 text-base md:text-xl text-white/80">
                  No. The CryptoPunks pre-date the ERC-721 standard and are a
                  custom contract, that means it doesn't comply with any
                  standards. They are almost an ERC20 token. We support the
                  methods that provide your balance so you can watch CryptoPunks
                  as a token in your wallet and see how many you own. None of
                  the other methods are the same since you're not transferring a
                  simple balance, but need to reference which specific Punk you
                  want to work with.
                </p>
              </div>
              <div className="border-t border-white/60 flex flex-col md:flex-row justify-between py-6">
                <h3 className="w-full md:w-1/2 text-xl font-medium">
                  Where does the market data on this site come from?
                </h3>
                <p className="w-full md:w-1/2 text-base md:text-xl text-white/80">
                  The prices, bids and sales you see on this site are loaded
                  from the Cryptopunks contract on the Ethereum blockchain.
                  Because the Cryptopunks pre-date the ERC-721 standard (and all
                  third party NFT marketplaces) we also needed to write a market
                  so the punks could be transacted. We have no control over the
                  contract governing this market, and have no access to any
                  additional data beyond what the blockchain provides. In fact
                  anyone else could write a web front end for it.
                </p>
              </div>
              <div className="border-t border-white/60 flex flex-col md:flex-row justify-between py-6">
                <h3 className="w-full md:w-1/2 text-xl font-medium">
                  Do you charge any fees for transactions?
                </h3>
                <p className="w-full md:w-1/2 text-base md:text-xl text-white/80">
                  No. We charge no fees for Cryptopunks transacted through the
                  built-in market beyond the ones charged by Ethereum (gas).The
                  contract source and more technical details are available on
                  Github.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
