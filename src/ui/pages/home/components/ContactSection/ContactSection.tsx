import { FC } from "react";
import {
  StyledContactForm,
  StyledContactInformation,
  StyledContactSection,
} from "./ContactSection.styles";
import {
  BigEllipseWatermarkContact,
  EmailIcon,
  GithubIcon,
  LinkedInIcon,
  SmallEllipseWatermarkContact,
  UserIcon,
} from "../../../../assets/Svg";
import { Button, TextArea, TextField } from "../../../../components";

export const ContactSection: FC = () => {
  return (
    <StyledContactSection id="contact">
      <h2 className="font-medium text-xl md:text-2xl text-center text-primary">
        CONTACT ME
      </h2>
      <h3 className="font-medium text-2xl md:text-3xl text-center text-secondary">
        Get In Touch
      </h3>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 ">
        <StyledContactInformation>
          <h4 className="font-medium text-xl lg:text-2xl">
            Contact Information
          </h4>
          <p className="font-medium text-lg">
            Have some project? or maybe just want to say hello? I'd love to hear
            from you
          </p>
          <ul className="flex flex-col gap-4 font-semibold text-lg z-[2]">
            <li className="py-4 flex gap-4 items-center">
              <UserIcon /> Javier Andrés Gamboa Duarte
            </li>
            <li className="flex gap-4 items-center">
              <EmailIcon />
              <a
                className="text-white no-underline hover:underline"
                href="mailto:jgamboa93@hotmail.com"
              >
                jgamboa93@hotmail.com
              </a>
            </li>
          </ul>
          <ul className="flex gap-8 mt-auto z-[2]">
            <li>
              <a
                className="w-16 h-16 rounded-full grid place-content-center hover:bg-primary hover:cursor-pointer"
                target="blank__"
                href="https://www.linkedin.com/in/javiergamboaduarte/"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                className="w-16 h-16 rounded-full grid place-content-center hover:bg-primary hover:cursor-pointer"
                target="blank__"
                href="https://github.com/Xaviz10"
              >
                <GithubIcon />
              </a>
            </li>
          </ul>
          <BigEllipseWatermarkContact className="absolute left-0" />
          <SmallEllipseWatermarkContact className="absolute right-1/4 top-1/3" />
        </StyledContactInformation>
        <StyledContactForm>
          <TextField
            id="name"
            name="name"
            label="Name"
            placeholder="Your name"
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            placeholder="Your email"
          />
          <TextArea
            id="message"
            name="message"
            label="Message"
            placeholder="Your message"
          />
          <Button color="secondary">Send Message</Button>
        </StyledContactForm>
      </div>
    </StyledContactSection>
  );
};
