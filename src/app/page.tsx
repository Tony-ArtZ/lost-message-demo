import Link from "next/link";
import DetectiveWordle from "../components/DetectiveWordle";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-vintage-dark text-vintage-paper">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold  text-vintage-paper/90">
          Lost Messages: Demo
        </h1>
        {/* <div className="font-bold text-sm  text-vintage-paper/80 max-w-md space-y-2">
          <p>
            All items are hidden in the image below. Click the image to magnify
            and inspect closely!
          </p>
          <p className="text-vintage-paper/70">
            Once you spot an item, type its name in the boxes below like Wordle
          </p>
        </div> */}
      </div>
      <DetectiveWordle />
      <div className="space-y-6 text-center">
        <p className="max-w-xl text-vintage-paper/80 leading-relaxed">
          This is just a small puzzle for entertainment. Want to have the
          complete detective experience? Solve a chilling case with interactive
          evidence, uncover hidden clues, experience unexpected twists, and dive
          into an immersive story, then
        </p>
        <Link
          href="https://kiitfest.org/dashboard/events?event=914433c3-15bd-451b-9d24-c65a3174fc53"
          className="inline-block px-8 py-3 bg-vintage-frame-dark text-vintage-paper rounded-lg hover:bg-vintage-frame-light transition-colors duration-300 text-lg font-semibold"
        >
          Register For the Event
        </Link>
      </div>
    </div>
  );
}
