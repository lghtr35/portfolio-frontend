import { Box, Typography } from "@mui/material";
import { Image } from "react-bootstrap";
import { AdjustableSection } from "../../components/adjustable.section";
import "./About.css";

export const About = () => {
  const list = [
    "Istanbul Technical University Computer Engineering (B.S.)",
    "Full-Stack Development",
    "Internet of Things",
  ];
  return (
    <Box>
      <AdjustableSection minHeight="90vh">
        <div style={{ padding: 30 }}>
          <Typography variant="h2" fontWeight={500} fontFamily="Helvetica neue">
            Serdıl Çağın Çakmak
          </Typography>
          <div>
            <ul>
              {list.map((el) => (
                <li>
                  <Typography variant="h5" fontFamily="Helvetica neue">
                    {el}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Typography fontFamily="Helvetica neue">
              Hi, I am Serdıl Çağın a Software Engineer living in Turkey. I am
              interested in Web Development, Computer Communications and IoT. I
              have 2 years of experience. Also, I have know-how about various
              differnet areas of Software Engineering.
            </Typography>
          </div>
        </div>
      </AdjustableSection>
    </Box>
  );
};
