/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{html,js}',],
  theme: {
    extend: { 
      width:{
        '1400':'1400px',
        '300':'300px',
        '131':'131px',
        '80':'80px',
        '63':'63px',
        '58-73':'58.73px',
        '576':'576px',
        '1200':'1200px',
        '1264':'1264px',
        '160':'160px',
        '1248':'1248px',
        '148':'148px',
        '434':'434px',
        '1064':'1064px',
        '668.05':'668.05px',
        '144':'144px',
        

      },
      height:{
      '24':'24px',
      '72':'72px',
      '27':'27px',
      '93':'93px',
      '185':'185px',
      '361':'361px',
      '8':'8px',
      '446':'446px',
      '678':'678px',
      '23':'23px',
      '32':'32px',
      '47':'47px',
      '48':'48px',
      '80':'80px',
      '127':'127px',
      '207':'207px',
      '404.37':'404.37px',
      '659':'659px',
      '825':'825px',
      '79':'79px',
      '2222':'2222px',
      '29.58':'29.58px',
      '343':'343px',






      },
      colors: {
        'custom-gray': '#F7F7F7',
        'custom-black': '#1D1D1B',
        'custom-blue':'#0147FF',
      },
      backgroundImage: {
        'custom-shape': "url('../img/Element.png')",
      },
      margin:{
        'custom-35':'35rem',
        'custom-30':'-35rem',
        '600':'600px',
        '680':'680px',
        '650':'750px',
        '570':'500px',
        '1200':'1200px',
        '71':'195px',
        '450':'450px',
        '22':'22px',
      },
      padding:{
        '6':'6px',
        '88':'88px',

      },
      top: {
        '-600': '-600px',
      },
      left: {
        '-285': '-285px',
      },
      fontSize:{
        '4xl': '3.441rem',
        '21-5': '21.5px',
        '40': '40px',
        '15':'15px',
        '25':'25px',
        '14':'14px',
      },
      borderWidth:{
        'custom':'0px 0px 1px 0px',

      },
      borderColor:{
        'b_color':'#0147FF',
      },
      fontFamily: {
        'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
        'bebas-neue': ['"Bebas Neue"', 'sans-serif'],
        'roboto-flex':['"Roboto Flex"', 'sans-serif'],
        'bebas neue':['Bebas Neue"', 'sans-serif'],
        'robotoCondensed': ['"Roboto Condensed"', 'sans-serif'],
      },
      
      fontWeight: {
        '400': '400',
        '600':'600',
      },
      lineHeight: {
        '32-25': '32.25px',
        '48px': '48px',
        '22-5':'22.5',
        '37-5':'37.5',
        '21':'21px',
      },
      textAlign: {
        'center': 'center',
        'left': 'left',
      },
      letterSpacing: {
        '-0-02em': '-0.02em',
        '-0-03em':'-0.03em',
    },
      
    },
  },
  plugins: [],
}

