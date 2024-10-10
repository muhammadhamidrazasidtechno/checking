import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Avatar, Box, Stack, Typography, Input } from "@mui/material";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import { useAdmin } from "../../api/hooks/useAdmin";

import { Logo } from "../../components/logo";

const TOP_NAV_HEIGHT = 64;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const TopNav = () => {
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isProfileUpdateOpen, setIsProfileUpdateOpen] = useState(false);
  const { isAuthenticated, user, authentication, handleUserLogOut } =
    useAdmin();
  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
  });

  const handleAdminLogIn = (event) => {
    event.preventDefault();
    authentication(logInData);
    setIsAdminModalOpen(false);
  };

  const handleInputChange = (event) => {
    setLogInData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Box
      component="header"
      sx={{
        backgroundColor: "neutral.900",
        color: "common.white",
        position: "fixed",
        width: "100%",
        zIndex: (theme) => theme.zIndex.appBar,
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          minHeight: TOP_NAV_HEIGHT,
          px: 3,
        }}
      >
        <Stack alignItems="center" direction="row" spacing={3}>
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "inline-flex",
              height: 24,
              width: 24,
            }}
          >
            <Logo />
          </Box>
        </Stack>
        <Stack alignItems="center" direction="row" spacing={2}>
          {isAuthenticated ? (
            <>
              <Avatar
                src="/assets/avatars/avatar-chen-simmons.jpg"
                onClick={() => setIsProfileUpdateOpen(true)}
                variant="rounded"
                sx={{
                  cursor: "pointer",
                }}
              />
              <Button color="error" onClick={handleUserLogOut}>
                Log Out
              </Button>

              <Modal
                open={isProfileUpdateOpen}
                onClose={() => setIsProfileUpdateOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <form onSubmit={handleAdminLogIn}>
                    <Typography
                      variant="h2"
                      color="primary"
                      sx={{
                        textAlign: "center",
                        fontSize: "1.5em",
                      }}
                    >
                      Profile
                    </Typography>
                    <Box
                      sx={{
                        marginTop: "1rem",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Input
                        placeholder="Email"
                        name="email"
                        value={logInData.email}
                        onChange={handleInputChange}
                        sx={{
                          marginBottom: "3rem",
                          textAlign: "center",
                        }}
                      />
                      <Input
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={logInData.password}
                        onChange={handleInputChange}
                        sx={{
                          marginBottom: "1rem",
                          textAlign: "center",
                        }}
                      />
                      <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        sx={{
                          alignSelf: "center",
                          marginTop: "1rem",
                          padding: ".5rem 3rem",
                        }}
                      >
                        Update Profile
                      </Button>
                    </Box>
                  </form>
                </Box>
              </Modal>
            </>
          ) : (
            <Button
              onClick={() => setIsAdminModalOpen(true)}
              color="primary"
              variant="contained"
            >
              Log In
            </Button>
          )}
        </Stack>
      </Stack>
      <Modal
        open={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleAdminLogIn}>
            <Typography
              variant="h2"
              color="primary"
              sx={{
                textAlign: "center",
                fontSize: "1.5em",
              }}
            >
              Log In
            </Typography>
            <Box
              sx={{
                marginTop: "1rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Input
                placeholder="Email"
                name="email"
                value={logInData.email}
                onChange={handleInputChange}
                sx={{
                  marginBottom: "3rem",
                  textAlign: "center",
                }}
              />
              <Input
                placeholder="Password"
                name="password"
                type="password"
                value={logInData.password}
                onChange={handleInputChange}
                sx={{
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              />
              <Button
                color="primary"
                variant="contained"
                type="submit"
                sx={{
                  alignSelf: "center",
                  marginTop: "1rem",
                  padding: ".5rem 3rem",
                }}
              >
                Log In
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};
