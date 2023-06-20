import Image from "next/image";
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import styles from "@/styles/Home.module.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

// export async function getServerSideProps() {
//   let data = await axios
//     .get("https://api.ipregistry.co/?key=eso5bxkqusf26g6e")
//     .then((res) => {
//       return res.data.location.country;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   return {
//     props: {
//       country: { name: data.name, flag: data.flag.emojitwo },
//     },
//   };
// }
