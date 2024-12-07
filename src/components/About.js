import Image from 'next/image';

export default function About() {
    return (
      <about className="flex items-center justify-between px-4 py-8 my-8 mx-20">
        <div className="flex-shrink-0 w-1/2">
          <Image
            src="/images/About.jpeg"
            alt="About Image"
            width={967}
            height={662}
            objectFit="cover"
          />
        </div>

        <div className="w-1/2 pl-8">
            <h2 className="text-4xl font-semibold text-blue-500">Tentang Klinik Vida</h2>
            <p className="text-gray-600 text-sm mt-2">Terpercaya sejak 2010</p>
            <p className="mt-4 text-gray-700">
                Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look.
            </p>
            <p className="mt-4 text-gray-600">
                Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable 
            </p>
        </div>
      </about>
    );
  }
  