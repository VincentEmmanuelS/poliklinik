import Image from 'next/image';

export default function HomepageImage() {
    return (
      <homepageImage className="relative overflow-hidden">
        <Image
         src="/images/HomepageBG.png"
         alt="Homepage Image"
         width={1200}
         height={628}
         style={{ 
            width: '100%',
            height: 'auto',
            filter: 'blur(2px)',
            transform: 'scaleX(-1)'
        }}
        />

        <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-30">
          <div className="text-white px-4 sm:px-8">
          <Image
            src="/images/Logo2.png"
            alt="Logo 2"
            width={669}
            height={539}
            style={{ 
                width: '50%', 
                height: 'auto',
                filter: 'brightness(0) invert(1)',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}
            className="mb-4"    
            color="bg-white"
          />
          <p className="text-xl mb-6">
            Menghubungkan kesehatan Indonesia melalui jaringan klinik terstandarisasi
          </p>
          <a
            href="/Register"
            className="inline-block px-8 py-3 bg-[#03cafc] text-white rounded-lg hover:bg-blue-500"
          >
            Daftar Sekarang
          </a>
         </div>
        </div>
      </homepageImage>
    );
  }
  