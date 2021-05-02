import Head from 'next/head'

import PageLayout from 'components/PageLayout'
import Header from 'components/info/Header'
import Footer from 'components/home/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Info page</title>
        <meta name="description" content="Info about testing Playwright" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout
        header={<Header/>}
        footer={<Footer/>}
      >
        <section>
          <h2>Section title</h2>
          <p>Some text here</p>
        </section>
      </PageLayout>
    </>
  )
}
