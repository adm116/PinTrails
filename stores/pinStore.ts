import { create } from 'zustand';
import { Pin } from '../models/pin';

type PinStore = {
    pins: Pin[];
    fetchPins: () => void;
};

export const usePinStore = create<PinStore>((set) => ({
    pins: [],
    fetchPins: () => {
        set({
            pins: [
                {
                    id: '1',
                    name: "Joe's Coffee",
                    description: 'Great cold brew and a cozy vibe for working remotely.',
                    tags: ['☕ Coffee', 'Remote Work'],
                    imageUrl: 'https://picsum.photos/200/200?random=1',
                    addedAgo: '2 days ago',
                },
                {
                    id: '2',
                    name: 'Golden Gate Bridge',
                    description: 'Iconic San Francisco landmark. Best at sunset.',
                    tags: ['🌉 Landmark', 'View'],
                    imageUrl: 'https://picsum.photos/200/200?random=2',
                    addedAgo: '5 days ago',
                },
				{
					id: '3',
					name: 'Luna’s Bistro',
					description: 'Trendy date-night spot with amazing cocktails.',
					tags: ['🍽️ Date Night', 'Cocktails'],
					imageUrl: 'https://picsum.photos/200/200?random=3',
					addedAgo: '1 week ago',
				},
				{
					id: '4',
					name: 'Beacon Hill Park',
					description: 'Peaceful trails and flower gardens to stroll.',
					tags: ['🌲 Nature', 'Walkable'],
					imageUrl: 'https://picsum.photos/200/200?random=4',
					addedAgo: '4 days ago',
				},
				{
					id: '5',
					name: 'The Library Bar',
					description: 'Chic hidden bar with a literary theme.',
					tags: ['📚 Hidden Gem', 'Cocktails'],
					imageUrl: 'https://picsum.photos/200/200?random=5',
					addedAgo: '3 days ago',
				},
            ],
        });
    },
}));