import {
  IconMail,
  IconTelegram,
  IconDiscord,
  IconSkype,
  IconGithub,
  IconExternal,
} from "@/components/Icons";

const Icon = ({ name }) => {
  switch (name) {
    case "mail":
      return <IconMail />;
    case "github":
      return <IconGithub />;
    case "telegram":
      return <IconTelegram />;
    case "skype":
      return <IconSkype />;
    case "discord":
      return <IconDiscord />;
    default:
      return <IconExternal />;
  }
};

export default Icon;
