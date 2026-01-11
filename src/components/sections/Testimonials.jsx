import React, { useState, useRef } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Download, Maximize, PictureInPicture } from 'lucide-react';
import data from '../../data/testimonials.json';

// IMPORT VIDEOS
import vid1 from '../../assets/videos/Heidi-Haynes-IEE.mp4';
import vid2 from '../../assets/videos/brienne2.mp4';
import vid3 from '../../assets/videos/mathew17.mp4';
import vid4 from '../../assets/videos/guy.mp4';

const videoMap = { vid1, vid2, vid3, vid4 };

// HELPER: Format Time
const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

// HELPER: Company Logos
const CompanyLogo = ({ name }) => {
    if (name === "IEE") {
        return (
            <div className="flex items-center gap-2 justify-center">
                <div className="w-8 h-8 rounded-full bg-[#00a1e0] flex items-center justify-center text-white text-[10px] font-bold">IEE</div>
                <div className="text-[#00a1e0] font-bold text-xs leading-tight text-left">
                    International<br />Education<br />Evaluations
                </div>
            </div>
        );
    }
    if (name === "Pxlbake") {
        return (
            <div className="flex items-center gap-2 justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded-sm"></div>
                <span className="text-xl font-bold text-primary tracking-tighter">pxlbake</span>
            </div>
        );
    }
    if (name === "RedTeam") {
        return (
            <div className="flex items-center gap-2 justify-center">
                <div className="w-6 h-6 bg-red-600 transform rotate-45"></div>
                <span className="text-xl font-bold text-primary tracking-tighter">REDTEAM</span>
            </div>
        );
    }
    return <div className="text-lg font-bold text-primary">{name}</div>;
};

