// pages/_document.js
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import Script from 'next/script'
interface DocumentProps extends DocumentInitialProps{
  isProduction: boolean;
}
// export default function Document() {
//   return (
//     <Html>
//       <Head>
//       <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
//           integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
//           crossOrigin="anonymous"
//           referrerPolicy="no-referrer"
//         />
//       </Head>
//       <body>
//         <Main />
//         <NextScript>

//             </NextScript>
//             {/* <Script src='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css' ></Script> */}
//       </body>
//     </Html>
//   )
// }
export default class CustonDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentProps>{
      const initialProps = await Document.getInitialProps(ctx);
      const isProduction = process.env.NODE_ENV == 'production';
      return {
        ...initialProps,
        isProduction,
      }
  }
  render(): JSX.Element {

    return(
<html>
  <Head>
         <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
  </Head>
  <body>
    <Main />
    <NextScript />
  </body>
</html>
    );
      
  }
}
