"use client";

import { useTheme } from "next-themes";
import ContactInfo from "./contantInfo";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div
      className="wow fadeInUp shadow-three dark:bg-gray-dark relative z-10 rounded-sm bg-white p-8 sm:p-11 lg:p-8 xl:p-11"
      data-wow-delay=".2s"
    >
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
      Contact Us
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
      Have a question or comment?
      </p>

      <div>
      <div>
          <ContactInfo title="info@usability.com"  Icon={MailOutlineIcon} />
          <ContactInfo title="123 Main St" Icon={HomeIcon} />
          <ContactInfo title="123-456-7890" Icon={PhoneIcon} />
        </div>
      </div>
    </div>
  );
};

export default NewsLatterBox;
