import UserInfo from "@/components/UserInfo";
import { getServerAuthSession } from "@/server/auth";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  const authSession = await getServerAuthSession();

  return (
    <main>
      <section id="home" className="h-[600px] bg-hero-ornament">
        <div className="flex h-full bg-gradient-to-b from-transparent to-white">
          <div className="container mx-auto flex flex-col-reverse  items-center justify-between gap-4 px-12 md:flex-row">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold md:text-7xl">
                Callender Hamilton (CH)
              </h1>
              <p className="text-xl md:text-2xl">
                Proyek KPBU Penggantian atau Duplikasi jembatan Callender
                Hamilton (CH) di Pulau Jawa
              </p>
              <p className="text-gray-600">oleh PT Baja Titian Utama</p>
            </div>
            <div className="m-8 md:shrink-0">
              <div className="h-96 w-screen sm:w-96">
                <div className="relative h-full w-full">
                  <Image
                    className="rounded-lg"
                    src="/hero/default.jpg"
                    alt="Jembatan Callender Hamilton"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto">
        <section id="profile" className="py-8">
          <Image
            className="rounded-lg"
            src="/hero/default.jpg"
            alt="Jembatan Callender Hamilton"
            width={600}
            height={600}
            style={{ objectFit: "cover" }}
          />
          <div
            className="space-y-4 rounded-xl px-4 py-4 shadow-sm md:py-12"
            style={{
              background:
                "linear-gradient(146.63deg, rgba(2, 132, 199, .1) 1.32%, rgba(236, 254, 255, 0) 66%), linear-gradient(325.76deg, rgba(2, 132, 199, .2) 3.68%, rgba(236, 254, 255, 0) 66.89%), #ffffff",
            }}
          >
            <h1 className="text-center text-3xl font-bold text-primary">
              Profile
            </h1>
            <p className="leading-relaxed">
              <strong className="font-bold text-primary">
                PT Baja Titian Utama
              </strong>
              <strong> </strong>
              adalah perusahaan yang resmi berdiri pada tanggal 18 November
              2021, yang memegang konsesi Proyek Penggantian dan/atau Duplikasi
              Jembatan Callender Hamilton di Pulau Jawa. Dengan total konsesi
              selama 12 tahun yang terdiri dari 2 tahun masa konstruksi dan 10
              tahun masa layanan. Dengan lingkup pekerjaan meliputi penggantian
              dan/atau duplikasi di 37 lokasi jembatan CH eksisting dengan
              Jembatan Steel Box Girder, Steel I Girder, beserta bangunan
              pelengkap (termasuk Structural Health Monitoring System/ SHMS),
              serta 0&M selama Masa Layanan.
            </p>
          </div>
        </section>
        <section id="activities">
          <h1>activities</h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          doloremque, nulla repellendus atque magnam aperiam quam vero maxime
          quae sint aut, minima velit nobis porro excepturi accusamus dolorum,
          iusto corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Sint, delectus expedita! Veritatis perferendis ducimus
          accusantium perspiciatis eius voluptatibus quisquam mollitia, dolore
          sequi placeat. Vitae totam nulla repudiandae accusamus, natus et?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          doloremque, nulla repellendus atque magnam aperiam quam vero maxime
          quae sint aut, minima velit nobis porro excepturi accusamus dolorum,
          iusto corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Sint, delectus expedita! Veritatis perferendis ducimus
          accusantium perspiciatis eius voluptatibus quisquam mollitia, dolore
          sequi placeat. Vitae totam nulla repudiandae accusamus, natus et?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          doloremque, nulla repellendus atque magnam aperiam quam vero maxime
          quae sint aut, minima velit nobis porro excepturi accusamus dolorum,
          iusto corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Sint, delectus expedita! Veritatis perferendis ducimus
          accusantium perspiciatis eius voluptatibus quisquam mollitia, dolore
          sequi placeat. Vitae totam nulla repudiandae accusamus, natus et?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          doloremque, nulla repellendus atque magnam aperiam quam vero maxime
          quae sint aut, minima velit nobis porro excepturi accusamus dolorum,
          iusto corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Sint, delectus expedita! Veritatis perferendis ducimus
          accusantium perspiciatis eius voluptatibus quisquam mollitia, dolore
          sequi placeat. Vitae totam nulla repudiandae accusamus, natus et?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          doloremque, nulla repellendus atque magnam aperiam quam vero maxime
          quae sint aut, minima velit nobis porro excepturi accusamus dolorum,
          iusto corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Sint, delectus expedita! Veritatis perferendis ducimus
          accusantium perspiciatis eius voluptatibus quisquam mollitia, dolore
          sequi placeat. Vitae totam nulla repudiandae accusamus, natus et?
        </section>
        <section id="gallery">
          <h1>gallery</h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          doloremque, nulla repellendus atque magnam aperiam quam vero maxime
          quae sint aut, minima velit nobis porro excepturi accusamus dolorum,
          iusto corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Sint, delectus expedita! Veritatis perferendis ducimus
          accusantium perspiciatis eius voluptatibus quisquam mollitia, dolore
          sequi placeat. Vitae totam nulla repudiandae accusamus, natus et?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          doloremque, nulla repellendus atque magnam aperiam quam vero maxime
          quae sint aut, minima velit nobis porro excepturi accusamus dolorum,
          iusto corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Sint, delectus expedita! Veritatis perferendis ducimus
          accusantium perspiciatis eius voluptatibus quisquam mollitia, dolore
          sequi placeat. Vitae totam nulla repudiandae accusamus, natus et?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          doloremque, nulla repellendus atque magnam aperiam quam vero maxime
          quae sint aut, minima velit nobis porro excepturi accusamus dolorum,
          iusto corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Sint, delectus expedita! Veritatis perferendis ducimus
          accusantium perspiciatis eius voluptatibus quisquam mollitia, dolore
          sequi placeat. Vitae totam nulla repudiandae accusamus, natus et?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          doloremque, nulla repellendus atque magnam aperiam quam vero maxime
          quae sint aut, minima velit nobis porro excepturi accusamus dolorum,
          iusto corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Sint, delectus expedita! Veritatis perferendis ducimus
          accusantium perspiciatis eius voluptatibus quisquam mollitia, dolore
          sequi placeat. Vitae totam nulla repudiandae accusamus, natus et?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          doloremque, nulla repellendus atque magnam aperiam quam vero maxime
          quae sint aut, minima velit nobis porro excepturi accusamus dolorum,
          iusto corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Sint, delectus expedita! Veritatis perferendis ducimus
          accusantium perspiciatis eius voluptatibus quisquam mollitia, dolore
          sequi placeat. Vitae totam nulla repudiandae accusamus, natus et?
        </section>
      </div>
      {authSession?.user && <UserInfo user={authSession?.user} />}
      {!authSession?.user && (
        <Link
          className="mt-2 font-medium text-blue-600 hover:underline"
          href="/login"
        >
          Login
        </Link>
      )}
    </main>
  );
}
