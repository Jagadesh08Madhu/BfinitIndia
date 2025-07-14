import heroBg from "../assets/server-home/hero-bg.webp";

export default function ProductHero({ title, subTitle }) {
  return (
    <section className="md:pt-32 pt-24">
      <div
      style={{
        backgroundImage: `linear-gradient(to right, rgba(47, 104, 177, 0.8), rgba(49, 197, 244, 0)), url(${heroBg})`,
      }}
      className=" flex min-h-96 w-full flex-col justify-center gap-5 rounded-md bg-cover bg-center px-5 py-10 text-white md:container md:mx-auto"
    >
      <h2 className="font-urbanist text-4xl font-bold">{title}</h2>
      <p className="w-full max-w-xl">{subTitle}</p>
    </div>
    </section>
  );
}
