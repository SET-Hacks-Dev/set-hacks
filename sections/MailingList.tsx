import { ArrowRight, Check } from "react-feather";
import { Button, Input, Label } from "../components";

import { useState } from "react";

const MailingList = () => {
  const [email, setEmail] = useState<string>("");
  const [label, setLabel] = useState<string>("Notify me");
  const [icon, setIcon] = useState<any>(ArrowRight);

  const defaultMessage = "Sign up to get notified about future opportunities.";
  const [message, setMessage] = useState<string>(defaultMessage);

  const isValid = (t: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(t).toLowerCase());
  };

  const handleSubmit = async () => {
    if (!isValid(email)) return;
    let payload = new FormData();
    payload.append("emailAddress", email);

    await fetch(
      "https://docs.google.com/forms/u/2/d/e/1FAIpQLSdJB-0wBDX1CMNtVT01vZyVIZfgfAOCcIq_5KfEkaToii57NQ/formResponse",
      {
        body: payload,
        method: "POST",
        mode: "no-cors",
      }
    );

    setEmail("");
    setLabel("Submitted!");
    setIcon(Check);
  };

  return (
    <>
      <div>
        <Label>{message}</Label>
      </div>
      <div className="d-flex mt-2">
        <Input
          placeholder="you@email.com"
          type="email"
          value={email}
          onChange={(e: any) => {
            const t = e.target.value;
            if (isValid(t)) setMessage(defaultMessage);
            else setMessage("Please enter a valid email address.");
            setEmail(t);
          }}
          className="mr-3"
        />
        <Button
          label={label}
          rightIcon={icon}
          other={{
            onClick: () => {
              handleSubmit();
            },
          }}
        />
      </div>
    </>
  );
};

export default MailingList;
