import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Track {
    name: string;
    artist: string;
    image: string;
}

interface LastFmWidgetProps {
    delay: number;
}

const LastFmWidget: React.FC<LastFmWidgetProps> = ({ delay }) => {
    const [track, setTrack] = useState<Track | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecentTrack = async () => {
            try {
                setLoading(true);
                const apiKey = process.env.NEXT_PUBLIC_LASTFM_API_KEY;
                const username = process.env.NEXT_PUBLIC_LASTFM_USERNAME;

                if (!apiKey || !username) {
                    throw new Error('Last.fm API key or username is missing');
                }

                const response = await fetch(
                    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch data from Last.fm');
                }
                const data = await response.json();
                const recentTrack = data.recenttracks.track[0];
                setTrack({
                    name: recentTrack.name,
                    artist: recentTrack.artist['#text'],
                    image: recentTrack.image[1]['#text'], // Use the small image
                });
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchRecentTrack();
        const interval = setInterval(fetchRecentTrack, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="bg-secondary rounded-lg shadow-lg backdrop-blur-sm border border-accent/20 h-[46px] flex items-center overflow-hidden"
            initial={{ transform: 'translateY(-30px)', opacity: 0 }}
            whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
            transition={{ duration: 0.5, delay, ease: [0.39, 0.21, 0.12, 0.96] }}
            viewport={{ amount: 0.1, once: true }}
        >
            {loading ? (
                <div className="animate-pulse flex items-center w-full h-full">
                    <div className="bg-accent h-full w-[46px]"></div>
                    <div className="flex-1 px-2 space-y-1">
                        <div className="h-2 bg-accent rounded w-3/4"></div>
                        <div className="h-2 bg-accent rounded w-1/2"></div>
                    </div>
                </div>
            ) : track ? (
                <div className="flex items-center w-full h-full">
                    <img src={track.image} alt={track.name} className="w-[36px] h-full object-cover" />
                    <div className="flex-1 min-w-0 px-2">
                        <p className="font-leaguespartan text-xs font-semibold text-text truncate">{track.name}</p>
                        <p className="font-leaguespartan text-xs text-text/75 truncate">{track.artist}</p>
                    </div>
                    <svg className="w-4 h-4 text-accent animate-pulse shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                </div>
            ) : (
                <p className="font-leaguespartan text-xs text-text px-2">No recent tracks</p>
            )}
        </motion.div>
    );
};

export default LastFmWidget;