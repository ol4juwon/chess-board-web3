import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import styled from 'styled-components';
import SignInButton from '../components/SignInButton';
import Container from '../components/Container';
// const Container = styled.div`
// width: 80%;
// max-width: 860px;
// margin: 100px auto;
// `
export default function Home() {
  const signInOptions = [
    {
      name: 'Metamask',
      title: 'Sign in with Metamask',
      icon: '/metamask_fox.svg',
      bg: '#438FFE',
      onClick: () => {console.log('metamask')}
    },
    {
      name: 'Coinbase wallet',
      title: 'Sign in with Coinbase wallet',
      icon: '/metamask_fox.svg',
      bg: '',
      onClick: () => {console.log('coinbase')}
    }
  ]
  return (
    <div className={styles.container}>
      <Head>
        <title>Chess</title>
        <meta name="description" content="Chess app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" 
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" 
        crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
    
      <main className={styles.main}>
      <Navbar/>
     <section className={styles.container}>
      <h1 className={styles.heading}>Welcome to Chess Games</h1> 

      <p className={styles.tagLine}>Sign in with your wallet to be able to authenticate and play games</p>
      <div className='my-12 mx-auto'>
      {
        signInOptions.map((opts) => {
      return <SignInButton key={opts.name} title={opts.title} name={opts.name} icon={opts.icon} bg={opts.bg} onClick={() => {console.log("ola")}} />
       
        })
      }
      </div>
      <div className='w-full flex justify-center underline'>
<a className='mx-auto'>
        Show More Options
      </a>
</div>

     </section>


      </main>

     
    </div>
  )
}
