import Head from "next/head";
import Editor from "../components/Editor/Editor";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Editor />
    </div>
  );
}
