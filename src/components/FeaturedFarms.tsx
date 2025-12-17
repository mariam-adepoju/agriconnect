import { sellers } from "@/lib/mockData";

export function FeaturedFarms() {
  const featuredSellers = sellers.slice(2, 6);
  return (
    <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-10 bg-grany">
      <h2 className="md:text-[40px] sm:text-3xl text-2xl font-bold text-greeny">
        Featured Farms
      </h2>
      <p className="mb-7 text-lg text-greeny">Explore top farmers</p>
      <div className="grid gap-5 grid-cols-2 md:grid-cols-4">
        {featuredSellers.map((farm, i) => (
          <div key={i} className="pb-2">
            <img
              src={farm.avatar}
              alt={farm.name}
              className="h-40 w-full object-cover rounded-xl"
            />
            <p className="font-medium text-[#404040] pt-1">{farm.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
