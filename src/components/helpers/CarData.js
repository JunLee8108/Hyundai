import ioniq from "../../assets/hyundai-ioniq-model.webp";
import kona from "../../assets/kona-ev.webp";
import sonata from "../../assets/sonata.webp";
import tucson from "../../assets/tucson-hb.webp";

import buildYourOwnKona from "../../assets/kona-build-your-own.webp";
import buildKona from "../../assets/build-kona.webp";
import buildKonaWhite from "../../assets/build-kona-white.webp";
import buildKonaRed from "../../assets/build-kona-red.webp";
import buildKonaBlue from "../../assets/build-kona-blue.webp";
import detailKona from "../../assets/detail-kona-bg.webp";
import konaGallery1 from "../../assets/car-detail-gallery/kona-detail-1.webp";
import konaGallery2 from "../../assets/car-detail-gallery/kona-detail-2.webp";
import konaGallery3 from "../../assets/car-detail-gallery/kona-detail-3.webp";
import konaGallery4 from "../../assets/car-detail-gallery/kona-detail-4.webp";
import konaGallery5 from "../../assets/car-detail-gallery/kona-detail-5.webp";
import konaGallery6 from "../../assets/car-detail-gallery/kona-detail-6.webp";

import buildYourOwnIoniq from "../../assets/ioniq6-build-your-own.webp";
import buildIoniq from "../../assets/build-ioniq6.webp";
import buildIoniqRed from "../../assets/build-ioniq-red.webp";
import buildIoniqWhite from "../../assets/build-ioniq-white.webp";
import buildIoniqSilver from "../../assets/build-ioniq-silver.webp";
import detailIoniq from "../../assets/detail-ioniq-bg.webp";
import ioniqGallery1 from "../../assets/car-detail-gallery/ioniq-detail-1.webp";
import ioniqGallery2 from "../../assets/car-detail-gallery/ioniq-detail-2.webp";
import ioniqGallery3 from "../../assets/car-detail-gallery/ioniq-detail-3.webp";
import ioniqGallery4 from "../../assets/car-detail-gallery/ioniq-detail-4.webp";
import ioniqGallery5 from "../../assets/car-detail-gallery/ioniq-detail-5.webp";
import ioniqGallery6 from "../../assets/car-detail-gallery/ioniq-detail-6.webp";

import buildYourOwnSonata from "../../assets/sonata-build-your-own.webp";
import buildSonata from "../../assets/build-sonata.webp";
import buildSonataRed from "../../assets/build-sonata-red.webp";
import buildSonataWhite from "../../assets/build-sonata-white.webp";
import buildSonataSilver from "../../assets/build-sonata-silver.webp";
import detailSonata from "../../assets/detail-sonata-bg.webp";
import sonataGallery1 from "../../assets/car-detail-gallery/sonata-detail-1.webp";
import sonataGallery2 from "../../assets/car-detail-gallery/sonata-detail-2.webp";
import sonataGallery3 from "../../assets/car-detail-gallery/sonata-detail-3.webp";
import sonataGallery4 from "../../assets/car-detail-gallery/sonata-detail-4.webp";
import sonataGallery5 from "../../assets/car-detail-gallery/sonata-detail-5.webp";
import sonataGallery6 from "../../assets/car-detail-gallery/sonata-detail-6.webp";

import buildYourOwnTucson from "../../assets/tucson-build-your-own.webp";
import buildTucson from "../../assets/build-tucson.webp";
import buildTucsonWhite from "../../assets/build-tucson-white.webp";
import buildTucsonBlue from "../../assets/build-tucson-blue.webp";
import buildTucsonSivler from "../../assets/build-tucson-silver.webp";
import detailTucson from "../../assets/detail-tucson-bg.webp";
import tucsonGallery1 from "../../assets/car-detail-gallery/tucson-detail-1.webp";
import tucsonGallery2 from "../../assets/car-detail-gallery/tucson-detail-2.webp";
import tucsonGallery3 from "../../assets/car-detail-gallery/tucson-detail-3.webp";
import tucsonGallery4 from "../../assets/car-detail-gallery/tucson-detail-4.webp";
import tucsonGallery5 from "../../assets/car-detail-gallery/tucson-detail-5.webp";
import tucsonGallery6 from "../../assets/car-detail-gallery/tucson-detail-6.webp";

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
const available = [" inch wheels", "."];
const trimDescription = [
  "The base trim with lots of great standard features.",
  "The balanced trim with plenty of must-have features.",
  "The premium trim that treats you with high-end features.",
];

