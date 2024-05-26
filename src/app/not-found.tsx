import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>404 Page Not Found</h1>
      <Link href="/">
          <Button>Go Home</Button>
      </Link>
    </main>
  );
}
