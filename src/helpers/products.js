import tablet from '../assets/howItWorks/tablet.png'
import atm from '../assets/howItWorks/atm.png'
import debitCard from '../assets/howItWorks/debit-card.png'
import stats from '../assets/howItWorks/stats.png'

const products = [
  {
    path: '/cashew-farm',
    image: 'cashew',
    title: 'Cashew revival plan',
    shortTitle: 'Cashew farm',

    catchPhrase: 'Own a cashew farm today',
    details: [
      'With 19 Cashew producing states in Nigeria, Ogbomoso Cashew ranks 1st in terms of quality thereby commanding the best price in the country. Owning a Cashew farm in Ogbomoso gives you a higher preference of partnership and trade over other producing states by foreigners who travel from places like India, Germany, Vietnam etc to source for raw ogbomoso cashew nuts during the cashew season.',
      'Our Cashew Revival Plan affords you the opportunity to own at least 1 acre of Cashew farm in our Cashew Revival Park in Ogbomoso without having to go through the stress of getting your hands dirty. We will rightly set up and manage your farm for you and at harvest, use our experience in cashew trade to profitably sell your harvest on your behalf.',
      'At a cost of N950,000, you become a farmland owner and also earn from your harvest sales for up to 40 years; this means while your land appreciates overtime, you earn from the harvest sales of your cashew farm from year 4 up till year 40 when production declines.',
      'See Resources section for detailed Brochure.',
    ],
    resources: ['Brochure', 'MoU', 'FAQ'],
    legalDocs: ['Receipt', 'Certificate of Investment', 'Deed of Assignment'],
    howItWorks: [
      {
        icon: tablet,
        text:'Select your unit options',
      },
      {
        icon: debitCard,
        text:'Make payment',
      },
      {
        icon: stats,
        text: 'Watch your farm grow',
      },
      {
        icon: atm,
        text:'Receive your returns at harvests',
      },
      
     
      
    ],
    detailsComplete: true,

    type: 'productWithoutForm',
  },

  {
    title: 'Cattle ranching investment plan',
    shortTitle: 'Cattle ranching',
    image: 'cattle ranch',
    path: '/cattle-ranch',

    catchPhrase: 'Own a cattle fattening or dairy ranch',
    riderQuote:"Cattle ranches are a good investment now because prices are rising both for cattle and the property on which to raise cattle, the economy is growing and projected to continue growing, and the market for cattle is on track with this growth.",
    details: [
      'Yes! You read right, we want to make you a profitable proud rancher. ',
      "It is clear that cattle rearing practice is currently being scrutinised and reform is inevitable. With these scrutinies and reforms comes one of the biggest opportunities ever in Nigeria's agricultural landscape. ",
      'We have packaged an incredible turn key cattle ranch model for both dairy and fattening. Agriculture has never been this exciting and profitable. ',
    ],
    resources: [],
    legalDocs: [],
    howItWorks: [],
    detailsComplete: false,

    type: 'productWithoutForm',
  },
  {
    title: 'Agricultural institute',
    shortTitle: 'Agricultural institute',

    image: 'agricultural equipments,tractor',
    path: '/agricultural-institute',

    catchPhrase: 'Sharing knowledge',
    details: [
      "Our vision to be the most vital facilitator of the industry led us to conclude that inadequate knowledge and poor practice is the bane of low productivity and profitability in Africa's agriculture industry.",
      'Democratising Knowledge that leads to improved agricultural practice across Africa is the reason for conceiving this Institute. ',
      'Africa has the world best arable land and with adequate knowledge we will feed the world. Our institute will cover diverse areas of agriculture, value addition and trade.',
    ],
    resources: [],
    legalDocs: [],
    howItWorks: [],
    detailsComplete: false,

    type: 'productWithoutForm',
  },
  {
    title: 'Beef processing',
    shortTitle: 'Beef processing',
    
    image: 'beef,cow',
    path: '/beef-processing',

    catchPhrase: 'Hygienic meat preparation',
    details: [
      'The rising sophisticated and health conscious population is already changing our traditional ways of eating and preparing food. ',
      'We believe our current beef processing and marketing system is outdated and unsafe. We are putting resources together to address this challenge by building a modern beef processing and distribution network at a competitive cost for consumers. ',
    ],
    resources: [],
    legalDocs: [],
    howItWorks: [],
    detailsComplete: false,

    type: 'productWithoutForm',
  },
  {
    title: 'Buy or Sell farmlands',
    shortTitle: 'Farmlands',

    path: '/farmlands',
    image: 'farm',

    catchPhrase: 'A helping hand',
    details: [
      "Facilitating agriculture starts for us by solving the first challenge (Safe and Secure Farmlands) for new and veteran farmers. And that's where we started our journey in this industry.",
      'Since 2013, Hastom Properties Limited has acquired and sold over 15,000 acres of dispute-free, affordable, fertile farmlands in Ogbomoso, Oyo State. And now we are set to expand beyond Oyo state to other parts of the country.',
      'Do you have farmland to sell? Fill the form below for our team to contact you:',
    ],
    resources: [],
    legalDocs: [],
    howItWorks: [],
    detailsComplete: false,

    type: 'productWithForm',
  },
];

export default products;