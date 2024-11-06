'use client';
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import learningContent from '@/data/learningContent.json';
import Image from 'next/image';

import ChevronUpIcon from '/public/assets/icons/VectorUp.svg';
import ChevronDownIcon from '/public/assets/icons/VectorDown.svg';
import ClockIcon from '/public/assets/icons/ClockOutline.svg';
import BarChart2Icon from '/public/assets/icons/ChartBarOutline_2.svg';
import FileTextIcon from '/public/assets/icons/DocumentDuplicateOutline.svg';
import PlayIcon from '/public/assets/icons/PlayOutline.svg';
import HelpCircleIcon from '/public/assets/icons/InformationCircleOutline.svg';
import QuestionIcon from '/public/assets/icons/QuestionMarkCircleOutline.svg';
import CodingIcon from '/public/assets/icons/CodeOutline.svg';
import MentorIcon from '/public/assets/icons/MentorSession.svg';
import LearningIcon from '/public/assets/icons/Learning.svg';


const LearningPlatform = () => {
    const [activeTab, setActiveTab] = useState('learning');
    const [showComingSoon, setShowComingSoon] = useState(false);
    const [expandedChapter, setExpandedChapter] = useState(0);
    const [expandedParts, setExpandedParts] = useState({});
    const [chaptersData, setChaptersData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

    // Load data when component mounts
    useEffect(() => {
        setChaptersData(learningContent.chapters);
        setIsLoading(false);
    }, []);

    // Add effect to listen to sidebar changes
    useEffect(() => {
        const handleSidebarChange = (e) => {
            setIsSidebarExpanded(e.detail.isExpanded);
        };
        
        window.addEventListener('sidebarChange', handleSidebarChange);
        return () => window.removeEventListener('sidebarChange', handleSidebarChange);
    }, []);

    const handleTabClick = (tab) => {
        if (tab === 'mentor') {
            setShowComingSoon(true);
        } else {
            setActiveTab(tab);
        }
    };

    const selectedButtonStyle = {
        background: 'white',
        padding: '8px 16px',
        borderRadius: '0.5rem',
        position: 'relative',
        boxShadow: '0 3.67px 3.67px rgba(41, 83, 155, 0.3)',
    };

    const gradientBorderStyle = {
        content: '""',
        position: 'absolute',
        inset: '-1px',
        borderRadius: '0.5rem',
        padding: '1px',
        background: 'linear-gradient(to top right, rgba(5, 68, 94, 1), rgba(79, 125, 152, 1), rgba(210, 227, 255, 1))',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
    };

    const gradientLineStyle = {
        height: '1px',
        background: 'linear-gradient(to right, rgba(23, 43, 77, 0), rgba(23, 43, 77, 1), rgba(5, 68, 94, 0))',
        width: '100%',
        marginTop: '12px'
    };

    const progressBarContainerStyle = {
        width: '100%',
        height: '6px',
        backgroundColor: '#F0F1F3',
        marginTop: '4px',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 16px',
        borderRadius: '0 0 100px 100px'
    };

    const progressBarStyle = (progress) => ({
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: `${progress}%`,
        background: '#172B4D',
        borderRadius: '0 0 100px 100px'
    });

    const progressTextStyle = {
        fontSize: '12px',
        color: '#172B4D',
        marginBottom: '4px',
        textAlign: 'right',
        display: 'inline-block',
        padding: '4px 8px',
        background: 'rgba(239, 245, 255, 1)',
        border: '1px solid rgba(153, 228, 255, 1)',
        borderRadius: '4px'
    };

    const togglePart = (chapterIndex, partIndex) => {
        setExpandedParts(prev => ({
            ...prev,
            [`${chapterIndex}-${partIndex}`]: !prev[`${chapterIndex}-${partIndex}`]
        }));
    };

    return (
        <div className={`
            h-screen 
            mx-2 sm:mx-4 md:mx-10 
            ${isSidebarExpanded ? 'md:ml-60' : 'md:ml-24'} 
            my-4 
            rounded-t-xl 
            border-2 
            border-b-0 
            border-[#e6f7ff] 
            bg-white 
            p-3 sm:p-4 md:p-6 
            relative 
            overflow-y-auto
            overflow-x-hidden
            transition-all 
            duration-300 
            ease-in-out
        `}>
            {/* Top Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
                {/* Gradient container for buttons */}
                <div className="bg-gradient-to-t from-[rgba(239,245,255,0)] to-[rgba(239,245,255,1)] p-2 rounded-lg w-full sm:w-auto">
                    <div className="flex flex-row items-center space-x-2">
                        <div className="relative">
                            <button 
                                className="px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-white/60"
                                onClick={() => handleTabClick('mentor')}
                                style={activeTab === 'mentor' ? selectedButtonStyle : {}}
                            >
                                <div className="flex items-center space-x-2">
                                    <Image src={MentorIcon} alt="Mentor" className="w-5 h-5" />
                                    <span>Mentor Sessions</span>
                                </div>
                            </button>
                            {activeTab === 'mentor' && <div style={gradientBorderStyle} />}
                        </div>

                        <div className="relative">
                            <button 
                                className="px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-white/60"
                                onClick={() => handleTabClick('learning')}
                                style={activeTab === 'learning' ? selectedButtonStyle : {}}
                            >
                                <div className="flex items-center space-x-2">
                                    <Image src={LearningIcon} alt="Learning" className="w-5 h-5" />
                                    <span>Learning Material</span>
                                </div>
                            </button>
                            {activeTab === 'learning' && <div style={gradientBorderStyle} />}
                        </div>
                    </div>
                </div>

                {/* How it works - right aligned */}
                <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors duration-200 w-full sm:w-auto justify-center sm:justify-start">
                    <Image src={HelpCircleIcon} alt="Information Circle" className="w-5 h-5" />
                    <span>How it works</span>
                </button>
            </div>

            {/* Coming Soon Modal */}
            {showComingSoon && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-sm relative">
                        <button 
                            onClick={() => setShowComingSoon(false)}
                            className="absolute top-4 right-4 hover:bg-gray-100 p-1 rounded-full"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <div className="text-center">
                            <h3 className="text-lg font-semibold mb-2">Coming Soon!</h3>
                            <p className="text-gray-600">Mentor Sessions feature is currently under development. Please check back later.</p>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'learning' && (
                <div className="flex flex-col md:flex-row">
                    {/* Left Sidebar */}
                    <div className="w-80 md:pr-4 mb-6 md:mb-0">
                        <div className="space-y-4">
                            {chaptersData.map((chapter, index) => (
                                <div key={chapter.title}>
                                    <div 
                                        className={`p-3 rounded-lg cursor-pointer ${
                                            index === expandedChapter ? 'bg-[rgba(239,245,255,1)]' : ''
                                        }`}
                                        onClick={() => setExpandedChapter(index)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className={index === expandedChapter ? 'font-bold' : ''}>{chapter.title}</span>
                                            {index === expandedChapter && (
                                                <div className="flex items-center space-x-2">
                                                    <Image src={ClockIcon} alt="Clock" className="w-5 h-5" />
                                                    <span className="text-sm">{chapter.totalTime}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div style={{
                                        height: '1px',
                                        background: 'linear-gradient(to right, rgba(143, 223, 255, 0), rgba(143, 223, 255, 1), rgba(143, 223, 255, 0))',
                                        width: '100%',
                                        marginTop: '8px'
                                    }} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className=" space-y-4 w-full">
                        {isLoading ? (
                            <div>Loading...</div>
                        ) : (
                            chaptersData.length > 0 && chaptersData[expandedChapter]?.parts.map((part, partIndex) => (
                                <div 
                                    key={partIndex} 
                                    className="border rounded-lg p-4 relative"
                                    style={{
                                        ...expandedParts[`${expandedChapter}-${partIndex}`] ? {
                                            boxShadow: '0 4px 20px 0 rgba(23, 43, 77, 0.1)'
                                        } : {},
                                        border: 'none',
                                        background: `
                                            linear-gradient(to top, rgba(164, 230, 255, 0), rgba(164, 230, 255, 1)) padding-box,
                                            linear-gradient(to top, rgba(164, 230, 255, 0), rgba(164, 230, 255, 1)) border-box
                                        `,
                                        padding: '1px',
                                    }}
                                >
                                    <div className="bg-white rounded-lg p-4">
                                        <div className="flex flex-col">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between cursor-pointer"
                                                onClick={() => togglePart(expandedChapter, partIndex)}>
                                                {/* Part title section */}
                                                <div className="mb-4 sm:mb-0">
                                                    <div className="text-sm text-gray-600">PART {partIndex + 1}</div>
                                                    <div className="text-lg font-semibold">{part.title}</div>
                                                </div>
                                                
                                                {/* Metrics section */}
                                                <div className="flex flex-wrap items-center gap-4 ml-0 sm:ml-4">
                                                    <div className="flex items-center space-x-2">
                                                        <Image src={ClockIcon} alt="Clock" className="w-6 h-6" />
                                                        <span>{part.duration}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <Image src={BarChart2Icon} alt="Bar Chart" className="w-5 h-5" />
                                                        <span>{part.difficulty}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <Image src={FileTextIcon} alt="File Text" className="w-5 h-5" />
                                                        <span>{part.resourceCount}</span>
                                                    </div>
                                                    {expandedParts[`${expandedChapter}-${partIndex}`] ? 
                                                        <Image src={ChevronUpIcon} alt="Chevron Up" className="w-5 h-5" /> : 
                                                        <Image src={ChevronDownIcon} alt="Chevron Down" className="w-5 h-5" />
                                                    }
                                                </div>
                                            </div>

                                            {/* Expanded content section */}
                                            {expandedParts[`${expandedChapter}-${partIndex}`] && (
                                                <>
                                                    {/* Progress bar */}
                                                    <div className="w-full relative">
                                                        <div className="text-right">
                                                            <span style={progressTextStyle}>{part.progress}% Completed</span>
                                                        </div>
                                                        <div style={progressBarContainerStyle}>
                                                            <div style={progressBarStyle(part.progress)} />
                                                        </div>
                                                    </div>

                                                    {/* Content items */}
                                                    <div className="space-y-4 mt-4">
                                                        {part.content.map((item, index) => (
                                                            <div key={index} className="relative">
                                                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                                                                    <div className="flex items-center space-x-3">
                                                                        {item.type === 'video' && <Image src={PlayIcon} alt="Play" className="w-5 h-5" />}
                                                                        {item.type === 'article' && <Image src={QuestionIcon} alt="Question" className="w-5 h-5" />}
                                                                        {item.type === 'quiz' && <Image src={QuestionIcon} alt="Question" className="w-5 h-5" />}
                                                                        {item.type === 'exercise' && <Image src={CodingIcon} alt="Coding" className="w-5 h-5" />}
                                                                        {item.type === 'resource' && <Image src={FileTextIcon} alt="File Text" className="w-5 h-5" />}
                                                                        <span className="font-medium">{item.title}</span>
                                                                    </div>
                                                                    <div className="flex items-center space-x-2">
                                                                        <Image src={ClockIcon} alt="Clock" className="w-6 h-6" />
                                                                        <span>{item.time}</span>
                                                                    </div>
                                                                </div>
                                                                <div style={gradientLineStyle} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LearningPlatform;