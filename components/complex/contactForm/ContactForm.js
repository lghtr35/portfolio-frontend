"use client";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { colors } from "@/helpers/conf";
import { postRequest } from "@/helpers/request";
import "./ContactForm.css";
import { Button, Form } from "react-bootstrap";

export const ContactForm = (props) => {
  const [header, setHeader] = useState("");
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");
  const sendMail = (e) => {
    e.preventDefault();
    const payload = {
      destination: "serdilcakmak@gmail.com",
      sender: sender,
      subject: header,
      message: message,
    };
    postRequest("/Mail", payload);
    setIsExpanded(false);
  };
  return (
    <div style={props.style}>
      <Accordion
        sx={{
          color: colors.text,
          backgroundColor: "transparent",
        }}
        onClick={async () => {
          await new Promise((r) => setTimeout(r, 300));
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ ontWeight: 700, color: colors.text }} />
          }
        >
          <Typography sx={{ fontWeight: 700 }} className="contact-summary">
            Contact Me
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Form onSubmit={sendMail}>
            <Form.Group controlId="emailForm.subject">
              <Form.Control
                style={{ width: "100%" }}
                type="text"
                placeholder="Sender"
                value={sender}
                onChange={(e) => setSender(e.target.value)}
              ></Form.Control>
              <Form.Control
                style={{ width: "100%" }}
                type="text"
                placeholder="Subject"
                value={header}
                onChange={(e) => setHeader(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="emailForm.message">
              <Form.Control
                style={{ width: "100%", height: "4rem", overflow: "scroll" }}
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button
              style={{
                width: "102.5%",
                height: "30px",
                backgroundColor: colors.text,
                borderColor: colors.primary,
                cursor: "pointer",
              }}
              variant="success"
              type="submit"
            >
              Send
            </Button>
          </Form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
