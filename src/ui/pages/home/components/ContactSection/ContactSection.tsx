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
import {
  Button,
  TextAreaControlled,
  TextFieldControlled,
} from "../../../../components";
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
} from "react-hook-form";
import { TFunction } from "i18next";

interface ContactSectionProps {
  handleContactForm: () => {
    onSubmit: (data: FieldValues) => void;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    control: Control<FieldValues, any>;
    errors: FieldErrors<FieldValues>;
  };
  t: TFunction<"home", undefined, "home">;
}

export const ContactSection: FC<ContactSectionProps> = ({
  handleContactForm,
  t,
}) => {
  const { onSubmit, handleSubmit, control, errors } = handleContactForm();
  return (
    <StyledContactSection id="contact">
      <h2 className="font-medium text-xl md:text-2xl text-center text-primary">
        {t("contactSection.title")}
      </h2>
      <h3 className="font-medium text-2xl md:text-3xl text-center text-secondary">
        {t("contactSection.subtitle")}
      </h3>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 ">
        <StyledContactInformation>
          <h4 className="font-medium text-xl lg:text-2xl">
            {t("contactSection.contactInformation")}
          </h4>
          <p className="font-medium text-lg">
            {t("contactSection.contactDetails")}
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
          <TextFieldControlled
            id="name"
            name="name"
            label={`${t("contactSection.nameLabel")}`}
            placeholder={`${t("contactSection.namePlaceholder")}`}
            control={control}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextFieldControlled
            id="email"
            name="email"
            label={`${t("contactSection.emailLabel")}`}
            placeholder={`${t("contactSection.emailPlaceholder")}`}
            control={control}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextAreaControlled
            id="message"
            name="message"
            label={`${t("contactSection.messageLabel")}`}
            placeholder={`${t("contactSection.messagePlaceholder")}`}
            maxLength={160}
            control={control}
            error={!!errors.message}
            helperText={errors.message?.message}
          />
          <Button color="secondary" onClick={handleSubmit(onSubmit)}>
            {t("contactSection.buttonSend")}
          </Button>
        </StyledContactForm>
      </div>
    </StyledContactSection>
  );
};
