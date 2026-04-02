/**
 * Hair Heaven — single source of truth for copy, contact, and content.
 * Edit this file to customize the site for your salon.
 *
 * Images live in `public/images/` and are referenced as `/images/...` (Vite public root).
 */

export const salon = {
  name: 'Hair Heaven',
  /** Used for document title and SEO */
  seoTitle: 'The Hair Heaven | Best Salon in Jaipur',
  /** Full title + address line for search & social previews */
  metaDescription:
    'The Hair Heaven | Best Salon in Jaipur, A-247, Rd Number 2, opposite Raj Homeopathic Clinic, Jai Nagar, Murlipura, Jaipur, Rajasthan 302013. Hair styling, colour, keratin & bridal makeup. Call 096029 66358.',
  tagline: 'Where Style Meets Perfection · Jaipur',
  hero: {
    title: 'Welcome to Hair Heaven',
    subtitle: 'Where Style Meets Perfection',
    primaryCta: 'Book Appointment',
    secondaryCta: 'Explore Services',
    image: '/images/hair_heaven.webp',
    imageAlt: 'Hair Heaven salon — styling and colour in Jaipur',
  },
  contact: {
    phoneDisplay: '096029 66358',
    /** India mobile, digits only (91 + number) for wa.me / tel */
    phoneE164: '919602966358',
    /** Leave empty string to hide email in the footer */
    email: '',
    address:
      'A-247, Rd Number 2, opposite Raj Homeopathic Clinic, Jai Nagar, Murlipura, Jaipur, Rajasthan 302013',
    hours: 'Open · Closes 9:00 pm',
    areasServed: 'Jaipur',
  },
  /**
   * Google Maps — full search string (business name + address) helps find the correct pin.
   * Optional: paste `embedSrc` from Google Maps → Share → Embed a map for a perfect iframe.
   */
  maps: {
    sub: 'Find us in Murlipura — tap for directions in Google Maps.',
    /** Use this exact line for Maps search / embed / directions when lat/lng are not set */
    placeQuery:
      'The Hair Heaven | Best Salon in Jaipur, A-247, Rd Number 2, opposite Raj Homeopathic Clinic, Jai Nagar, Murlipura, Jaipur, Rajasthan 302013',
    embedSrc: '',
    directionsUrl: '',
  },
  /** Link to your Google Business Profile reviews (Share → link from Google Maps) */
  googleBusiness: {
    rating: 4.9,
    reviewCount: 120,
    sub: 'Real reviews from clients who visit us in Jaipur.',
    reviewsUrl:
      'https://www.google.com/maps/search/?api=1&query=The+Hair+Heaven+Jaipur+Murlipura',
  },
  /** Price guide — “starting from” style; edit numbers anytime */
  pricing: {
    heading: 'Price guide',
    sub: 'Starting prices — final quote after hair assessment & consultation.',
    note: 'Prices indicative · GST extra as applicable · subject to change.',
    categories: [
      {
        name: 'Cuts & styling',
        items: [
          { name: "Women's haircut & finish", price: 'from ₹800' },
          { name: "Men's haircut", price: 'from ₹400' },
          { name: 'Blow-dry & styling', price: 'from ₹500' },
        ],
      },
      {
        name: 'Colour & treatments',
        items: [
          { name: 'Global / root colour', note: 'Varies by length', price: 'from ₹2,000' },
          { name: 'Highlights / balayage', note: 'Consultation required', price: 'from ₹3,500' },
          { name: 'Keratin / smoothing', note: 'By hair length', price: 'from ₹5,000' },
        ],
      },
      {
        name: 'Bridal & makeup',
        items: [
          { name: 'Bridal makeup', note: 'Trials available', price: 'from ₹8,000' },
          { name: 'Party / engagement makeup', price: 'from ₹3,500' },
        ],
      },
    ],
  },
  /** Instagram — set url + handle; recentImages = local shots for the grid */
  instagram: {
    handle: '@hairheavenjaipur',
    url: 'https://instagram.com/',
    caption: 'Recent work from our chairs in Jaipur.',
    recentImages: [
      '/images/hair-1.webp',
      '/images/hair-2.webp',
      '/images/hair-3.webp',
      '/images/hair-4.webp',
      '/images/hair_heaven.webp',
      '/images/hair-1.webp',
    ],
  },
  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    tiktok: 'https://tiktok.com/',
    youtube: 'https://youtube.com/',
  },
  services: [
    {
      id: 'styling',
      title: 'Hair Styling',
      description: 'Cuts, blowouts, and editorial looks tailored to your face shape and lifestyle.',
      icon: 'scissors',
      whatsappIntro: "I'd like to book a haircut / styling appointment.",
    },
    {
      id: 'color',
      title: 'Hair Coloring',
      description: 'Balayage, vivids, and seamless blends with premium color lines.',
      icon: 'palette',
      whatsappIntro: "I'd like to book a hair colour consultation / appointment.",
    },
    {
      id: 'keratin',
      title: 'Keratin Treatment',
      description: 'Smooth, frizz-free shine that lasts — healthy hair first.',
      icon: 'sparkles',
      whatsappIntro: "I'd like to book a keratin / smoothing treatment.",
    },
    {
      id: 'bridal',
      title: 'Bridal Makeup',
      description: 'Camera-ready glam and trials so you glow on the big day.',
      icon: 'heart',
      whatsappIntro: "I'd like to book bridal makeup (please share available dates).",
    },
  ],
  about: {
    heading: 'Our Story',
    paragraphs: [
      'Hair Heaven is a Jaipur favourite for cuts, colour, and bridal looks — built on one belief: great hair should feel effortless and deeply personal.',
      'From Murlipura to clients across the city, we blend modern techniques with a warm, welcoming space — so every visit feels like a reset, not a rush.',
    ],
    highlights: [
      { title: 'Expert stylists', detail: 'Trend-led training and precision for Indian hair types.' },
      { title: 'Premium products', detail: 'Trusted professional colour and care lines.' },
      { title: 'Trendy styles', detail: 'From glass hair to lived-in colour — always fresh.' },
    ],
    imageMain: '/images/hair-1.webp',
    imageAccent: '/images/hair-2.webp',
  },
  whyUs: [
    {
      title: 'Experienced stylists',
      description: 'Years on the floor and continuous education — we never stop learning.',
      icon: 'award',
    },
    {
      title: 'Modern techniques',
      description: 'Precision cutting, bespoke color mapping, and damage-smart processes.',
      icon: 'zap',
    },
    {
      title: 'Hygienic environment',
      description: 'Hospital-grade sanitation between every guest, always.',
      icon: 'shield',
    },
    {
      title: 'Personalized styling',
      description: 'Consultations that listen — your hair goals drive every decision.',
      icon: 'user',
    },
  ],
  gallery: [
    { id: 1, src: '/images/hair-1.webp', alt: 'Hair Heaven — salon work' },
    { id: 2, src: '/images/hair-2.webp', alt: 'Colour and style' },
    { id: 3, src: '/images/hair-3.webp', alt: 'Hair transformation' },
    { id: 4, src: '/images/hair-4.webp', alt: 'Finished look' },
    { id: 5, src: '/images/hair_heaven.webp', alt: 'Hair Heaven Jaipur' },
    { id: 6, src: '/images/hair-5.jpg', alt: 'Elegant bridal hairstyle with long waves, braids, and floral hair accessories' },
  ],
  /** Real Google reviews (names & text as shared) */
  testimonials: [
    {
      name: 'Vishnu Saini',
      role: 'Local Guide · Google review · 9 months ago',
      text: "I recently got a haircut at Hair Heaven and I must say, I'm really impressed! The staff was friendly and the stylist took time to understand what I wanted. They suggested a style that suits my face shape and hair type, and the final look was even better than expected. Definitely coming back again!",
      rating: 5,
    },
    {
      name: 'Ankit Soni',
      role: 'Google review · 1 year ago',
      text: 'It is good place for hair cut and shaving specially the head massage is fantastic.you have to give a chance to bhaiya .He will ansure ,you will get a pleasure of facial beauty',
      rating: 5,
    },
    {
      name: 'Raj Saini',
      role: 'Google review · 1 year ago',
      text: 'I recently visited the hair heaven salon and had the pleasure of getting my hair by jeevan sr.. he was so polite and also truly an expert at his craft... And the staff is very cooperative and ambience is too good ... All the services are available here according to your needs... And requirements ... I think This salon is one of the best place ... ..',
      rating: 5,
    },
    {
      name: 'Munmun Choudhary',
      role: 'Google review · 1 year ago',
      text: 'Firstly I am very grateful for your services, especially thanks to Shivangi Mam for my makeup schedules, she gave me a very good makeup package in a reasonable budget and for 1 month SHE gave me time to time reminders to keep my face hydrated. Another thank you to Jeevan sir who gave me NANOPASTIA (hair treatment). As a bride my day was made very special, each and everything was perfect and the coordination or behavior of the entire team was also great.',
      rating: 5,
    },
    {
      name: 'Vaibhav Gupta',
      role: 'Local Guide · Google review · 2 years ago',
      text: 'Nice Salon with great service at attractive prices. You will feel delighted as their customer.',
      rating: 5,
    },
  ],
  booking: {
    heading: 'Book Your Visit',
    sub: 'Tell us what you need — we will confirm by WhatsApp within the day.',
    formLabels: {
      name: 'Your name',
      phone: 'Phone number',
      service: 'Choose a service',
    },
    whatsappLabel: 'Send on WhatsApp',
    submitLabel: 'Send request',
  },
};
