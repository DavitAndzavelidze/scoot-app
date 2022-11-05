import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "How do I download the app?",
      content: `To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you'll be re-directed to the correct page.`,
    },
    {
      title: "Can I find a nearby Scoots?",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Do I need a license to ride?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
  ],
};

const data_driving = {
  rows: [
    {
      title: "Should I wear a helmet?",
      content: `Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.`,
    },
    {
      title: "How about the rules & regulations?",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "What if I damage my Scoot?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
  ],
};

const styles = {
  bgColor: "#F2F5F9",
  rowTitleColor: "#495567",
  rowTitlePaddingLeft: "32px",
  rowContentPaddingLeft: "32px",
  rowContentPaddingRight: "32px",
  rowContentPaddingBottom: "32px",
  rowContentPaddingTop: "24px",
  rowContentColor: "grey",
  arrowColor: "#E5735C",
};

const config = {
  animate: true,
  tabFocus: true,
};

export default function FAQs() {
  return (
    <div className="lg:flex flex-col">
      <h2 className="text-center font-bold text-[24px] md:text-[48px] text-[#495567] mb-8 lg:mb-[64px]">
        FAQs
      </h2>
      <div className="lg:flex lg:justify-center">
        <h2 className="text-center font-bold text-[24px] md:text-[40px] text-[#495567] mb-8 lg:mr-[30px]">
          How it works
        </h2>
        <div className="mx-8 lg:w-[730px]">
          <Faq data={data} styles={styles} config={config} />
        </div>
      </div>
      <div className=" my-[48px] md:mb-[120px] lg:flex lg:justify-center">
        <h2 className="text-center font-bold text-[24px] md:text-[40px] text-[#495567] mb-8 lg:mr-[30px]">
          Safe driving
        </h2>
        <div className="mx-8 lg:w-[730px]">
          <Faq data={data_driving} styles={styles} config={config} />
        </div>
      </div>
    </div>
  );
}
