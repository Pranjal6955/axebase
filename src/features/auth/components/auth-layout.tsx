import Image from "next/image";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-muted flex min-h-svh flex-col justify-center items-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center text-lg font-medium"
        >
          <Image
            src="/logos/light_logos.png"
            alt="AxeBase"
            width={55}
            height={55}
          />
          AxeBase
        </Link>
        {children}
      </div>
    </div>
  );
};
export default AuthLayout;
