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
