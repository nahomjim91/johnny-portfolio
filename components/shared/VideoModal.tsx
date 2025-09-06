// components/shared/VideoModal.tsx
import React from 'react';
import { Play } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl aspect-video bg-black">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl"
        >
          ✕
        </button>
        <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white">
          <div className="text-center">
            <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>Demo Video Player <br />
            videoUrl: {videoUrl}</p>
            <p className="text-sm opacity-75">Video integration will be added here</p>
          </div>
        </div>
      </div>
    </div>
  );
};