import { ModeToggle } from "@/components/toggle-theme";
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ModeToggle></ModeToggle>
      <Link href={'/'}>Home</Link>
    </div>
  );
}
