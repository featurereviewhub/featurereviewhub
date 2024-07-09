import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="HEY!" />
        <p className="description">
          Get started shopping at 
          <a href="https://featurereviewhub.com" className="link">
            FEATUREREVIEWHUB
            <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 4L20 12L13 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </p>
      </main>

      <Footer />
      <style jsx>{`
        .link {
          display: inline-flex;
          align-items: center;
        }
        .arrow {
          margin-left: 5px;
        }
      `}</style>
    </div>
  )
}
