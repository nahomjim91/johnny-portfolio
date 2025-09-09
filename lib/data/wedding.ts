// lib/data/weddings.ts
export interface Wedding {
  id: string;
  slug: string;
  title: string;
  couples: string;
  location: string;
  date: string;
  coverImage: string;
  category: 'ceremony' | 'reception' | 'portrait' | 'detail';
  country: string;
  description: string;
  loveStory: string;
  images: {
    ceremony: string[];
    reception: string[];
    portraits: string[];
    details: string[];
  };
  videos: {
    highlight: string;
    ceremony?: string;
    reception?: string;
  };
  testimonial?: {
    text: string;
    author: string;
  };
}

export const weddingsData: Wedding[] = [
  {
    id: '1',
    slug: 'sarah-michael-santorini',
    title: 'Santorini Dreams',
    couples: 'Sarah & Michael',
    location: 'Santorini, Greece',
    date: '2024-09-15',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    category: 'ceremony',
    country: 'Greece',
    description: 'A breathtaking destination wedding overlooking the Aegean Sea',
    loveStory: 'Sarah and Michael first met during a college study abroad program in Rome. Their love for travel and adventure brought them back to Europe for their dream wedding in Santorini, where the endless blue sky meets the sparkling sea.',
    images: {
      ceremony: [
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1594736797933-d0d3a4fc671a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1594736797933-d0d3a4fc671a?w=800&h=600&fit=crop'
      ],
      reception: [
        'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop'
      ],
      portraits: [
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1594736797933-d0d3a4fc671a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc76?w=800&h=600&fit=crop'
      ],
      details: [
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1594736797933-d0d3a4fc671a?w=800&h=600&fit=crop'
      ]
    },
    videos: {
      highlight: 'demo-video-url',
      ceremony: 'ceremony-video-url',
      reception: 'reception-video-url'
    },
    testimonial: {
      text: "Johnny captured our wedding day with such artistry and emotion. Every frame tells our love story perfectly.",
      author: "Sarah & Michael"
    }
  },
  {
    id: '2',
    slug: 'amara-david-ethiopia',
    title: 'Ethiopian Traditions',
    couples: 'Amara & David',
    location: 'Addis Ababa, Ethiopia',
    date: '2024-07-20',
    coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
    category: 'ceremony',
    country: 'Ethiopia',
    description: 'A beautiful blend of Ethiopian traditions and modern celebration',
    loveStory: 'Amara and David met through mutual friends in London, but their hearts called them home to Ethiopia for their wedding. Their ceremony honored ancient traditions while celebrating their modern love story, creating a perfect fusion of past and present.',
    images: {
      ceremony: [
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1594736797933-d0d3a4fc671a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
      ],
      reception: [
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1594736797933-d0d3a4fc671a?w=800&h=600&fit=crop'
      ],
      portraits: [
        'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop'
      ],
      details: [
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1594736797933-d0d3a4fc671a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
      ]
    },
    videos: {
      highlight: 'demo-video-url-2',
      ceremony: 'ceremony-video-url-2'
    },
    testimonial: {
      text: "Professional, creative, and so easy to work with. Johnny made us feel comfortable and the results were beyond our wildest dreams.",
      author: "Amara & David"
    }
  },
  {
    id: '3',
    slug: 'zara-ahmed-dubai',
    title: 'Desert Elegance',
    couples: 'Zara & Ahmed',
    location: 'Dubai, UAE',
    date: '2024-03-10',
    coverImage: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop',
    category: 'reception',
    country: 'UAE',
    description: 'Luxurious celebration under the Arabian stars',
    loveStory: 'Zara and Ahmed\'s love story began in the bustling souks of Dubai, where a chance encounter led to a lifetime of adventures. Their wedding was a testament to the magic of the desert, combining Emirati traditions with contemporary luxury.',
    images: {
      ceremony: [
        'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop'
      ],
      reception: [
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1594736797933-d0d3a4fc671a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
      ],
      portraits: [
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1594736797933-d0d3a4fc671a?w=800&h=600&fit=crop'
      ],
      details: [
        'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop'
      ]
    },
    videos: {
      highlight: 'demo-video-url-3',
      reception: 'reception-video-url-3'
    },
    testimonial: {
      text: "The way Johnny captures cultural traditions while telling our personal story is incredible. Our families treasure these memories forever.",
      author: "Zara & Ahmed"
    }
  }
];