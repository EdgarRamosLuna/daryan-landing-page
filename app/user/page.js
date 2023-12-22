import UserProfile from "@/components/UserProfile";


// app/user/page.js
export default function ProfilePage() {
    // const data = useServerData(() => {
    //   // Realiza aquí tu llamada fetch o lógica del lado del servidor
    //   // Por ejemplo: return fetch('https://api.example.com/user').then(res => res.json());
    // });
  
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Renderiza tu componente con los datos obtenidos */}
        <UserProfile />
      </main>
    );
  }
  