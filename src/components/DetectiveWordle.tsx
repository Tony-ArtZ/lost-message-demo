"use client";

import { useState, useEffect } from "react";
import { WordleItem, GameState } from "../types/game";
import Image from "next/image";
import ImageModal from "./ImageModal";
import CompletionModal from "./CompletionModal";
import HowToPlay from "./HowToPlay";

const WORDS: WordleItem[] = [
  {
    word: "CLOCK",
    hint: "Time waits for no detective",
    image: "/clock.png",
    order: 0,
  },
  {
    word: "GLASSES",
    hint: "Helps see the smallest clues",
    image: "/glasses.png",
    order: 1,
  },
  {
    word: "TYPEWRITER",
    hint: "Recording evidence old-school style",
    image: "/typewriter.png",
    order: 2,
  },
  {
    word: "COMPASS",
    hint: "Points to the truth",
    image: "/compass.png",
    order: 3,
  },
  {
    word: "GUN",
    hint: "Protection in dangerous cases",
    image: "/gun.png",
    order: 4,
  },
];

export default function DetectiveWordle() {
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [gameState, setGameState] = useState<GameState>("playing");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const currentWord = WORDS[currentWordIndex];

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (gameState !== "playing") return;

      if (
        e.key === "Enter" &&
        currentGuess.length === currentWord.word.length
      ) {
        submitGuess();
      } else if (e.key === "Backspace") {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (
        currentGuess.length < currentWord.word.length &&
        e.key.match(/^[a-zA-Z]$/)
      ) {
        setCurrentGuess((prev) => (prev + e.key).toUpperCase());
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [currentGuess, gameState, currentWord]);

  const submitGuess = () => {
    if (currentGuess === currentWord.word) {
      if (currentWordIndex === WORDS.length - 1) {
        setGameState("completed");
        setShowCompletionModal(true);
      } else {
        setCurrentWordIndex((prev) => prev + 1);
        setGuesses([]);
      }
    } else if (guesses.length >= 5) {
      setGuesses((prev) => [...prev, currentGuess]);
      setGameState("playing"); // Reset for next word instead of game over
      setCurrentWordIndex((prev) => prev);
      setGuesses([]);
    } else {
      setGuesses((prev) => [...prev, currentGuess]);
    }
    setCurrentGuess("");
  };

  // Add new function to check if word has been solved
  const isWordSolved = (word: WordleItem) => {
    return (
      guesses.includes(word.word) ||
      word.order < currentWordIndex ||
      (word.order === currentWordIndex && gameState === "completed")
    );
  };

  return (
    <div className="w-full max-w-lg mx-auto space-y-8">
      <div className="flex justify-center">
        <button
          onClick={() => setShowHelp(true)}
          className="px-6 py-2.5 text-base bg-vintage-frame-dark text-vintage-paper rounded-lg hover:bg-vintage-frame-light transition-colors duration-300 border border-vintage-paper/20"
        >
          How to Play
        </button>
      </div>

      <div className="vintage-frame">
        <div
          className="relative w-full h-72 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src="/bg.png"
            alt="Background"
            fill
            className="object-contain rounded"
          />
          {WORDS.map((item) => (
            <Image
              key={item.word}
              src={item.image}
              alt={item.word}
              fill
              className={`object-contain transition-all duration-500 ${
                isWordSolved(item)
                  ? "drop-shadow-glow-strong opacity-100 animate-pulse-slow"
                  : "opacity-30"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {guesses.map((guess, i) => (
          <div key={i} className="flex justify-center gap-2">
            {guess.split("").map((letter, j) => (
              <div
                key={j}
                className={`w-14 h-14 border-2 flex items-center justify-center font-bold text-2xl rounded-md transition-all duration-300
                  ${getLetterBackground(letter, j, currentWord.word)}`}
              >
                {letter}
              </div>
            ))}
          </div>
        ))}

        {gameState === "playing" && (
          <div className="flex justify-center gap-2">
            {Array.from({ length: currentWord.word.length }).map((_, i) => (
              <div
                key={i}
                className="w-14 h-14 border-2 border-vintage-frame-light/30 flex items-center justify-center font-bold text-2xl rounded-md bg-vintage-frame-dark/20"
              >
                {currentGuess[i] || ""}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="text-center text-xl font-bold mb-4">
          Item {currentWordIndex + 1} of {WORDS.length}
        </div>
        <button
          onClick={() => setShowHint(!showHint)}
          className="w-full px-6 py-3 bg-vintage-frame-dark text-vintage-paper rounded-lg hover:bg-vintage-frame-light transition-colors duration-300"
        >
          {showHint ? currentWord.hint : "Show Hint"}
        </button>

        {gameState === "completed" && (
          <button
            onClick={() => {
              setGameState("playing");
              setCurrentWordIndex(0);
              setGuesses([]);
            }}
            className="w-full px-6 py-3 bg-vintage-frame-light text-vintage-paper rounded-lg hover:bg-vintage-frame-dark transition-colors duration-300"
          >
            Play Again
          </button>
        )}
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc="/bg.png"
      />

      <CompletionModal
        isOpen={showCompletionModal}
        onClose={() => {
          setShowCompletionModal(false);
          setGameState("playing");
          setCurrentWordIndex(0);
          setGuesses([]);
        }}
      />

      <HowToPlay isOpen={showHelp} onClose={() => setShowHelp(false)} />
    </div>
  );
}

function getLetterBackground(
  letter: string,
  position: number,
  word: string
): string {
  if (word[position] === letter) {
    return "bg-correct text-white";
  }
  if (word.includes(letter)) {
    return "bg-present text-white";
  }
  return "bg-absent text-white";
}
