/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import ScrollToButton from '@/components/ScrollToButton';
import { faDiscord, faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faBookBookmark, faChartSimple, faCommentDots, faHome, faPaperPlane, faRunning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { InstagramEmbed } from 'react-social-media-embed';

export default function Home() {
  return (
    <main className="">
      <div className="bg-base-200 lg:h-screen py-20 text-center lg:flex lg:text-start flex-row-reverse p-5 sm:p-20 items-center">
        <div className="p-5">
          <img src="/me.jpg" className="md:h-80 md:w-80 mx-auto rounded-full shadow-2xl border-4 border-primary" alt='LowScarlet' />
        </div>
        <div className="grow">
          <p>Teknik Informatika</p>
          <h1 className="text-xl sm:text-4xl font-bold">Technopreneurship</h1>
          <p className="py-3 tracking-wide">Tegar Maulana Fahreza</p>
          <div className='space-x-5 text-xl'>
            <Link href={'https://github.com/LowScarlet'}>
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link href={'https://www.instagram.com/low_scarlet/'}>
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link href={'https://www.linkedin.com/in/tegar-maulana-fahreza-04615a221/'}>
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </div>
          <div className="mt-5 space-y-2 md:space-x-5 px-5 sm:px-0">
            <ScrollToButton className="btn btn-primary btn-sm w-full md:w-auto" to={'journey'}>
              <FontAwesomeIcon icon={faRunning} className='text-lg' />
              Explore
            </ScrollToButton>
            <Link href={'https://wa.me/6281270634992'} className="btn btn-outline btn-secondary btn-sm w-full md:w-auto">
              <FontAwesomeIcon icon={faWhatsapp} className='text-lg' />
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      <div id="journey" className="bg-stone-950 pb-20">
        <div className="max-w-screen-lg mx-auto lg:flex px-4 py-10 lg:space-x-5 space-y-10 lg:space-y-0">
          <div className="grow space-y-10">
            <div className=''>
              <h1 className='text-2xl'><FontAwesomeIcon icon={faBookBookmark} /> Pengertian Technopreneurship</h1>
              <p className='text-justify indent-8'>
                Secara singkat Technopreneurship merupakan konsep yang menggabungkan keterampilan teknis, pengetahuan bisnis, dan semangat kewirausahaan untuk menciptakan dan mengembangkan bisnis berbasis teknologi, dengan fokus pada pemanfaatan inovasi teknologi guna menciptakan nilai ekonomi melalui identifikasi peluang bisnis, pengembangan solusi inovatif, dan penerapan strategi bisnis yang efektif.
              </p>
              <img src="/img1.png" className="mt-10 w-full mx-auto rounded-sm shadow-2x" alt='LowScarlet' />
            </div>
            <div className=''>
              <h1 className='text-2xl'><FontAwesomeIcon icon={faBookBookmark} /> Enterprenuership bersama Takoyaki Janda</h1>
              <p className='text-justify indent-8'>
                Kami melaksanakan kunjungan ke Takoyaki Janda yang terletak di daerah Riau Garden Pekanbaru, dengan tujuan untuk mengumpulkan informasi dan pengalaman mengenai konsep bisnis mereka yang mengkhususkan diri dalam menyediakan takoyaki bagi anak muda.
                <br /><br />
                Kami juga mendapatkan informasi mengenai proses produksi takoyaki di Takoyaki Janda. Mereka menggunakan bahan-bahan berkualitas tinggi dan resep rahasia yang dikembangkan secara khusus untuk menciptakan tekstur yang lezat dan cita rasa yang menggugah selera. Takoyaki Janda juga menawarkan berbagai pilihan topping dan saus kreatif yang sesuai dengan selera anak muda masa kini.
                <br /><br />
                Kunjungan ini memberikan kami wawasan yang berharga tentang bagaimana menjalankan bisnis kuliner yang menargetkan pasar anak muda. Kami belajar tentang pentingnya menciptakan konsep yang menarik, menggunakan bahan berkualitas, dan menyediakan lingkungan yang sesuai dengan preferensi target pasar.
                <br /><br />
                Kami berterima kasih kepada Owner Takoyaki Janda atas kesempatan yang diberikan kepada kami untuk mengunjungi dan mendapatkan informasi berharga ini. Kami berharap dapat menerapkan pengetahuan yang kami peroleh dalam proyek kelompok kami dan mengembangkan ide-ide yang inovatif dalam usaha Technopreneurship kami di masa depan.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Link href={'https://www.instagram.com/p/CtzFYXTpnjk/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='}>
                    <img src="/img3.jpg" className="mt-10 w-full object-cover h-80 mx-auto rounded-sm shadow-2x" alt='LowScarlet' />
                  </Link>
                </div>
                <div>
                  <Link href={'https://www.instagram.com/p/CtzFuLbJWZF/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='}>
                    <img src="/img4.jpg" className="mt-10 w-full object-cover h-80 mx-auto rounded-sm shadow-2x" alt='LowScarlet' />
                  </Link>
                </div>
              </div>
              <Link href={'https://www.instagram.com/p/CtzIJexJ21b/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='}>
                <img src="/img5.jpg" className="mt-4 object-cover h-80 w-full mx-auto rounded-sm shadow-2x" alt='LowScarlet' />
              </Link>
              <Link href={'https://www.instagram.com/p/CtzFaNopDq8/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='}>
                <img src="/img6.jpg" className="mt-4 object-cover h-80 w-full mx-auto rounded-sm shadow-2x" alt='LowScarlet' />
              </Link>
            </div>
            <div className=''>
              <h1 className='text-2xl'><FontAwesomeIcon icon={faBookBookmark} /> Kunjungan ke Riuh Coffe</h1>
              <p className='text-justify indent-8'>
                Pada suatu kesempatan, saya mendapatkan pengalaman yang berharga saat mengikuti Materi Penguatan yang dipandu oleh dosen pembimbing kami, Bapak Dwi Haryono M.Kom. Kegiatan ini melibatkan kunjungan ke Riuh Coffee, sebuah tempat kopi yang terletak di Jl. Arifin Ahmad, Pekanbaru, Riau.
                <br /><br />
                Selama kunjungan tersebut, kami diberikan kesempatan untuk mendengarkan beberapa narasumber yang sangat menginspirasi. Salah satunya adalah Bapak Edi Susanto, S.T, serta Chandra Sapta, S.E, M.H, yang berbagi cerita dan pengalaman menarik mereka dalam dunia Teknopreneurship.
                <br /><br />
                Dari materi penguatan tersebut, saya berhasil mengambil beberapa kesimpulan berikut:
                <br />
                Menurut Bapak Edi Susanto, S.T:
                "Untuk menjadi seorang entrepreneur yang sukses, kita harus belajar dari orang-orang berpengalaman dan memiliki Soft Skill yang penting, seperti kejujuran, konsistensi, integritas, dan ketekunan."
                <br /><br />
                Menurut Bapak Chandra Sapta, S.E, M.H:
                "Jangan pernah berhenti menggali potensi dan mengembangkan keterampilan yang kita miliki, serta selalu mengikuti perkembangan teknologi yang ada saat ini."
                <br /><br />
                Kunjungan ke Riuh Coffee dan mendengarkan cerita inspiratif dari narasumber tersebut memberikan pengalaman yang sangat berharga bagi saya. Saya merasa terinspirasi untuk terus belajar dan mengasah keterampilan saya agar sukses di dunia Teknopreneurship yang penuh tantangan ini.
              </p>
              <img src="/img7.jpg" className="mt-4 object-cover object-center h-96 w-full mx-auto rounded-sm shadow-2x" alt='LowScarlet' />
            </div>
          </div>
          <div className="lg:max-w-sm">
            <div className='lg:sticky lg:top-5 space-y-10'>
              <div>
                <h1 className='text-2xl'><FontAwesomeIcon icon={faBookBookmark} /> Tentang Penulis</h1>
                <p className='mt-2 px-5 text-justify indent-8'>
                  Tegar Maulana Fahreza, seorang mahasiswa prodi Teknik Informatika di kampus STMIK AMIK Riau, memiliki potensi besar untuk menjadi seorang technopreneur yang sukses dengan memadukan pengetahuan teknis dalam bidang teknologi informatika dan jiwa kewirausahaan. Dengan dedikasi dan pengetahuan yang diperoleh, Berharap menciptakan inovasi teknologi yang bernilai dan membangun bisnis yang sukses di era digital.
                </p>
                <img src="/me.jpg" className="mt-10 h-40 w-40 mx-auto rounded-full shadow-2x" alt='LowScarlet' />
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-screen-lg mx-auto'>
          <h1 className='text-2xl'><FontAwesomeIcon icon={faBookBookmark} /> Tentang Stmik Amik Riau</h1>
          <p className='mt-2 px-5 text-justify indent-8'>
            STMIK AMIK Riau merupakan sebuah perguruan tinggi yang terletak di Pekanbaru, Riau. Dengan komitmen yang kuat terhadap bidang teknologi informasi dan komunikasi, STMIK AMIK Riau telah menjalin reputasi yang sangat baik. Perguruan tinggi ini terkenal sebagai lembaga pendidikan yang unggul dalam menghasilkan lulusan berkualitas di bidang IT.
            Dengan lingkungan akademik yang inspiratif dan fasilitas yang modern, STMIK AMIK Riau memberikan pengalaman belajar yang menyeluruh dan mempersiapkan mahasiswa untuk menjadi profesional yang kompeten dan inovatif di dunia industri teknologi. Kurikulum yang terkini dan dosen-dosen berkualitas menjadikan perguruan tinggi ini sebagai pilihan utama bagi para calon mahasiswa yang berminat dalam bidang IT.
          </p>
          <img src="/img2.jpg" className="my-10 object-cover h-80 w-full mx-auto rounded-sm shadow-2x" alt='LowScarlet' />
          <p className='px-5 text-justify indent-8'>
            Selain itu, STMIK AMIK Riau juga aktif dalam melakukan riset dan pengembangan teknologi, serta menjalin kemitraan dengan industri terkait untuk memastikan bahwa program-program pendidikan yang diselenggarakan selalu relevan dengan kebutuhan pasar. Dengan demikian, lulusan STMIK AMIK Riau memiliki daya saing yang tinggi dan siap untuk menghadapi tantangan dunia kerja.
            STMIK AMIK Riau, sebagai lembaga pendidikan yang berdedikasi, terus berupaya memberikan pendidikan yang berkualitas, mendukung inovasi, dan menciptakan lingkungan belajar yang kondusif. Dengan menggabungkan teori dan praktik, perguruan tinggi ini memberikan kesempatan bagi mahasiswa untuk mengembangkan potensi mereka secara maksimal.
            Dengan segala prestasinya, STMIK AMIK Riau menjadi pilihan yang tepat bagi mereka yang ingin memperoleh pendidikan IT yang berkualitas dan menjadi bagian dari komunitas teknologi yang berkembang pesat.
          </p>
        </div>
        <div className="bg-base-200 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-5">
            <h2 className="text-center text-lg font-semibold leading-8">
              Powered by
            </h2>
            <div className="flex justify-center">
              <svg aria-label="Vercel Inc." fill="white" height="20" role="img" viewBox="0 0 283 64">
                <path d="M37 0l37 64H0L37 0zM159.6 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7h28.3c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM267.3 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7H267c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM219.3 28.3l6.8-3.9c-3.2-5-8.9-7.8-15.8-7.8-10.9 0-18.5 7.2-18.5 17.5s7.6 17.5 18.5 17.5c6.9 0 12.6-2.8 15.8-7.8l-6.8-3.9c-1.8 3-5 4.7-9 4.7-6.3 0-10.5-4.2-10.5-10.5s4.2-10.5 10.5-10.5c3.9 0 7.2 1.7 9 4.7zM282.3 5.6h-8v45h8v-45zM128.5 5.6h-9.2L101.7 36 84.1 5.6h-9.3L101.7 52l26.8-46.4zM185.1 25.8c.9 0 1.8.1 2.7.3v-8.5c-6.8.2-13.2 4-13.2 8.7v-8.7h-8v33h8V36.3c0-6.2 4.3-10.5 10.5-10.5z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="btm-nav btm-nav-md ">
        <button className="text-primary active">
          <FontAwesomeIcon icon={faHome} className='text-lg' />
        </button>
        <button>
          <FontAwesomeIcon icon={faBookBookmark} className='text-lg' />
        </button>
        <button>
          <FontAwesomeIcon icon={faChartSimple} className='text-lg' />
        </button>
        <button>
          <FontAwesomeIcon icon={faCommentDots} className='text-lg' />
        </button>
      </div> */}

    </main>
  )
}
