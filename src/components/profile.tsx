import Image from "next/image";

export const Profile = () => {
  return (
    <div className="container relative mx-auto h-full py-8">
      <div className="relative hidden md:block md:h-[720px] md:w-[720px]">
        <Image
          className="rounded-xl"
          src="/hero/about.webp"
          alt="Tentang PT Baja Titian Utama"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="right-32 w-full space-y-4 rounded-xl bg-white bg-white bg-card-linear p-8 shadow-sm md:absolute md:top-1/2 md:w-[600px] md:-translate-y-1/2 md:transform">
        <h1 className="text-center text-3xl font-bold text-primary md:text-5xl">
          Profil
        </h1>
        <p className="leading-loose">
          <strong className="font-bold text-primary">
            PT Baja Titian Utama
          </strong>
          <strong> </strong>
          adalah perusahaan yang resmi berdiri pada tanggal 18 November 2021,
          yang memegang konsesi Proyek Penggantian dan/atau Duplikasi Jembatan
          Callender Hamilton di Pulau Jawa. Dengan total konsesi selama 12 tahun
          yang terdiri dari 2 tahun masa konstruksi dan 10 tahun masa layanan.
          Dengan lingkup pekerjaan meliputi penggantian dan/atau duplikasi di 37
          lokasi jembatan CH eksisting dengan Jembatan Steel Box Girder, Steel I
          Girder, beserta bangunan pelengkap (termasuk Structural Health
          Monitoring System/ SHMS), serta 0&M selama Masa Layanan.
        </p>
      </div>
    </div>
  );
};
