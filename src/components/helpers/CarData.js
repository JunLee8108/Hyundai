import ioniq from "../../assets/hyundai-ioniq-model.webp";
import kona from "../../assets/kona-ev.webp";
import sonata from "../../assets/sonata.webp";
import tucson from "../../assets/tucson-hb.webp";

import buildKona from "../../assets/build-kona.png";
import buildKonaWhite from "../../assets/build-kona-white.webp";
import buildKonaRed from "../../assets/build-kona-red.png";
import buildIoniq from "../../assets/build-ioniq6.webp";
import buildIoniqRed from "../../assets/build-ioniq-red.png";
import buildIoniqWhite from "../../assets/build-ioniq-white.png";
import buildSonata from "../../assets/build-sonata.webp";
import buildSonataRed from "../../assets/build-sonata-red.webp";
import buildSonataWhite from "../../assets/build-sonata-white.webp";
import buildTucson from "../../assets/build-tucson.webp";
import buildTucsonWhite from "../../assets/build-tucson-white.webp";
import buildTucsonBlue from "../../assets/build-tucson-blue.webp";

const carImage = [ioniq, kona, sonata, tucson];
const carName = [
  "2023 IONIQ 6",
  "2023 KONA ELECTRIC",
  "2023 SONATA HYBRID",
  "2023 TUCSON HYBRID",
];
const carType = [
  "Electric Sedan",
  "Electric SUV",
  "Hybrid Sedan",
  "Modern Compact SUV",
];
const carPrice = ["41,600", "33,550", "28,250", "31,350"];
const carMiles = ["361", "258", "54", "38"];
const carPower = ["320", "201", "192", "226"];
const carWheel = ["20", "17", "17", "HTRAC AWD"];
const milesOrMPG = ["miles", "MPG Hwy"];
const available = [" inch wheels", null];

const carAllData = [
  {
    id: 0,
    img: ioniq,
    buildImg: [buildIoniq, buildIoniqRed, buildIoniqWhite],
    name: "2023 IONIQ 6",
    type: "Electric Sedan",
    price: "41,600",
    miles: "361",
    power: "320",
    wheel: "20",
    trim: ["SE", "SL", "Limited"],
    SEKey: [
      "RWD: Estimated 361-mile All-Electric",
      "Ultra-fast charging",
      "12.3-inch touchscreen display with navigation⁠",
      "RWD: 168 kW (225 hp) / Dual-Motor",
      "18-inch alloy wheels",
      "12.3-inch digital instrument cluster",
    ],
    SELKey: [
      "RWD: Estimated 305-mile All-Electric",
      "20-inch alloy wheels",
      "Wireless device charging",
      "RWD: 168 kW (225 hp) / Dual-Motor",
      "HIghway Driving Assist II (HDA II)",
      "Hyundai Digital Key 2.0 Touch",
    ],
    LimitedKey: [
      "RWD: Estimated 305-mile All-Electric",
      "Premium Remote Smart Parking Assist",
      "Wide sunroof",
      "RWD: 168 kW (225 hp) / Dual-Motor",
      "Blind-Spot View Monitor (BVM)",
      "Bose Premium Audio",
    ],
  },

  {
    id: 1,
    img: kona,
    buildImg: [buildKona, buildKonaRed, buildKonaWhite],
    name: "2023 KONA ELECTRIC",
    type: "Electric SUV",
    price: "33,550",
    miles: "258",
    power: "201",
    wheel: "17",
    trim: ["SE", "SL", "Limited"],
    SEKey: [
      "258-mile EPA-est. range",
      "8-inch color touchscreen display audio",
      "Wireless Android Auto™ integration for your Android phone",
      "150-kW (201-hp) electric motor",
      "Wireless Apple CarPlay® integration for your iPhone®",
      "Safe Exit Warning (SEW)",
    ],
    SELKey: [
      "258-mile EPA-est. range",
      "10.25-inch touchscreen navigation",
      "Wireless device charging",
      "150-kW (201-hp) electric motor",
      "Power sunroof",
      "Hyundai Digital Key",
    ],
    LimitedKey: [
      "258-mile EPA-est. range⁠",
      "Harman Kardon® premium audio",
      "Heated steering wheel",
      "150-kW (201-hp) electric motor",
      "Smart Cruise Control (SCC) with Stop & Go",
      "Leather-trimmed seats",
    ],
  },

  {
    id: 3,
    img: tucson,
    buildImg: [buildTucson, buildTucsonBlue, buildTucsonWhite],
    name: "2023 TUCSON HYBRID",
    type: "Modern Compact SUV",
    price: "31,350",
    miles: "38",
    power: "226",
    wheel: "HTRAC AWD",
    trim: ["Blue", "SEL", "Limited"],
    SEKey: [
      "38 Combined, 38 City/ 38 Highway",
      "Blind-Spot Collision-Avoidance Assist (BCA)",
      "Hyundai Digital Key",
      "1.6L turbocharged GDI 4-cylinder Hybrid engine",
      "Smart Cruise Control (SCC) with Stop & Go",
      "HTRAC All Wheel Drive",
    ],
    SELKey: [
      "37 Combined, 37 City/ 36 Highway",
      "19-inch alloy wheels",
      "10.25-inch touchscreen navigation",
      "1.6L turbocharged GDI 4-cylinder Hybrid engine",
      "Panoramic sunroof",
      "HTRAC All Wheel Drive",
    ],
    LimitedKey: [
      "37 Combined, 37 City/ 36 Highway⁠",
      "Surround View Monitor (SVM)",
      "Remote Smart Parking Assist (RSPA)",
      "1.6L turbocharged GDI 4-cylinder Hybrid engine",
      "Blind-Spot View Monitor (BVM)",
      "HTRAC All Wheel Drive",
    ],
  },

  {
    id: 2,
    img: sonata,
    buildImg: [buildSonata, buildSonataRed, buildSonataWhite],
    name: "2023 SONATA HYBRID",
    type: "Hybrid Sedan",
    price: "28,250",
    miles: "54",
    power: "192",
    wheel: "17",
    trim: ["Blue", "SEL", "Limited"],
    SEKey: [
      "52 MPG Combined, 50 City/54 Hwy",
      "Forward Collision-Avoidance Assist with Pedestrian Detection (FCA-Ped)",
      "8-inch color touchscreen display audio",
      "192-hp gas/electric combined⁠",
      "Blind-Spot Collision-Avoidance Assist (BCA)",
      "Bluelink® Connected Car System",
    ],
    SELKey: [
      "47 MPG Combined, 45 City/51 Hwy⁠⁠",
      "Hyundai Digital Key",
      "10.25-inch touchscreen navigation",
      "192-hp gas/electric combined⁠",
      "17-inch alloy wheels",
      "Bose Premium Audio",
    ],
    LimitedKey: [
      "47 MPG Combined, 45 City/51 Hwy",
      "Panoramic sunroof",
      "Remote Smart Parking Assist (RSPA)",
      "192-hp gas/electric combined⁠",
      "12.3-inch fully digital gauge cluster",
      "Blind-Spot View Monitor (BVM)",
    ],
  },
];

export {
  carImage,
  carName,
  carType,
  carPrice,
  carMiles,
  carPower,
  carWheel,
  milesOrMPG,
  available,
  carAllData,
};
