import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const getToken = () => {};

const checkToken = () => {};

export const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div>
      {isLogged ? (
        <div>Logged In</div>
      ) : (
        <div>
          <div style={{ width: "100%", height: "100%" }}>
            <Form
              style={{ margin: "2%" }}
              onSubmit={(e) => {
                e.preventDefault();
                console.log(username, password);
              }}
            >
              <Form.Group>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group style={{ marginTop: "1%" }}>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Button style={{ marginTop: "1%" }} type="submit">
                Log In
              </Button>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};
