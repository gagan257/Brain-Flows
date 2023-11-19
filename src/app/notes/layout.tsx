import NavBar from "./NavBar";
import NextTopLoader from "nextjs-toploader";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="p-4 max-w-7xl m-auto">
        <NextTopLoader color="black" showSpinner={false} />
        {children}
      </main>
    </>
  );
}
