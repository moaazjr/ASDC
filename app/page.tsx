import Image from "next/image";
import Navbar from "../components/navbar";
import Landing from "@/components/Landing/Landing";
import Cards from "@/components/Cards/cards";
import Build from "@/components/Build/Build";
import Service from "@/components/Service/Service";
import Boxes from "@/components/Boxes/Boxes";
import Rasid from "@/components/Rasid/Rasid";
import Clients from "@/components/Clients/Clients";
import Form from "@/components/Form/Form";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="">
    <Navbar />
    <Landing />
    <Cards />
    <Build />
    <Service />
    <Boxes />
    <Rasid />
    <Clients />
    <Form />
    <Footer />
   
    </main>
  );
}
