
// lib/data/gallery.ts
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'ceremony' | 'reception' | 'portrait' | 'detail' | 'all';
  country: string;
  couples: string;
  weddingSlug: string;
  hasVideo?: boolean;
  videoPreview?: string;
}

export const galleryData: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    alt: 'Sarah & Michael - Ceremony',
    category: 'ceremony',
    country: 'Greece',
    couples: 'Sarah & Michael',
    weddingSlug: 'sarah-michael-santorini',
    hasVideo: true,
    videoPreview: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
    alt: 'Amara & David - Traditional Ceremony',
    category: 'ceremony',
    country: 'Ethiopia',
    couples: 'Amara & David',
    weddingSlug: 'amara-david-ethiopia',
    hasVideo: true
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop',
    alt: 'Zara & Ahmed - Reception',
    category: 'reception',
    country: 'UAE',
    couples: 'Zara & Ahmed',
    weddingSlug: 'zara-ahmed-dubai',
    hasVideo: true
  }
  // Add more gallery images...
];