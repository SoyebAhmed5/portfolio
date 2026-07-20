import {
  Mail,
//   Github,
//   Linkedin,
  Globe,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import SocialCard from "./SocialCard";
import AvailabilityBadge from "./AvailabilityBadge";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <AvailabilityBadge />

      <div>
        <h2 className="text-4xl font-bold">
          Let's Build Something Together
        </h2>

        <p className="mt-4 text-zinc-400 leading-8">
          Whether it's an internship, freelance project,
          open-source collaboration, or just a conversation
          about technology, feel free to reach out.
        </p>
      </div>

      <div className="space-y-4">
        <SocialCard
          title="Email"
          subtitle="ahmedsoyeb596@email.com"
          href="mailto:ahmedsoyeb596@email.com"
          icon={<Mail size={22} />}
        />

        <SocialCard
          title="GitHub"
          subtitle="github.com/SoyebAhmed5"
          href="https://github.com/SoyebAhmed5"
          icon={<FaGithub size={22} />}
        />

        <SocialCard
          title="LinkedIn"
          subtitle="linkedin.com/in/soyebahmed2005"
          href="https://www.linkedin.com/in/soyebahmed2005"
          icon={<FaLinkedin size={22} />}
        />

        <SocialCard
          title="Codolio"
          subtitle="Competitive Programming Profile"
          href="https://codolio.com/profile/Soyeb_Ahmed"
          icon={<Globe size={22} />}
        />
      </div>
    </div>
  );
}