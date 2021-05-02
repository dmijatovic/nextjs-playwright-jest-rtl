import Head from 'next/head'

import PageLayout from 'components/PageLayout'
import Header from 'components/about/Header'
import AboutContent from 'components/about/Content'
import Footer from 'components/home/Footer'

export default function AboutPage(){
  return(
    <>
    <Head>
      <title>About page</title>
      <meta name="description" content="About testing Playwright" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
    <PageLayout
      header={<Header/>}
      footer={<Footer/>}>
      <AboutContent />
    </PageLayout>
    </>
  )
}