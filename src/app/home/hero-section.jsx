import { Button } from "@/components/ui/button";

function HeroSection() {
  return (
    <section className="relative min-h-[372px] bg-black flex flex-col items-center justify-center">
     <img 
  className="absolute w-full h-full z-[1] object-cover inset-0" 
  src="/assets/hero-image-1440.jpeg" 
  alt="Booking.com Hero Image" 
/>
      <div className="z-[2] relative text-center container">
        <h1 className="text-4xl font-extrabold text-white md:text-5xl">
          Travel has never felt this cosy
        </h1>
        <p className="text-xl font-medium text-white md:text-2xl">
          Book an entire place all for yourself
        </p>
        <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
          Discover Holiday Rentals
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;
