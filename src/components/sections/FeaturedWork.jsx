import React, { useState, useRef } from 'react';
import { ArrowRight, Play, Pause, Download } from 'lucide-react';
import data from '../../data/featuredWork.json';
import videoFile from '../../assets/videos/guy.mp4';

// Helper Component
const ReadMoreButton = ({ text }) => (
    <a href="#" className="group inline-flex items-center gap-2 mt-6 relative pl-2 cursor-pointer">
        <div className="absolute left-6 w-10 h-10 bg-[#fefce8] rounded-full -z-10 group-hover:scale-110 transition-transform duration-300"></div>
        <span className="text-sm font-bold text-primary z-10 font-sans">{text}</span>
        <ArrowRight className="w-4 h-4 text-brand z-10" strokeWidth={3} />
    </a>
);

export default function FeaturedWork() {
    // VIDEO STATE MANAGEMENT 
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    // 1. Play/Pause Toggle
    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // 2. Handle Progress Bar 
    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const current = videoRef.current.currentTime;
            const total = videoRef.current.duration;
            setProgress((current / total) * 100);
        }
    };

    // 3. Handle "Skip" (Clicking on progress bar)
    const handleScrub = (e) => {
        if (videoRef.current) {
            const progressBar = e.currentTarget;
            const clickPosition = (e.nativeEvent.offsetX / progressBar.offsetWidth);
            videoRef.current.currentTime = clickPosition * videoRef.current.duration;
        }
    };

    // 4. Handle Download
    const handleDownload = (e) => {
        e.stopPropagation();
        const link = document.createElement('a');
        link.href = videoFile;
        link.download = 'CodeBuddy_CaseStudy.mp4';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="bg-white py-20 px-6 font-sans">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center text-center">

                    {/* COLUMN 1 Left Text*/}
                    <div className="flex flex-col items-center lg:items-end lg:text-right order-2 lg:order-1">
                        <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-4">
                            {data.leftCard.label}
                        </span>
                        <h3 className="text-xl lg:text-2xl font-bold text-primary leading-snug max-w-xs">
                            {data.leftCard.title}
                        </h3>
                        <ReadMoreButton text={data.leftCard.cta} />
                    </div>

                    {/*COLUMN 2 Center Video Player */}
                    <div className="flex flex-col items-center order-1 lg:order-2">

                        {/* Video Container */}
                        <div className="relative w-64 h-64 lg:w-72 lg:h-72 bg-gray-900 rounded-[2rem] overflow-hidden mb-6 shadow-xl group">

                            <video
                                ref={videoRef}
                                src={videoFile}
                                className="w-full h-full object-cover"
                                onTimeUpdate={handleTimeUpdate}
                                onEnded={() => setIsPlaying(false)}
                                onClick={togglePlay}
                            />

                            {/* CONTROLS OVERLAY */}

                            {/* Big Play Button */}
                            {!isPlaying && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors pointer-events-none">
                                    <div className="absolute bottom-6 bg-black/50 backdrop-blur-md hover:bg-black/70 text-white text-[11px] font-bold pl-4 pr-1 py-1.5 rounded-full flex items-center gap-2 transition-all pointer-events-auto cursor-pointer" onClick={togglePlay}>
                                        play video
                                        <div className="bg-white rounded-full p-1">
                                            <Play className="w-2 h-2 text-black fill-black" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/*Control Bar */}
                            <div className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>

                                {/* Progress Bar (Skip) */}
                                <div
                                    className="w-full h-1 bg-gray-500/50 rounded-full mb-3 cursor-pointer hover:h-1.5 transition-all"
                                    onClick={handleScrub}
                                >
                                    <div
                                        className="h-full bg-brand rounded-full relative"
                                        style={{ width: `${progress}%` }}
                                    >
                                        {/* Little dot at end of bar */}
                                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-sm"></div>
                                    </div>
                                </div>

                                {/* Buttons Row */}
                                <div className="flex items-center justify-between text-white">

                                    {/* Play/Pause */}
                                    <button onClick={togglePlay} className="hover:text-brand transition-colors">
                                        {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                                    </button>

                                    {/* Actions Right */}
                                    <div className="flex items-center gap-3">
                                        {/* Download Button */}
                                        <button
                                            onClick={handleDownload}
                                            title="Download Video"
                                            className="hover:text-brand transition-colors"
                                        >
                                            <Download className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Person Info */}
                        <div className="text-center">
                            <h4 className="font-bold text-primary text-lg mb-1">{data.leftCard.person.name}</h4>
                            <p className="text-gray-500 text-xs sm:text-sm flex items-center justify-center gap-1 flex-wrap">
                                {data.leftCard.person.role}{' '}
                                <span className="inline-flex items-center gap-1 font-bold text-primary">
                                    <span className="w-4 h-4 bg-[#00b05e] rounded text-white text-[8px] flex items-center justify-center">pd</span>
                                    PandaDoc
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* COLUMN3 Right Text --- */}
                    <div className="flex flex-col items-center lg:items-start lg:text-left order-3">
                        <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-4">
                            {data.rightCard.label}
                        </span>
                        <h3 className="text-xl lg:text-2xl font-bold text-primary leading-snug max-w-xs">
                            {data.rightCard.title}
                        </h3>
                        <ReadMoreButton text={data.rightCard.cta} />
                    </div>

                </div>
            </div>
        </section>
    );
}