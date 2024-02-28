import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";

const CodePage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        // bgcolor: "white",
        // height: "100vh",
      }}
    >
      <Box
        sx={{
          // bgcolor: "primary.main",
          fontWeight: "fontWeightBold",
          pb: "2rem",
          mx: "auto",
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Box>
          <Box
            component="img"
            src="/images/code-poster.png"
            sx={{
              display: "block",
              mx: "auto",
              width: {
                md: "700px",
                xs: "100%",
              },
            }}
          />
          <Paper
            sx={{
              bgcolor: "primary.light",
              p: "2rem",
              width: {
                md: "600px",
                xs: "350px",
              },
              mx: "auto",
              borderRadius: "1.2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              mt: {
                md: "-4rem",
                xs: "-2rem",
              },
            }}
            elevation={3}
          >
            <Box
              component="img"
              src="/images/logo.png"
              sx={{
                display: "block",
                mx: "auto",
                mt: {
                  md: "-6.5rem",
                  xs: "-5rem",
                },

                width: {
                  md: "150px",
                },
              }}
            />
            <Typography sx={{ fontWeight: "bold", mt: "1.5rem" }}>
              သင်၏ကံစမ်းမဲကုဒ်နံပါတ်
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", mt: "1.1rem", fontSize: "2rem" }}
            >
              000001
            </Typography>
            <Typography
              sx={{ fontSize: "1.1rem", fontWeight: "bold", mt: "1.1rem" }}
            >
              ပါဝင်ကံစမ်းမှုအတွက် ကျေးဇူးတင်ပါသည်။
            </Typography>
            <Typography
              sx={{
                fontSize: "1.1rem",
                fontWeight: "bold",
                textAlign: "center",
                m: "1rem 0 2rem 0",
              }}
            >
              နှစ်သစ်မှာ <br />
              ကားဆုကြီးကို ဆွတ်ခူးပိုင်ဆိုင်နိုင်ပါစေ။
            </Typography>
            <Button
              sx={{
                color: "white",
                bgcolor: "secondary.main",
                ":hover": {
                  bgcolor: "primary.main",
                },
                borderRadius: "0.5rem",
                textTransform: "capitalize",
                width: "150px",
                py: "0.6rem",
                display: "flex",
                gap: "1.2rem",
                alignItems: "center",
                mb: "3rem",
              }}
            >
              Save
              <img src="/images/save-btn.png" alt="save-btn" />
            </Button>
            <Box>
              <Box
                component="img"
                src="/images/car.png"
                sx={{
                  display: "block",
                  width: {
                    md: "200px",
                    xs: "150px",
                  },
                  position: "absolute",
                  right: "-0.6rem",
                  bottom: "-1rem",
                }}
              />
            </Box>
          </Paper>
          <Typography
            sx={{
              color: "red",
              fontWeight: "bold",
              fontSize: "1.3rem",
              textAlign: "center",
              mt: "2rem",
            }}
          >
            <span style={{ fontWeight: "normal" }}> *</span>
            code နံပါတ်ကို သိမ်းထားဖို့လိုအပ်ပါတယ်
            <span style={{ fontWeight: "normal" }}> *</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CodePage;