const carAllData = [
  {
    id: 0,
    img: ioniq,
    shoppingToolImg: buildYourOwnIoniq,
    buildImg: [buildIoniq, buildIoniqWhite, buildIoniqSilver, buildIoniqRed],
    color: ["black", "white", "silver", "#790001"],
    background: detailIoniq,
    year: "2023",
    name: "IONIQ6",
    description: "The first-ever, all electric",
    detailTable: ["Starting MSRP", "Range Up To", "Up To", "Available"],
    type: "Electric Sedan",
    price: ["45,500", "47,700", "52,600"],
    miles: "361",
    power: "320",
    wheel: "20",
    option: "20 inch wheels",
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
    imgGallery: [
      ioniqGallery1,
      ioniqGallery2,
      ioniqGallery3,
      ioniqGallery4,
      ioniqGallery5,
      ioniqGallery6,
    ],
    engine: "Electrified",
    engineIcon: "⚡",
  },

  {
    id: 1,
    img: kona,
    shoppingToolImg: buildYourOwnKona,
    buildImg: [buildKona, buildKonaWhite, buildKonaBlue, buildKonaRed],
    color: ["black", "white", "#006DB5", "#790001"],
    background: detailKona,
    name: "KONA ELECTRIC",
    description: "Our all-electric small SUV",
    detailTable: ["Starting MSRP", "EPA-est.range", "Power", "Standard"],
    year: "2023",
    type: "Electric SUV",
    price: ["33,550", "37,300", "41,550"],
    miles: "258",
    power: "201",
    wheel: "17",
    option: "17 inch wheels",
    trim: ["SE", "SEL", "Limited"],
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
    imgGallery: [
      konaGallery1,
      konaGallery2,
      konaGallery3,
      konaGallery4,
      konaGallery5,
      konaGallery6,
    ],
    engine: "Electrified",
    engineIcon: "⚡",
  },

  {
    id: 3,
    img: tucson,
    shoppingToolImg: buildYourOwnTucson,
    buildImg: [
      buildTucson,
      buildTucsonWhite,
      buildTucsonSivler,
      buildTucsonBlue,
    ],
    color: ["black", "white", "silver", "#00154D"],
    year: "2023",
    name: "TUCSON HYBRID",
    background: detailTucson,
    description: "All-purpose hybrid SUV",
    detailTable: ["Starting MSRP", "Up To", "Combined", "Standard"],
    type: "Modern Compact SUV",
    price: ["31,350", "34,310", "39,110"],
    miles: "38",
    power: "226",
    wheel: "HTRAC AWD",
    option: "HTRAC AWD",
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
    imgGallery: [
      tucsonGallery1,
      tucsonGallery2,
      tucsonGallery3,
      tucsonGallery4,
      tucsonGallery5,
      tucsonGallery6,
    ],
    engine: "Hybrid",
    engineIcon: <span style={{ color: "#87CEEB" }}>🇭</span>,
  },

  {
    id: 2,
    img: sonata,
    shoppingToolImg: buildYourOwnSonata,
    buildImg: [
      buildSonata,
      buildSonataWhite,
      buildSonataSilver,
      buildSonataRed,
    ],
    color: ["black", "white", "silver", "#790001"],
    year: "2023",
    name: "SONATA HYBRID",
    background: detailSonata,
    description: "The hybrid sedan that reminds you why you love to drive.",
    detailTable: ["Starting MSRP", "Up To", "Combined", "Available"],
    type: "Hybrid Sedan",
    price: ["28,250", "31,600", "36,400"],
    miles: "54",
    power: "192",
    wheel: "17",
    option: "17 inch wheels",
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
    imgGallery: [
      sonataGallery1,
      sonataGallery2,
      sonataGallery3,
      sonataGallery4,
      sonataGallery5,
      sonataGallery6,
    ],
    engine: "Hybrid",
    engineIcon: <span style={{ color: "#87CEEB" }}>🇭</span>,
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
  trimDescription,
};
