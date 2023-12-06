import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#101111] text-white px-5 lg:px-0">
      <div className="max-w-7xl mx-auto pb-16">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-y-3 md:justify-between">
          <h3 className="text-3xl font-semibold">CryptoPunks</h3>
          <span className="my-12 md:my-0 flex flex-col md:flex-row items-center space-x-0 md:space-x-9 space-y-6 md:space-y-0 text-white/75 text-base">
            <a href="#">Buy a Punk</a>
            <a href="#">View Full Collection</a>
          </span>
          <span className="flex items-center space-x-3">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_12)">
                <path
                  d="M20.977 6.21071C20.517 6.80819 19.6265 7.75336 18.9958 8.17812C18.9958 8.01337 18.9958 8.33419 18.9958 8.17812C19.0009 11.0124 18.094 14.0558 16.0239 16.0478C13.9537 18.0397 11.0086 19.0384 8.09899 18.9989C6.41686 19.0044 4.65485 18.7393 3.14589 18.0152C3.06452 17.9805 3.14558 18.1017 3.14589 18.0152C3.14589 17.8907 3.01806 17.0315 3.14589 17.0315C4.79938 16.9783 6.78907 17.0319 8.09899 16.0478C6.60235 16.0183 5.74685 14.4239 5.12713 13.0966C5.07985 13.1604 5.09584 13.0242 5.12713 13.0966C5.04664 13.0905 5.1744 13.0329 5.12713 13.0966C5.58199 13.1411 5.67889 13.2213 6.11775 13.0966C4.46558 12.7628 3.32356 11.7799 3.14589 10.1455C3.13958 10.0671 3.08043 9.20792 3.14589 9.16182C3.07146 9.13125 3.21134 9.11582 3.14589 9.16182C3.58925 9.3523 4.64257 10.1416 5.12713 10.1455C3.67944 9.22052 2.59517 6.82585 3.14589 5.22701C3.20274 5.07165 3.97039 5.25901 4.13651 5.22701C4.02322 5.10442 4.30262 5.195 4.13651 5.22701C6.09008 7.25118 9.21258 9.02793 12.0615 9.16182C11.9886 8.87834 11.0689 8.47038 11.0708 8.17812C11.0975 6.64566 12.5774 4.80203 14.0427 4.2433C15.5079 3.68458 16.9174 4.11946 18.0052 5.22701C18.7466 5.08949 19.3171 4.58301 19.9864 4.2433C20.0355 4.2135 20.928 4.2135 20.977 4.2433C21.0077 4.29106 21.0077 5.17925 20.977 5.22701C20.6528 5.94982 19.6906 5.80559 18.9958 6.21071C19.6042 6.14201 20.4028 6.41848 20.977 6.21071C21.0254 6.17867 20.9287 6.17867 20.977 6.21071C21.0176 6.22875 20.9651 6.16894 20.977 6.21071C21.002 6.17481 20.989 6.25248 20.977 6.21071Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_12">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_16)">
                <path d="M23 4H2V21H23V4Z" fill="#101111" />
                <path
                  d="M19.9316 5.0115C18.6051 4.36025 17.4547 4.28786 15.9675 4.01305C15.9404 4.00775 14.9904 3.98654 14.9764 4.01305C14.7935 4.3612 15.1182 4.65451 14.9764 5.0115C13.3768 4.75525 11.5881 4.75525 10.0213 5.0115C9.87935 4.64657 10.205 4.3612 10.0213 4.01305C10.0073 3.98743 9.05733 4.00863 9.03024 4.01305C7.54383 4.28699 6.39341 4.35937 5.06612 5.0115C5.05463 5.0168 5.07266 5.00003 5.06612 5.0115C2.36807 9.32457 1.73045 13.8365 2.09303 17.9914C2.07826 17.9792 2.09468 18.0117 2.09303 17.9914C3.87313 19.3902 5.35587 20.4239 7.04818 20.9868C7.03094 21.0107 7.07527 20.9956 7.04818 20.9868C7.4485 20.4019 8.72428 19.6385 9.03024 18.9899C9.0483 18.9519 8.07612 19.0049 8.03921 18.9899C7.4732 18.7602 7.56663 18.3095 7.04818 17.9914C7.00717 17.9658 7.01045 18.0215 7.04818 17.9914C6.94401 18.0833 7.15728 17.904 7.04818 17.9914C7.02602 17.9808 7.06703 17.9746 7.04818 17.9914C10.4541 19.6553 14.5838 19.6553 17.9495 17.9914C17.9298 17.9747 17.9716 17.98 17.9495 17.9914C17.8396 17.904 18.0537 18.0834 17.9495 17.9914C17.9873 18.0215 17.9905 17.9658 17.9495 17.9914C17.4311 18.3156 17.5254 18.7611 16.9585 18.9899C16.9216 19.0049 15.9494 18.9519 15.9675 18.9899C16.28 19.6376 17.5566 20.4018 17.9495 20.9868C17.9225 20.9956 17.966 21.0115 17.9495 20.9868C19.65 20.4239 21.1245 19.3902 22.9047 17.9914C22.903 18.0118 22.9202 17.9792 22.9047 17.9914C23.3385 13.188 22.2818 8.71045 19.9316 5.0115C19.9431 5.0168 19.9258 4.99914 19.9316 5.0115ZM9.03024 15.9945C8.00481 15.9945 7.04818 14.2363 7.04818 12.9992C7.04818 11.7621 7.98843 11.0022 9.03024 11.0022C10.0802 11.0022 11.0287 11.7709 11.0123 12.9992C11.0123 14.2363 10.072 15.9945 9.03024 15.9945ZM15.9675 15.9945C14.942 15.9945 13.9854 14.2363 13.9854 12.9992C13.9854 11.7621 14.9257 11.0022 15.9675 11.0022C17.0175 11.0022 17.9659 11.7709 17.9495 12.9992C17.9495 14.2363 17.0175 15.9945 15.9675 15.9945Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_16">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>

        <div className="border-t border-white/20 mt-24">
          <div className="flex flex-col-reverse md:flex-row items-center justify-center space-x-0 md:space-x-9 space-y-6 md:space-y-0 mt-9 text-white/75">
            <a href="#" className="mt-7 md:mt-0">
              © 2021 CryptoPunks. All right reserved.
            </a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
