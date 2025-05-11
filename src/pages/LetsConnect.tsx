import SectionTitle from "../component/global/SectionTitle";
import Form from "../component/letsConnect/Form";
import SocialMessage from "../component/letsConnect/SocialMessage";

const LetsConnect = () => {
  return (
    <div className="mt-12">
      {/* info */}
      <div>
        <SectionTitle text1="Let's" text2="Connect" />
        <p style={{ fontFamily: "var(--font-krona)" }}>
          Got an idea in mind? Let’s build something great together.
        </p>
      </div>

      {/* social */}
      <div className="grid grid-cols-1 xl:grid-cols-3 mt-12 items-center gap-8 border-t border-t-[#333] pt-8">
        <div className="md:col-span-1 mx-auto w-[400] xl:w-[450px]">
          <SocialMessage />
        </div>
        <div className="md:col-span-2">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default LetsConnect;
