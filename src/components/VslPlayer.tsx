import { useEffect, useRef, useState, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

const YOUTUBE_VIDEO_ID = "6H8jMHyvDbk";

const VslPlayer = () => {
  const playerRef = useRef<YT.Player | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const [showAlert, setShowAlert] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Load YT API
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      initPlayer();
      return;
    }
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
    (window as any).onYouTubeIframeAPIReady = () => initPlayer();
    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, []);

  const initPlayer = () => {
    playerRef.current = new YT.Player("vsl-yt-player", {
      videoId: YOUTUBE_VIDEO_ID,
      playerVars: {
        autoplay: 1,
        controls: 0,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        mute: 1,
        playsinline: 1,
        disablekb: 1,
        fs: 0,
        iv_load_policy: 3,
      },
      events: {
        onReady: (e: YT.PlayerEvent) => {
          setIsReady(true);
          setDuration(e.target.getDuration());
          e.target.playVideo();
          startProgress();
        },
        onStateChange: (e: YT.OnStateChangeEvent) => {
          if (e.data === YT.PlayerState.ENDED) {
            setProgress(100);
            if (progressInterval.current) clearInterval(progressInterval.current);
          }
        },
      },
    });
  };

  const startProgress = () => {
    if (progressInterval.current) clearInterval(progressInterval.current);
    progressInterval.current = setInterval(() => {
      const p = playerRef.current;
      if (p && p.getDuration) {
        const cur = p.getCurrentTime();
        const dur = p.getDuration();
        if (dur > 0) setProgress((cur / dur) * 100);
      }
    }, 500);
  };

  const handleClick = useCallback(() => {
    if (!playerRef.current) return;
    setShowAlert(false);
    playerRef.current.seekTo(0, true);
    playerRef.current.unMute();
    playerRef.current.setVolume(100);
    playerRef.current.playVideo();
    setProgress(0);
    startProgress();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-2xl border border-border bg-black cursor-pointer select-none"
      onClick={handleClick}
    >
      {/* YouTube iframe container */}
      <div className="aspect-video w-full pointer-events-none">
        <div id="vsl-yt-player" className="w-full h-full" />
      </div>

      {/* Red alert overlay */}
      {showAlert && isReady && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div
            className="flex flex-col items-center gap-2 rounded-xl px-8 py-5 animate-pulse"
            style={{ background: "rgba(220, 60, 40, 0.92)" }}
          >
            <VolumeX className="h-10 w-10 text-white" />
            <p className="text-white font-bold text-base sm:text-lg" style={{ fontFamily: "'Hind', sans-serif" }}>
              Tu video ya ha comenzado
            </p>
            <p className="text-white/90 text-sm" style={{ fontFamily: "'Hind', sans-serif" }}>
              Haz clic para escuchar
            </p>
          </div>
        </div>
      )}

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/60 z-30">
        <div
          className="h-full transition-all duration-500 ease-linear"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #e53e3e, #c53030)",
          }}
        />
      </div>
    </div>
  );
};

export default VslPlayer;
