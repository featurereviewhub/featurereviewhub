 import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to your desired URL
    window.location.href = 'https://fhfnff.blogspot.com/';

    // Optionally, you can use router.push() instead for client-side routing
    // router.push('https://cash-app99.netlify.app/');
  }, []);

  return (
    <div>
      <p>Redirecting...</p>
      {/* You can optionally add a message or spinner here */}
    </div>
  );
}
