import Image from "next/image";
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import styles from "@/styles/Home.module.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Main from "@/components/home/main";
import FlashDeals from "@/components/home/flashDeals";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";
import Category from "@/components/home/category";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      <Header />
      <div className={styles.home}>
        <div className={styles.container}>
          <Main />
          <FlashDeals />
          <div className={styles.home__category}>
            {/* <Category
              header="Laptop"
              products={_laptop}
              background="#5a31f4;"
            />
            <Category
              header="Laptop"
              products={asus_laptop}
              background="#5a31f4;"
            />
            <Category
              header="Laptop"
              products={asus_laptop}
              background="#5a31f4;"
            />
            <Category
              header="Laptop"
              products={asus_laptop}
              background="#5a31f4;"
            /> */}
          </div>
        </div>
        <Footer />
      </div>
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
