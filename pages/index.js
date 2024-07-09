import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

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
          Get started shopping at{' '}
          <a
            href="https://featurereviewhub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            FEATUREREVIEWHUB{' '}
            <svg
              className="arrow"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 4L20 12L13 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </p>
      </main>

      <Footer />

      <style jsx>{`
        .link {
          display: inline-flex;
          align-items: center;
          text-decoration: none; /* لإزالة تنسيق الرابط الافتراضي */
          color: inherit; /* لاستخدام لون النص الافتراضي */
        }
        .arrow {
          margin-left: 5px;
          vertical-align: middle;
        }
        .arrow:hover {
          stroke: #0070f3; /* تغيير لون السهم عند التحويم */
        }
      `}</style>
    </div>
  );
}
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to your desired page after 3 seconds (example)
    const timeout = setTimeout(() => {
      router.push('/https://www.youtube.com/'); // Replace with your actual target page URL
    }, 3000); // Redirect after 3 seconds

    // Clean up the timer to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <p>Redirecting...</p>
      {/* You can optionally add a message or spinner here */}
    </div>
  );
}
