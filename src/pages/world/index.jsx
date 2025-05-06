import React, { useState } from "react";
import Header from "../../shared/ui/header";
import Footer from "../../shared/ui/Footer/footer";
import PostCard from "../../shared/ui/PostCard";


const WorldPage = () => {
  return (
    <>
        <Header />
        <section className="mt-[55px] h-[1px] w-full" />
        <PostCard />
        <Footer />
    </>
  );
};

export default WorldPage;