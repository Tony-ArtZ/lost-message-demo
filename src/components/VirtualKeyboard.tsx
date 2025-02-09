import { FC } from 'react';

interface VirtualKeyboardProps {
  onKeyPress: (key: string) => void;
  onEnter: () => void;
  onBackspace: () => void;
}

const VirtualKeyboard: FC<VirtualKeyboardProps> = ({ onKeyPress, onEnter, onBackspace }) => {
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫'],
  ];

  return (
    <div className="w-full max-w-3xl mx-auto mt-4">
      {rows.map((row, i) => (
        <div key={i} className="flex justify-center gap-1 my-1">
          {row.map((key) => (
            <button
              key={key}
              onClick={() => {
                if (key === 'ENTER') onEnter();
                else if (key === '⌫') onBackspace();
                else onKeyPress(key);
              }}
              className={`${
                key === 'ENTER' || key === '⌫' ? 'px-3 w-auto' : 'w-8 sm:w-10'
              } h-12 flex items-center justify-center text-sm sm:text-base font-bold bg-vintage-frame-dark text-vintage-paper rounded hover:bg-vintage-frame-light transition-colors duration-200`}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default VirtualKeyboard;
