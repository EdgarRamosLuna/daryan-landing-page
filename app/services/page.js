import UserProfile from "@/components/UserProfile";
import Link from "next/link";


// app/user/page.js
export default function Servicespage() {
    // const data = useServerData(() => {
    //   // Realiza aquí tu llamada fetch o lógica del lado del servidor
    //   // Por ejemplo: return fetch('https://api.example.com/user').then(res => res.json());
    // });
  
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            Servicios
            <Link href="/services/666">
                Servicio 666
            </Link>
      </main>
    );
  }
  