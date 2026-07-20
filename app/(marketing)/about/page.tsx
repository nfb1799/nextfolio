export const metadata = {
  title: "About",
  description: "About this Next.js learning project.",
}

export default function AboutPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold">About</h1>
            <p className="text-gray-600">This site is my Next.js learning project.</p>
        </div>
    );
}