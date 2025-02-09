import Link from "next/link";
import { FC } from "react";

interface CompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CompletionModal: FC<CompletionModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-backdrop">
      <div className="vintage-frame max-w-md w-full m-4 p-8">
        <h2 className="text-3xl font-bold text-vintage-paper mb-6 text-center">
          Case Solved!
        </h2>
        <p className="text-vintage-paper text-lg mb-8 text-center">
          Want to uncover more mysteries? Register for the full detective
          experience!
        </p>
        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 border-2 border-vintage-paper text-vintage-paper rounded-lg hover:bg-vintage-frame-light transition-colors duration-300"
          >
            Play Again
          </button>
          <button className="flex-1 justify-center items-center px-6 py-3 bg-vintage-frame-light text-vintage-paper rounded-lg hover:bg-vintage-frame-dark transition-colors duration-300">
            <Link href="https://kiitfest.org/dashboard/events?event=914433c3-15bd-451b-9d24-c65a3174fc53">
              Register Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletionModal;
