 import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to your desired URL
    window.location.href = 'https://mail.google.com/';

    // Optionally, you can use router.push() instead for client-side routing
    // router.push('https://mail.google.com/');
  }, []);

  return (
    <div>
      <p>Redirecting...</p>
      {/* You can optionally add a message or spinner here */}
    </div>
  );
}
