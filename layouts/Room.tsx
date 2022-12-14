import Head from 'next/head';
// import Header from 'components/header';
import { useRouter } from 'next/router';
import Navbar from '../src/components/Navbar/Navbar';

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
}
 const MainPage = ({ children, title = 'Next.js Ecommerce' }: LayoutType) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="app-main">
      <Head>
        <title>{ title }</title>
      </Head>
      <Navbar />
      <main className={(pathname !== '/' ? 'main-page' : '')}>
        { children }
      </main>
    </div>
  )
}

export default MainPage