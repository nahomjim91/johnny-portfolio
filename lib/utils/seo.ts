
// lib/utils/seo.ts
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

export const generateSEO = (type: 'home' | 'gallery' | 'story', data?: any): SEOData => {
  const baseTitle = 'Johnny Video Production';
  const baseDescription = 'Luxury wedding videography capturing love stories across cultures and continents';
  
  switch (type) {
    case 'home':
      return {
        title: `${baseTitle} - Luxury Wedding Videography`,
        description: `${baseDescription}. Professional wedding videographer with 8+ years experience, 150+ weddings captured in 15+ countries.`,
        keywords: ['wedding videography', 'luxury weddings', 'destination weddings', 'wedding films', 'cinematic wedding videos'],
        ogImage: '/images/hero-og.jpg'
      };
    
    case 'gallery':
      return {
        title: `Wedding Gallery - ${baseTitle}`,
        description: `Explore our collection of luxury wedding photography and videography from celebrations around the world.`,
        keywords: ['wedding gallery', 'wedding photos', 'destination wedding photography', 'cultural weddings'],
        ogImage: '/images/gallery-og.jpg'
      };
    
    case 'story':
      if (data) {
        return {
          title: `${data.couples} - ${data.location} | ${baseTitle}`,
          description: `Discover the beautiful wedding story of ${data.couples} in ${data.location}. ${data.description}`,
          keywords: ['wedding story', data.location.toLowerCase(), 'luxury wedding', 'destination wedding'],
          ogImage: data.coverImage,
          canonicalUrl: `/stories/${data.slug}`
        };
      }
      break;
  }
  
  return {
    title: baseTitle,
    description: baseDescription,
    keywords: ['wedding videography']
  };
};