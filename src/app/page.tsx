import UserInfo from "@/components/UserInfo";
import { getServerAuthSession } from "@/server/auth";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  const authSession = await getServerAuthSession();

  return (
    <>
      <section id="home">
        <Image src="/hero/default.jpg" alt="hero" width={1920} height={1080} />
      </section>
      <section
        id="profile"
        className="relative"
        style={{
          background:
            "linear-gradient(146.63deg, rgba(2, 132, 199, .1) 1.32%, rgba(236, 254, 255, 0) 66%), linear-gradient(325.76deg, rgba(2, 132, 199, .2) 3.68%, rgba(236, 254, 255, 0) 66.89%), #ffffff",
        }}
      >
        <h1>Profile</h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
        doloremque, nulla repellendus atque magnam aperiam quam vero maxime quae
        sint aut, minima velit nobis porro excepturi accusamus dolorum, iusto
        corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Sint, delectus expedita! Veritatis perferendis ducimus accusantium
        perspiciatis eius voluptatibus quisquam mollitia, dolore sequi placeat.
        Vitae totam nulla repudiandae accusamus, natus et? Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Autem doloremque, nulla
        repellendus atque magnam aperiam quam vero maxime quae sint aut, minima
        velit nobis porro excepturi accusamus dolorum, iusto corrupti. Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Sint, delectus
        expedita! Veritatis perferendis ducimus accusantium perspiciatis eius
        voluptatibus quisquam mollitia, dolore sequi placeat. Vitae totam nulla
        repudiandae accusamus, natus et? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Autem doloremque, nulla repellendus atque magnam
        aperiam quam vero maxime quae sint aut, minima velit nobis porro
        excepturi accusamus dolorum, iusto corrupti. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Sint, delectus expedita! Veritatis
        perferendis ducimus accusantium perspiciatis eius voluptatibus quisquam
        mollitia, dolore sequi placeat. Vitae totam nulla repudiandae accusamus,
        natus et? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Autem doloremque, nulla repellendus atque magnam aperiam quam vero
        maxime quae sint aut, minima velit nobis porro excepturi accusamus
        dolorum, iusto corrupti. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Sint, delectus expedita! Veritatis perferendis ducimus
        accusantium perspiciatis eius voluptatibus quisquam mollitia, dolore
        sequi placeat. Vitae totam nulla repudiandae accusamus, natus et? Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Autem doloremque,
        nulla repellendus atque magnam aperiam quam vero maxime quae sint aut,
        minima velit nobis porro excepturi accusamus dolorum, iusto corrupti.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, delectus
        expedita! Veritatis perferendis ducimus accusantium perspiciatis eius
        voluptatibus quisquam mollitia, dolore sequi placeat. Vitae totam nulla
        repudiandae accusamus, natus et?
      </section>
      <section id="activities">
        <h1>activities</h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
        doloremque, nulla repellendus atque magnam aperiam quam vero maxime quae
        sint aut, minima velit nobis porro excepturi accusamus dolorum, iusto
        corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Sint, delectus expedita! Veritatis perferendis ducimus accusantium
        perspiciatis eius voluptatibus quisquam mollitia, dolore sequi placeat.
        Vitae totam nulla repudiandae accusamus, natus et? Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Autem doloremque, nulla
        repellendus atque magnam aperiam quam vero maxime quae sint aut, minima
        velit nobis porro excepturi accusamus dolorum, iusto corrupti. Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Sint, delectus
        expedita! Veritatis perferendis ducimus accusantium perspiciatis eius
        voluptatibus quisquam mollitia, dolore sequi placeat. Vitae totam nulla
        repudiandae accusamus, natus et? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Autem doloremque, nulla repellendus atque magnam
        aperiam quam vero maxime quae sint aut, minima velit nobis porro
        excepturi accusamus dolorum, iusto corrupti. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Sint, delectus expedita! Veritatis
        perferendis ducimus accusantium perspiciatis eius voluptatibus quisquam
        mollitia, dolore sequi placeat. Vitae totam nulla repudiandae accusamus,
        natus et? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Autem doloremque, nulla repellendus atque magnam aperiam quam vero
        maxime quae sint aut, minima velit nobis porro excepturi accusamus
        dolorum, iusto corrupti. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Sint, delectus expedita! Veritatis perferendis ducimus
        accusantium perspiciatis eius voluptatibus quisquam mollitia, dolore
        sequi placeat. Vitae totam nulla repudiandae accusamus, natus et? Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Autem doloremque,
        nulla repellendus atque magnam aperiam quam vero maxime quae sint aut,
        minima velit nobis porro excepturi accusamus dolorum, iusto corrupti.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, delectus
        expedita! Veritatis perferendis ducimus accusantium perspiciatis eius
        voluptatibus quisquam mollitia, dolore sequi placeat. Vitae totam nulla
        repudiandae accusamus, natus et?
      </section>
      <section id="gallery">
        <h1>gallery</h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
        doloremque, nulla repellendus atque magnam aperiam quam vero maxime quae
        sint aut, minima velit nobis porro excepturi accusamus dolorum, iusto
        corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Sint, delectus expedita! Veritatis perferendis ducimus accusantium
        perspiciatis eius voluptatibus quisquam mollitia, dolore sequi placeat.
        Vitae totam nulla repudiandae accusamus, natus et? Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Autem doloremque, nulla
        repellendus atque magnam aperiam quam vero maxime quae sint aut, minima
        velit nobis porro excepturi accusamus dolorum, iusto corrupti. Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Sint, delectus
        expedita! Veritatis perferendis ducimus accusantium perspiciatis eius
        voluptatibus quisquam mollitia, dolore sequi placeat. Vitae totam nulla
        repudiandae accusamus, natus et? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Autem doloremque, nulla repellendus atque magnam
        aperiam quam vero maxime quae sint aut, minima velit nobis porro
        excepturi accusamus dolorum, iusto corrupti. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Sint, delectus expedita! Veritatis
        perferendis ducimus accusantium perspiciatis eius voluptatibus quisquam
        mollitia, dolore sequi placeat. Vitae totam nulla repudiandae accusamus,
        natus et? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Autem doloremque, nulla repellendus atque magnam aperiam quam vero
        maxime quae sint aut, minima velit nobis porro excepturi accusamus
        dolorum, iusto corrupti. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Sint, delectus expedita! Veritatis perferendis ducimus
        accusantium perspiciatis eius voluptatibus quisquam mollitia, dolore
        sequi placeat. Vitae totam nulla repudiandae accusamus, natus et? Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Autem doloremque,
        nulla repellendus atque magnam aperiam quam vero maxime quae sint aut,
        minima velit nobis porro excepturi accusamus dolorum, iusto corrupti.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, delectus
        expedita! Veritatis perferendis ducimus accusantium perspiciatis eius
        voluptatibus quisquam mollitia, dolore sequi placeat. Vitae totam nulla
        repudiandae accusamus, natus et?
      </section>
      {authSession?.user && <UserInfo user={authSession?.user} />}
      {!authSession?.user && (
        <Link
          className="font-medium mt-2 text-blue-600 hover:underline"
          href="/login"
        >
          Login
        </Link>
      )}
    </>
  );
}
