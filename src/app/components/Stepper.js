import React from 'react'

export default function Stepper() {
  return (
    <div>
      <div className="flex gap-x-6 md:gap-x-12">
        <div className="relative last:after:hidden after:absolute after:top-20 after:bottom-5 after:start-3.5 after:w-px after:translate-x-[14px] after:bg-white/20 dark:after:bg-white/20">
          <div className="relative z-10 w-14 h-14 flex justify-center items-center">
            <div className="w-14 h-14 border rounded-full flex items-center justify-center text-xl">
              1
            </div>
          </div>
        </div>

        <div className="grow pt-0.5 pb-8">
          <img src="/icon-stepper-1.png" className="mb-8" />
          <h2 className="text-[17px] md:text-[22px] font-medium mb-4 md:mb-7">
            Download and install MetaMask
          </h2>
          <p className="mt-1 text-white/80 text-base md:text-lg mb-8">
            Download and install a Chrome browser plugin called MetaMask. This
            will allow websites (that you authorise) access to your Ethereum
            account.
          </p>
          <button className="text-base border border-white/40 rounded-full px-6 py-2">
            Download MetaMask
          </button>
        </div>
      </div>

      <div className="flex gap-x-6 md:gap-x-12">
        <div className="relative last:after:hidden after:absolute after:top-20 after:bottom-5 after:start-3.5 after:w-px after:translate-x-[14px] after:bg-white/20 dark:after:bg-white/20">
          <div className="relative z-10 w-14 h-14 flex justify-center items-center">
            <div className="w-14 h-14 border rounded-full flex items-center justify-center text-xl">
              2
            </div>
          </div>
        </div>

        <div className="grow pt-0.5 pb-8">
          <img src="/icon-stepper-2.png" className="mb-8" />
          <h2 className="text-[17px] md:text-[22px] font-medium mb-4 md:mb-7">
            Buy some Ethereum
          </h2>
          <p className="mt-1 text-white/80 text-base md:text-lg mb-8">
            If you made a new account, buy some Ethereum. The MetaMask plugin
            has a button that will allow you to buy Ether from Coinbase.
          </p>
        </div>
      </div>

      <div className="flex gap-x-6 md:gap-x-12">
        <div className="relative dark:after:bg-gray-700">
          <div className="relative z-10 w-14 h-14 flex justify-center items-center">
            <div className="w-14 h-14 border rounded-full flex items-center justify-center text-xl">
              3
            </div>
          </div>
        </div>

        <div className="grow pt-0.5 pb-8">
          <h2 className="text-[17px] md:text-[22px] font-medium">
            Start bidding, buying and selling
          </h2>
          <p className="mt-1 text-white/80 text-base md:text-lg">
            Once you have the plugin installed, this website will recognise it
            and add buttons that allow you to bid on, buy and sell punks
            directly in the interface.
          </p>
        </div>
      </div>
    </div>
  )
}
