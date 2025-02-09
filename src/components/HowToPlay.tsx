import { FC } from "react";

interface HowToPlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const HowToPlay: FC<HowToPlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-backdrop">
      <div className="vintage-frame max-w-md w-full m-4 p-8">
        <h2 className="text-2xl font-bold text-vintage-paper mb-6">
          How to Play
        </h2>
        <div className="space-y-4 text-vintage-paper">
          <div className="p-4 border-2 border-vintage-paper rounded-lg mb-6 space-y-2">
            <p className="font-bold text-lg text-center">
              All items are hidden in the image above
            </p>
            <p className="text-center">
              1. Click image to inspect closely
              <br />
              2. Find the hidden item
              <br />
              3. Type its name in the boxes below
            </p>
          </div>
          <p>Find the detective&apos;s items by guessing each word:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Guess one item at a time in sequence</li>
            <li>Each item has a different word length</li>
            <li>After each guess, the letters will show:</li>
          </ul>
          <div className="flex gap-2 my-4">
            <div className="bg-correct px-3 py-1 rounded">
              Green: Correct spot
            </div>
            <div className="bg-present px-3 py-1 rounded">
              Yellow: Wrong spot
            </div>
            <div className="bg-absent px-3 py-1 rounded">Gray: Not in word</div>
          </div>
          <p>You have 6 attempts per word. Use hints if needed!</p>
          <p>When you guess correctly, the item will glow in the image.</p>
        </div>
        <button
          onClick={onClose}
          className="w-full mt-6 px-6 py-3 bg-vintage-frame-dark text-vintage-paper rounded-lg hover:bg-vintage-frame-light transition-colors duration-300"
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default HowToPlay;
