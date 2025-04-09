interface SectionTitleProps {
  title: string;
  description?: string;
}

const SectionTitle = ({ title, description }: SectionTitleProps) => {
  return (
    <div className="animate_top text-center mx-auto">
      <h2 className="font-bold text-3xl xl:text-sectiontitle3 text-black dark:text-white md:w-4/5 mx-auto mb-4">
        {title}
      </h2>
      {description && (
        <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">{description}</p>
      )}
    </div>
  );
};

export default SectionTitle;
