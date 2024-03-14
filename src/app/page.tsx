import { Gallery } from "@/components/gallery";
import { getServerAuthSession } from "@/server/auth";
import { Hero } from "@/components/hero";
import { Profile } from "@/components/profile";
import { ContactUs } from "@/components/contact-us";
import { Activity } from "@/components/activity";

export default async function HomePage() {
  const authSession = await getServerAuthSession();

  return (
    <main>
      <section id="home" className="bg-hero-ornament">
        <Hero />
      </section>
      <section id="profile">
        <Profile />
      </section>
      <section id="activities" className="bg-dot-ornament bg-gray-100">
        <Activity />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section className="bg-primary">
        <div className="container mx-auto py-16 text-white">
          <h1 className="text-3xl font-bold">Hubungi Kami Sekarang</h1>
          <address>
            <a
              className="text-lg font-bold"
              href="https://www.instagram.com/bajatitianutama.official"
              target="_blank"
              rel="noreferrer"
            >
              IG: bajatitianutama.official
            </a>
          </address>
        </div>
      </section>
      <section id="contact">
        <ContactUs />
      </section>
    </main>
  );
}
