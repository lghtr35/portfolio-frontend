import { Avatar, Box, Chip, Divider, Stack, Typography } from "@mui/material";
import { Image } from "react-bootstrap";
import { AdjustableSection } from "../../components/adjustable.section";
import "./About.css";

export const About = () => {
  const list = [
    "Web Development",
    "Computer Communications",
    "Internet of Things",
  ];
  return (
    <Box>
      <AdjustableSection minHeight="88vh">
        <div style={{ paddingBlock: 20, paddingInline: 60 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              marginBlock: "3vh",
            }}
          >
            <Avatar sx={{ height: "30vh", width: "30vh" }} />
            <Typography
              fontSize="3.6vw"
              fontWeight={500}
              fontFamily="Helvetica neue"
              marginLeft="4vw"
            >
              Serdıl Çağın Çakmak
            </Typography>
          </div>
          <div>
            <Typography fontSize="1.7vw" fontFamily="Helvetica neue">
              Istanbul Technical University - Computer Engineering (B.S.)
            </Typography>
            <Divider sx={{ marginTop: 3 }} textAlign="left" variant="middle">
              <Typography fontSize="1.7vw" fontFamily="Helvetica neue">
                Interests
              </Typography>
            </Divider>
            <ul>
              {list.map((el) => (
                <li>
                  <Typography fontSize="1.5vw" fontFamily="Helvetica neue">
                    {el}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          <div></div>
        </div>
      </AdjustableSection>
    </Box>
  );
};
