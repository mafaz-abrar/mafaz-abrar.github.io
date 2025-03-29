export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-500 via-white to-pink-500">
      <nav className="bg-black p-6 font-mono">Navbar</nav>
      <main className="flex-grow p-8">
        <div className="mr-20 ml-20">
          <div className="">
            <h1 className="animate-typewrite m-auto overflow-hidden border-r-4 border-r-white text-center font-mono text-5xl font-bold whitespace-nowrap text-white">
              Hi! I&apos;m Mafaz!
            </h1>
          </div>

          <div className="">This is my resume.</div>

          <h2 className="">Experience</h2>

          <p className="text-black">
            Integrated Application Development <br /> July 2023 — Present
          </p>

          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="">Teamwork</div>
          <div className="">Row 3</div>

          <h3 className="text-2xl font-bold">Education</h3>
          <div className="">Swinburne University of Technology</div>
          <div className="">Row 3</div>

          <div className="text-2xl font-bold"></div>
        </div>
      </main>
      <footer className="h-[20vh] bg-black/25 p-6">
        <div className="">footer text</div>
        <div className="">This is my resume!</div>
        <div className="">This is my resume!</div>
      </footer>
    </div>
  );
}
