import Head from 'next/head'

import PageLayout from 'components/PageLayout'
import Header from 'components/home/Header'
import Footer from 'components/home/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Testing Playwright and Jest with NextJS</title>
        <meta name="description" content="Testing Playwright" />
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
