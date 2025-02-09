import Link from "next/link";
import DetectiveWordle from "../components/DetectiveWordle";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-vintage-dark text-vintage-paper">
      <h1 className="text-4xl font-bold text-vintage-paper/90">
        Lost Messages: Demo
      </h1>
      <DetectiveWordle />
      <Link
        href="https://kiitfest.org/dashboard/events?event=914433c3-15bd-451b-9d24-c65a3174fc53"
        className="px-8 py-3 bg-vintage-frame-dark text-vintage-paper rounded-lg hover:bg-vintage-frame-light transition-colors duration-300 text-lg font-semibold"
      >
        Register For the Event
      </Link>
    </div>
  );
}
