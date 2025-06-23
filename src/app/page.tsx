import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link href="/hero">
        <div className="border rounded-sm px-3 py-1">Hero Page</div>
      </Link>
    </div>
  );
}
