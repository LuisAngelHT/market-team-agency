import { useEffect, useRef, useState, useCallback } from "react";
import { VolumeX, Pause, Play } from "lucide-react";

const VslPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showAlert, setShowAlert] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onCanPlay = () => {
      setIsReady(true);
      video.play().catch(() => {});
    };

    const onTimeUpdate = () => {
      if (video.duration > 0 && hasClicked) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const onEnded = () => {
      if (hasClicked) setProgress(100);
    };

    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", onEnded);

    return () => {
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended", onEnded);
    };
  }, [hasClicked]);

  const handleClick = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!hasClicked) {
      setShowAlert(false);
      setHasClicked(true);
      video.currentTime = 0;
      video.muted = false;
      video.volume = 1;
      video.play();
      setProgress(0);
    }
  }, [hasClicked]);

  const togglePause = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video || !hasClicked) return;

    if (video.paused) {
      video.play();
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
    }
  }, [hasClicked]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-2xl border border-border bg-black cursor-pointer select-none"
      onClick={handleClick}
    >
      <div className="aspect-video w-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/sample-vsl.mp4"
          muted
          playsInline
          preload="auto"
        />
      </div>

      {showAlert && isReady && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div
            className="flex flex-col items-center gap-2 rounded-xl px-8 py-5 animate-pulse"
            style={{ background: "rgba(220, 60, 40, 0.92)" }}
          >
            <VolumeX className="h-10 w-10 text-[hsl(0,0%,100%)]" />
            <p className="text-[hsl(0,0%,100%)] font-bold text-base sm:text-lg" style={{ fontFamily: "'Hind', sans-serif" }}>
              Tu video ya ha comenzado
            </p>
            <p className="text-[hsl(0,0%,100%)]/90 text-sm" style={{ fontFamily: "'Hind', sans-serif" }}>
              Haz clic para escuchar
            </p>
          </div>
        </div>
      )}

      {/* Pause button - only visible after click */}
      {hasClicked && (
        <button
          onClick={togglePause}
          className="absolute bottom-4 left-4 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-[hsl(0,0%,100%)] backdrop-blur-sm transition-opacity hover:bg-black/80"
        >
          {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </button>
      )}

      {/* Progress bar - only visible after click */}
      {hasClicked && (
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/60 z-30">
          <div
            className="h-full transition-all duration-300 ease-linear"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #e53e3e, #c53030)",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default VslPlayer;
