import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./about.css";
import { about } from "../../portfolio";

interface SocialLinks {
  github?: string;
  linkedin?: string;
}

interface AboutData {
  name?: string;
  role?: string;
  description?: string;
  resume?: string;
  social?: SocialLinks;
}

const About: React.FC = () => {
  const { name, role, description, resume, social }: AboutData = about;

  return (
    <div className="about center">
      {name && (
        <h1>
          Hi, I am <span className="about__name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="about__role">A {role}.</h2>}
      <p className="about__desc">{description && description}</p>

      <div className="about__contact center">
        {resume && (
          <a href={resume} target="_blank" 
          rel="noopener noreferrer">
            <span className="btn btn--outline">Resume</span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
