// lib/data/testimonials.ts
export interface Testimonial {
  id: string;
  text: string;
  author: string;
  wedding: string;
  location: string;
  image?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    text: "Johnny captured our wedding day with such artistry and emotion. Every frame tells our love story perfectly. The videos still make us cry happy tears!",
    author: "Sarah & Michael",
    wedding: "Santorini Wedding 2024",
    location: "Greece"
  },
  {
    id: '2',
    text: "Professional, creative, and so easy to work with. Johnny made us feel comfortable and the results were beyond our wildest dreams.",
    author: "Amara & David",
    wedding: "Ethiopian Traditional Wedding",
    location: "Ethiopia"
  },
  {
    id: '3',
    text: "The way Johnny captures cultural traditions while telling our personal story is incredible. Our families treasure these memories forever.",
    author: "Zara & Ahmed",
    wedding: "Dubai Destination Wedding",
    location: "UAE"
  },
  {
    id: '4',
    text: "From the first consultation to the final video delivery, Johnny exceeded every expectation. Pure artistry in motion.",
    author: "Elena & Marco",
    wedding: "Tuscan Villa Wedding",
    location: "Italy"
  },
  {
    id: '5',
    text: "Johnny has an incredible eye for capturing not just moments, but emotions. Our wedding film is a masterpiece.",
    author: "Priya & James",
    wedding: "Mumbai Palace Wedding",
    location: "India"
  }
];