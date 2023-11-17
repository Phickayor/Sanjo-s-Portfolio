import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
        <Head>
      <title>Egbewunmi Olusanjo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*<meta
          name="description"
          content="Discover the coding journey of Olufikayomi Jetawo, a student full-stack developer. From sleek web designs to robust back-end systems, explore my diverse projects. Dive into my technical articles for insights into the evolving tech world. Let's innovate together – welcome to my digital playground!"
        />*/}
        <meta
          name="keywords"
          content="Egbewunmi, Olusanjo ,sanjo tech, sanjo,Egbewunmi Olusanjo Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
