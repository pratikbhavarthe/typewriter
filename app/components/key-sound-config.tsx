import { useContext } from "react";
import { TypewriterContext } from "../contexts/typewriter-context";

export default function KeySoundSelect() {
  const { keySound, setKeySound } = useContext(TypewriterContext);

  const playAudio = (sound: string) => {
    const audio = new Audio(`/sounds/${sound}`);
    audio.volume = 0.4;
    audio.play();
  };

  const handleKeySoundChange = (sound: "subtle" | "heavy") => {
    setKeySound(sound);
    playAudio(sound === "subtle" ? "key-subtle.wav" : "key-hard.wav");
  };

  return (
    <div className="key-sound-select-container fixed top-4 right-4 p-2 bg-gray-300 gap-2 flex items-center justify-end rounded-lg">
      <KeySoundOption
        selected={keySound === "subtle"}
        onClick={() => handleKeySoundChange("subtle")}
      >
        Subtle
      </KeySoundOption>
      <KeySoundOption
        selected={keySound === "heavy"}
        onClick={() => handleKeySoundChange("heavy")}
      >
        Heavy
      </KeySoundOption>
      <TypewriterReset />
    </div>
  );
}

function KeySoundOption({ selected, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { selected: boolean }) {
  return (
    <button
      className={`text-xs px-4 py-2 rounded-md shadow-sm transition-all ${selected ? "bg-blue-500 text-white" : "bg-white text-gray-800"}`}
      {...props}
    />
  );
}

function TypewriterReset() {
  const { content, setContent, setIsTypearea } = useContext(TypewriterContext);

  const resetContent = () => {
    const resetAudio = new Audio('/sounds/typewriter-reset-bell.wav');
    resetAudio.volume = 0.4;
    resetAudio.play();
    setContent('');
    setIsTypearea(false);
    setTimeout(() => setIsTypearea(true), 100);
  };

  return (
    <button
      className="text-xs px-4 py-2 rounded-md shadow-sm text-white bg-gray-800 hover:scale-95 transition-all active:scale-90 disabled:opacity-30 disabled:cursor-not-allowed"
      onClick={resetContent}
      disabled={!content}
    >
      Clear
    </button>
  );
}
