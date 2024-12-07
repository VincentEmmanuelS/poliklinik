export default function NavBar() {
  return (
    <nav className="flex justify-end items-center sticky top-0 h-[88px] w-full border-b-1 border-e3e3e3 box-border item-center bg-[#fff] z-20">
        <a href="/AnotherPage1" className="mx-2.5" >Lihat Dokter</a>
        <a href="/AnotherPage2" className="mx-2.5" >Pendaftaran dan Riwayat</a>
        <a href="/Login" className="mx-2.5 mr-2 px-5 p-1 bg-[#e3e3e3] rounded-lg" >Masuk</a>
        <a href="/Register" className="mx-2.5 ml-2 mr-5 px-5 p-1 bg-[#03cafc] rounded-lg text-[#f5f5f5]" >Daftar</a>
      </nav>
  );
}