export default function Testimonials() {
    const [startIndex, setStartIndex] = useState(0);
    const [playingVideo, setPlayingVideo] = useState(null);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);

    // Track Time State: { [id]: { current: 0, total: 0 } }
    const [videoTimes, setVideoTimes] = useState({});
    const videoRefs = useRef({});

    // LOGIC: Get visible items
    const getVisibleItems = () => {
        const items = [];
        for (let i = 0; i < 3; i++) {
            const index = (startIndex + i) % data.list.length;
            items.push(data.list[index]);
        }
        return items;
    };

    const visibleItems = getVisibleItems();

    const handleNext = () => {
        setStartIndex((prev) => (prev + 1) % data.list.length);
        setPlayingVideo(null);
    };

    const handlePrev = () => {
        setStartIndex((prev) => (prev - 1 + data.list.length) % data.list.length);
        setPlayingVideo(null);
    };

    // VIDEO CONTROL HANDLERS 

    const togglePlay = (id) => {
        const vid = videoRefs.current[id];
        if (!vid) return;

        if (playingVideo === id) {
            vid.pause();
            setPlayingVideo(null);
        } else {
            // Pause all others
            Object.values(videoRefs.current).forEach(v => v && v.pause());
            vid.play();
            setPlayingVideo(id);
        }
    };

    const handleTimeUpdate = (id) => {
        const vid = videoRefs.current[id];
        if (vid) {
            setVideoTimes(prev => ({
                ...prev,
                [id]: {
                    current: vid.currentTime,
                    total: vid.duration || 0
                }
            }));
        }
    };

    // SKIP / SCRUB FUNCTION
    const handleScrub = (e, id) => {
        const vid = videoRefs.current[id];
        if (!vid) return;

        const progressBar = e.currentTarget;
        const clickPosition = (e.nativeEvent.offsetX / progressBar.offsetWidth);
        vid.currentTime = clickPosition * vid.duration;
    };

    // DOWNLOAD FUNCTION
    const handleDownload = (e, videoSrc) => {
        e.stopPropagation();
        const link = document.createElement('a');
        link.href = videoSrc;
        link.download = `Testimonial.mp4`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // FULL SCREEN FUNCTION
    const handleFullScreen = (id) => {
        const vid = videoRefs.current[id];
        if (vid) {
            if (vid.requestFullscreen) vid.requestFullscreen();
            else if (vid.webkitRequestFullscreen) vid.webkitRequestFullscreen();
        }
    };

    // PICTURE IN PICTURE (PiP)
    const handlePiP = async (id) => {
        const vid = videoRefs.current[id];
        if (vid && document.pictureInPictureEnabled) {
            try {
                if (document.pictureInPictureElement) {
                    await document.exitPictureInPicture();
                } else {
                    await vid.requestPictureInPicture();
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    // PLAYBACK SPEED TOGGLE (1x -> 1.5x -> 2x -> 1x)
    const toggleSpeed = (id) => {
        const vid = videoRefs.current[id];
        if (!vid) return;

        let newSpeed = 1;
        if (playbackSpeed === 1) newSpeed = 1.5;
        else if (playbackSpeed === 1.5) newSpeed = 2;
        else newSpeed = 1;

        vid.playbackRate = newSpeed;
        setPlaybackSpeed(newSpeed);
    };

    return (
        <section className="bg-yellow-50 py-24 px-6 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <p className="text-[#8b9099] uppercase tracking-widest text-[11px] font-bold mb-3">
                        {data.header.label}
                    </p>
                    <h2 className="text-4xl sm:text-[42px] font-bold text-primary">
                        {data.header.title}{' '}
                        <div className="relative inline-block">
                            {data.header.highlight}
                            <svg className="absolute -bottom-3 left-0 w-full" height="12" viewBox="0 0 100 12" preserveAspectRatio="none">
                                <path d="M0 0 Q 50 12 100 0" stroke="#f4b400" strokeWidth="4" fill="none" />
                            </svg>
                        </div>
                    </h2>
                </div>

                {/* 3 COLUMN GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {visibleItems.map((item) => {

                        const isPlaying = playingVideo === item.id;
                        const times = videoTimes[item.id] || { current: 0, total: 0 };
                        const progressPercent = times.total ? (times.current / times.total) * 100 : 0;

                        return (
                            <div key={item.id} className="flex flex-col items-center text-center">

                                {/* VIDEO CARD */}
                                <div className="relative w-full aspect-[4/3] bg-gray-900 rounded-[20px] overflow-hidden mb-6 shadow-sm group">
                                    <video
                                        ref={el => videoRefs.current[item.id] = el}
                                        src={videoMap[item.videoKey]}
                                        className="w-full h-full object-cover"
                                        onTimeUpdate={() => handleTimeUpdate(item.id)}
                                        onLoadedMetadata={() => handleTimeUpdate(item.id)}
                                        onEnded={() => setPlayingVideo(null)}
                                        onClick={() => togglePlay(item.id)}
                                    />

                                    {/* PLAY BUTTON OVERLAY  */}
                                    {!isPlaying && (
                                        <div
                                            onClick={() => togglePlay(item.id)}
                                            className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center cursor-pointer"
                                        >
                                            <Play className="w-12 h-12 text-white fill-white drop-shadow-md" />
                                        </div>
                                    )}

                                    {/* VIDEO CONTROLS OVERLAY */}
                                    <div className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent pt-8 pb-3 px-4 transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>

                                        {/* Progress Bar (Interactive) */}
                                        <div
                                            className="w-full h-1 bg-gray-500/50 rounded-full mb-3 cursor-pointer hover:h-1.5 transition-all relative group/bar"
                                            onClick={(e) => handleScrub(e, item.id)}
                                        >
                                            {/* Dynamic Width Style - Essential for Progress */}
                                            <div
                                                className="h-full bg-brand transition-all duration-100 relative rounded-full"
                                                style={{ width: `${progressPercent}%` }}
                                            >
                                                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover/bar:opacity-100 shadow-sm"></div>
                                            </div>
                                        </div>

                                        {/* Controls Row */}
                                        <div className="flex items-center justify-between text-white">
                                            <div className="flex items-center gap-3">
                                                {/* Pause/Play */}
                                                <button onClick={() => togglePlay(item.id)} className="hover:text-brand transition-colors" title={isPlaying ? "Pause" : "Play"}>
                                                    {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                                                </button>

                                                {/* Timer */}
                                                <span className="text-[10px] font-bold tracking-widest">
                                                    {formatTime(times.current)}
                                                </span>
                                            </div>

                                            {/* Right Actions */}
                                            <div className="flex items-center gap-3">

                                                {/* Playback Speed */}
                                                <button onClick={() => toggleSpeed(item.id)} className="text-[10px] font-bold hover:text-brand w-6 text-center" title="Playback Speed">
                                                    {playbackSpeed}x
                                                </button>

                                                {/* PiP */}
                                                <button onClick={() => handlePiP(item.id)} className="hover:text-brand transition-colors" title="Picture in Picture">
                                                    <PictureInPicture className="w-4 h-4" />
                                                </button>

                                                {/* Download */}
                                                <button onClick={(e) => handleDownload(e, videoMap[item.videoKey])} className="hover:text-brand transition-colors" title="Download">
                                                    <Download className="w-4 h-4" />
                                                </button>

                                                {/* Fullscreen */}
                                                <button onClick={() => handleFullScreen(item.id)} className="hover:text-brand transition-colors" title="Fullscreen">
                                                    <Maximize className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* LOGO */}
                                <div className="h-12 flex items-center justify-center mb-6">
                                    <CompanyLogo name={item.company} />
                                </div>

                                {/* QUOTE */}
                                <p className="text-gray-500 text-[15px] leading-relaxed mb-8 px-2 min-h-[100px]">
                                    {item.quote}
                                </p>

                                {/* AUTHOR */}
                                <div className="mt-auto">
                                    <h4 className="font-bold text-primary text-[13px] uppercase tracking-wide mb-1">
                                        {item.author}
                                    </h4>
                                    <p className="text-gray-400 text-[13px]">
                                        {item.role}
                                    </p>
                                </div>

                            </div>
                        );
                    })}
                </div>

                {/* NAVIGATION ARROWS */}
                <div className="flex justify-center gap-4 mt-16">
                    <button
                        onClick={handlePrev}
                        className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-brand hover:text-brand transition-all duration-300"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-brand hover:text-brand transition-all duration-300"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

            </div>
        </section>
    );
}