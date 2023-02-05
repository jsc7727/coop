import { Box, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function DraweeInformationAnimation() {
  const { colorMode } = useColorMode();
  const whiteIcon = {
    hidden: {
      pathLength: 0,
      opacity: 0,
      fill:
        colorMode === "light"
          ? "rgba(255, 255, 255, 0)"
          : "rgba(000, 000, 000, 0)",
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      fill: colorMode === "light" ? "#000000" : "#ffffff",
    },
  };
  return (
    <Box w="100%" display={"flex"} justifyContent="center">
      {/* 놀란 얼굴 */}
      <motion.svg viewBox="0 -1.5 256 256" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M96.0369 98.6787C95.376 100.913 94.451 105.443 92.6999 109.626C90.2493 115.482 85.596 119.012 79.0784 118.966C72.5 118.92 67.7199 115.477 65.0682 109.526C61.5342 101.593 61.8592 93.6874 66.6758 86.3573C71.3867 79.1877 83.9898 77.3594 90.8276 82.6032C95.3882 86.0987 95.6834 91.1996 96.0369 98.6787ZM89.6128 96.9045C90.032 92.2031 88.8144 88.4199 85.4951 87.289C81.8385 86.0465 78.1765 82.2531 73.9551 85.5596C69.0878 89.3727 68.07 94.7363 68.4892 101.092C75.0338 95.878 82.0789 95.6992 89.6128 96.9025V96.9045ZM80.0528 101.889L79.6676 101.045C76.8994 102.327 74.0608 103.483 71.4152 104.984C70.7935 105.336 70.3453 107.015 70.631 107.779C72.4329 112.602 79.2429 115.092 83.3166 112.03C85.4598 110.419 86.5812 107.451 88.1637 105.095C85.7984 104.026 83.4386 102.945 81.0605 101.906C80.7285 101.838 80.3868 101.832 80.0528 101.889Z"
            fill={colorMode == "light" ? "#000000" : "#FFF"}
          ></path>{" "}
          <path
            d="M49.6072 64.8085C50.2539 62.2888 50.4259 60.5513 51.1565 59.0941C51.787 57.8359 53.02 56.0523 54.0438 56.0137C55.7559 56.069 57.3775 56.7955 58.5584 58.0364C60.9663 60.7124 60.3265 66.2299 57.3856 68.3182C56.2033 69.1572 53.8428 69.7544 52.8602 69.1308C51.3123 68.1523 50.4753 66.0497 49.6072 64.8085Z"
            fill={colorMode == "light" ? "#000000" : "#FFF"}
          ></path>{" "}
          <path
            d="M109.12 59.4047C108.45 61.753 108.375 63.3598 107.577 64.4358C106.803 65.482 105.187 66.703 104.132 66.5479C103.353 66.3965 102.614 66.0811 101.966 65.6228C101.317 65.1645 100.774 64.5737 100.371 63.8894C99.0165 60.996 98.4971 57.6096 100.862 55.0445C101.803 54.0254 104.79 53.4194 105.645 54.1067C107.331 55.4644 108.181 57.8608 109.12 59.4047Z"
            fill={colorMode == "light" ? "#000000" : "#FFF"}
          ></path>{" "}
          <path
            d="M54.6717 40.2887C52.0864 41.4081 49.5119 42.5524 46.9103 43.6331C46.0629 43.9356 45.1993 44.1909 44.3236 44.3977C44.1462 43.2852 43.5029 41.9734 43.8774 41.0958C45.164 38.0724 47.796 36.5149 50.9759 36.1574C52.9596 35.8411 54.9859 35.9131 56.9422 36.3693C58.1137 36.7154 58.8985 38.3697 59.8574 39.4368C58.7976 40.0023 57.7677 40.6382 56.6639 41.0986C56.1161 41.2097 55.5527 41.221 55.0009 41.1319L54.6717 40.2887Z"
            fill={colorMode == "light" ? "#000000" : "#FFF"}
          ></path>{" "}
          <path
            d="M114.016 39.1274C112.255 38.4712 110.913 37.6377 109.518 37.5307C107.253 37.4657 104.986 37.5584 102.734 37.8083C101.766 37.876 100.808 38.0677 99.8452 38.2038C100.006 36.9625 99.7856 34.9129 100.397 34.6244C102.734 33.5207 105.396 32.2491 107.829 32.4353C110.426 32.6344 112.952 34.3117 115.39 35.5739C115.936 35.8569 116.437 37.3608 116.159 37.8348C115.755 38.5261 114.627 38.7936 114.016 39.1274Z"
            fill={colorMode == "light" ? "#000000" : "#FFF"}
          ></path>{" "}
          <path
            d="M2.85816 56.8154C-4.15166 84.3665 1.98666 108.671 21.1154 129.067C21.6138 129.594 22.121 130.12 22.6288 130.624C32.9039 140.899 45.7026 147.244 55.8443 151.659C60.1963 153.559 82.5306 155.868 88.5728 154.968C124.484 149.605 148.116 129.351 156.347 95.4649C157.919 88.8272 158.702 82.0272 158.679 75.206C158.718 59.1373 151.952 40.4562 137.999 26.465C136.563 25.2779 135.131 24.0468 133.747 22.8551C130.745 20.2738 127.642 17.6026 124.396 15.3233C99.5981 -2.12951 73.8333 -2.22769 47.8187 7.02823C24.2682 15.4032 9.14209 32.1564 2.85816 56.8154ZM47.9196 15.2785C70.7449 5.793 93.6467 4.1191 115.983 18.3256C120.068 20.9259 130.955 29.7268 132.67 31.0479L132.78 31.1299L132.871 31.2301C141.585 40.4711 151.564 57.368 151.344 74.7375C151.271 82.1647 150.266 89.5533 148.351 96.7299C142.677 117.352 129.112 132.382 106.881 142.663C84.2811 153.484 51.8701 142.544 43.2466 136.851C33.715 130.335 25.3749 122.228 18.591 112.885C7.95167 97.8214 5.56406 76.1697 11.2812 56.3753C13.9571 47.2359 18.6332 38.8065 24.9706 31.6983C31.308 24.5901 39.1478 18.9812 47.9216 15.2785H47.9196Z"
            fill={colorMode == "light" ? "#000000" : "#FFF"}
          ></path>
        </g>
      </motion.svg>
      {/* 느낌표 */}
      <motion.svg viewBox="15.0 0 156 156" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <title>exclamation-point</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="invisible_box" data-name="invisible box">
              <rect width="48" height="48" fill="none"></rect>
            </g>
            <g id="icons_Q2" data-name="icons Q2">
              <g>
                <motion.circle
                  animate="visible"
                  initial="hidden"
                  variants={whiteIcon}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                  cx="24"
                  cy="40"
                  r="3"
                ></motion.circle>
                <motion.path
                  d="M23.8,33h.4a2.2,2.2,0,0,0,2.1-2L28,7.3a4,4,0,1,0-8,0L21.7,31A2.2,2.2,0,0,0,23.8,33Z"
                  initial="hidden"
                  variants={whiteIcon}
                  animate="visible"
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                ></motion.path>{" "}
              </g>
            </g>
          </g>
        </g>
      </motion.svg>
      {/* 노트 */}
      <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g clip-path="url(#clip0)">
            <path
              d="M1.77 75.9403C1.77 61.4508 1.80893 46.959 1.74525 32.4724C1.7277 28.3545 1.36971 24.2391 1.243 20.1205C0.910304 9.24447 8.36408 1.26206 19.9368 1.03412C44.0589 0.558703 68.1786 -0.478187 92.3151 0.345657C94.8694 0.432926 97.4341 0.253818 99.9865 0.366486C101.533 0.427783 103.067 0.680246 104.553 1.11808C105.203 1.30689 105.776 1.70079 106.187 2.2414C106.597 2.78201 106.822 3.44053 106.83 4.11966C106.926 5.59347 106.397 6.90065 105.076 7.45162C103.445 8.1232 101.737 8.58846 99.9923 8.83685C98.4413 8.98416 96.8811 8.98716 95.3301 8.8459C75.2081 7.98103 55.0768 8.08262 34.9489 8.44668C29.5141 8.57276 24.0906 9.005 18.7042 9.74138C15.3331 10.1849 12.2485 11.7089 10.9424 15.2693C10.3554 16.7013 10.0373 18.2295 10.004 19.7772C10.1574 25.6738 10.5162 31.5652 10.8053 37.4584C10.9035 39.4617 11.097 41.463 11.1191 43.4663C11.3232 61.7445 11.5974 80.0231 11.6474 98.3027C11.6786 109.67 11.3003 121.037 11.2367 132.405C11.3128 135.406 11.5515 138.401 11.9515 141.377C12.1594 143.388 13.2745 144.618 15.3713 144.829C16.0341 144.894 16.6897 145.122 17.3486 145.122C23.5671 145.127 29.7875 145.199 36.0034 145.057C43.8951 144.876 51.7816 144.32 59.6732 144.265C78.9138 144.135 98.156 144.151 117.397 144.205C122.843 144.221 128.287 144.583 133.733 144.76C135.745 144.894 137.744 144.344 139.404 143.197C141.065 142.05 142.29 140.375 142.882 138.443C143.121 137.714 143.24 136.95 143.234 136.183C143.16 130.285 142.665 124.367 143.003 118.496C144.176 98.1158 144.168 77.7228 144.161 57.3257C144.161 55.2085 144.191 53.0886 144.314 50.9759C144.369 49.7514 144.563 48.5372 144.894 47.357C145.067 46.7019 145.439 46.1173 145.96 45.6846C146.48 45.2518 147.122 44.9925 147.796 44.9427C149.361 44.7603 150.803 45.1616 151.472 46.636C152.143 48.0317 152.567 49.5337 152.727 51.075C153.218 57.8514 153.559 64.6395 153.936 71.4245C155.117 92.7207 153.911 113.988 153.286 135.263C153.175 137.486 152.762 139.684 152.059 141.796C151.42 144 150.273 146.024 148.712 147.703C147.151 149.383 145.218 150.672 143.069 151.467C138.918 153.083 134.498 153.893 130.045 153.853C115.701 153.816 101.356 153.862 87.0121 153.844C81.563 153.838 76.1119 153.619 70.666 153.714C57.772 153.944 44.8809 154.334 31.9877 154.6C26.7634 154.707 21.53 154.828 16.3116 154.643C8.01703 154.349 2.75501 148.868 2.64585 140.454C2.36579 118.95 2.18056 97.4456 1.95703 75.9416L1.77 75.9403Z"
              fill={colorMode == "light" ? "#000000" : "#FFF"}
            ></path>
            <path
              d="M61.8573 92.567C61.969 91.5947 62.1693 90.6341 62.4557 89.6982C64.1094 85.099 65.7699 80.4985 67.6218 75.9775C68.3385 74.3441 69.3008 72.8299 70.475 71.4883C89.4014 48.9894 108.635 26.7664 129.525 6.04649C130.377 5.16797 131.286 4.34584 132.245 3.58533C134.961 1.51498 137.789 1.44934 140.509 3.53207C142.165 4.84379 143.736 6.26011 145.213 7.77241C147.819 10.3573 150.337 13.0293 152.912 15.6441C155.207 17.9737 154.66 20.907 152.892 22.8478C151.469 24.4108 149.942 25.8761 148.437 27.361C130.926 44.6435 113.242 61.756 95.9987 79.3035C91.0902 84.4107 85.4565 88.7637 79.2803 92.2219C76.264 93.8806 73.1619 95.3831 70.0799 96.9194C69.2865 97.3239 68.4529 97.6436 67.5938 97.8748C63.867 98.8367 61.7364 97.1246 61.8573 92.567ZM85.7476 79.3146L131.152 32.2134L124.271 21.8865C108.69 38.6968 93.3573 55.2375 77.7968 72.0263C80.5864 74.5851 83.2498 77.0273 85.745 79.3146H85.7476ZM129.899 16.6959L138.171 25.0582L144.561 19.3706C141.804 16.1319 139.264 13.1479 136.617 10.0381L129.899 16.6959ZM73.7909 78.6704C72.9546 80.6164 72.3314 82.0668 71.7174 83.4969L74.2353 86.3143L78.0769 84.0707L73.7909 78.6704Z"
              fill={colorMode == "light" ? "#000000" : "#FFF"}
            ></path>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="154"
                height="155"
                fill="white"
                transform="translate(0.777344)"
              ></rect>
            </clipPath>
          </defs>
        </g>
      </svg>
    </Box>
  );
}
