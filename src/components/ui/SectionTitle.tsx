import React from "react";

type SectionProps = {
  title: string;
  subTitle?: string;
}

const SectionTitle: React.FC<SectionProps> = ({ title, subTitle }) => {
  return (
    <div className="max-w-xl mx-auto mt-10 mb-14 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">{title}</h2>
      <p className=" mt-2">{subTitle}</p>
    </div>
  );
};

export default SectionTitle;