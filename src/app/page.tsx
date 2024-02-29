import Image from "next/image";
import ContactForm from "./components/contacForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative w-full h-80">
        <Image
          src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          layout="fill"
          objectFit="cover"
          alt="Imagen de fondo"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <ContactForm />
        </div>
      </div>
      <h1 className="text-1g font-bold">Hola</h1>
    </main>
  );
}
