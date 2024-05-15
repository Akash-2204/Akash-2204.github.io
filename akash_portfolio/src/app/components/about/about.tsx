import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './About.css';
import { about } from '../../portfolio'; 

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
          <a href={resume}>
            <span className="btn btn--outline">Resume</span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a href={social.github} aria-label="github" className="link link--icon">
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a href={social.linkedin} aria-label="linkedin" className="link link--icon">
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