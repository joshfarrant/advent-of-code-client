import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="https://fav.farm/✨" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          async
          defer
          src="https://scripts.withcabin.com/hello.js"
        ></script>
      </body>
    </Html>
  );
}
