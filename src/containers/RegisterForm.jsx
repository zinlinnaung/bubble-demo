import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import React, { useState } from "react";
import SingleInput from "../components/SingleInput";
import MultipleInput from "../components/MultipleInput";
import styled from "@emotion/styled";
import { useMutation } from "react-query";
import useAxios from "../hooks/useAxios";
import { useSetRecoilState } from "recoil";
import { withAlert } from "../recoil/snackbar";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import NrcInput from "../components/NrcInput";
import { useNavigate } from "react-router-dom";
const SubmitButton = styled(LoadingButton)(
  () => `
  &:hover {
    background-color: #2A8346;
  }
  `
);
const DialogButton = styled(LoadingButton)(
  () => `
  &:hover {
    background-color:red,
    ;
  }
  `
);

const RegisterForm = () => {
  const nav = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    nav("/code");
  };

  const api = useAxios();
  const openAlert = useSetRecoilState(withAlert);
  const [data, setData] = useState({
    name: "",
    contact_phone: "",
    nrc_state_number: "",
    nrc_city: "",
    nrc_type: "",
    living_state: "",
    living_city: "",
    nrc_number: "",
    file: "",
  });
  const MySwal = withReactContent(Swal);

  const handleOnChange = (e) => {
    setData({ ...data, [e.target?.name]: e.target.value });
  };

  const { mutate, isLoading } = useMutation(
    () => {
      return api.post("/api/customer", data, {
        validateStatus: function (status) {
          return status <= 500;
        },
      });
    },
    {
      onSuccess: (res) => {
        if (res.status === 200) {
          MySwal.fire({
            title: <strong>ကျေးဇူးတင်ပါတယ်</strong>,
            html: <i>သင့်ဖောင်ကို အောင်မြင်စွာ ဖြည့်သွင်းပြီးပါပြီ။</i>,
            icon: "success",
          });
        } else {
          MySwal.fire({
            title: <strong>တောင်းပန်ပါတယ်။</strong>,
            html: <i>သင်၏ဖောင် တင်သွင်းမှု မအောင်မြင်ပါ။</i>,
            icon: "error",
          });
        }

        setData({
          name: "",
          living_state: "",
          living_city: "",
          nrc_number: "",
        });
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.name) {
      openAlert({
        status: 401,
        detail: "ကျေးဇူးပြု၍ သင်၏အမည်ကို ဖြည့်သွင်းပါ",
      });
      return;
    } else if (!data.contact_phone) {
      openAlert({
        status: 401,
        detail: "ကျေးဇူးပြု၍ သင်၏ဖုန်းနံပါတ်ကို ဖြည့်သွင်းပါ",
      });
      return;
    }

    mutate();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        position: "relative",
        color: "#fff",
        bgcolor: "#84DD63",
      }}
    >
      <Box
        sx={{
          bgcolor: "primary.main",
          fontWeight: "fontWeightBold",
          mx: "auto",
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Box>
          <Box
            component="img"
            src="/images/poster.png"
            sx={{
              display: "block",
              mx: "auto",
              width: {
                md: "700px",
                xs: "100%",
              },
            }}
          />
          <Box
            component="img"
            src="/images/logo.png"
            sx={{
              display: "block",
              mx: "auto",
              mt: {
                md: "-4.5rem",
                xs: "-3.5rem",
              },
              width: {
                md: "150px",
              },
            }}
          />
        </Box>
        <Box sx={{ padding: "1rem" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "secondary.primary",
              mt: "1rem",
            }}
          >
            (မင်္ဂလာပါ၊ Bubble Body Wash ရဲ့ နှစ်သစ်မှာ
            ကားအသစ်ကြီးနဲ့လန်းနိုင်ဖို့ Bubble နဲ့အတူကံစမ်းစို့အစီအစဥ်ရဲ့
            ကားဆုကြီးကို ပိုင်ဆိုင်ဖို့ အခုပဲ ပါဝင်ကံစမ်းလိုက်ရအောင်!)
          </Typography>
          {/* <TextField label="Name" /> */}
          <SingleInput
            label="အမည် (မှတ်ပုံတင် ကိုင်ဆောင်ထားသော နာမည် )"
            name="name"
            data={data.name}
            handleOnChange={handleOnChange}
          />
          <SingleInput
            label="ဖုန်းနံပါတ်"
            name="contact_phone"
            data={data.contact_phone}
            placeholder="09 နှင့်စသောဖုန်းနံပါတ်"
            handleOnChange={handleOnChange}
          />
          <Box sx={{ color: "#FF0000CC", mt: "1rem" }}>
            *ဖုန်းနံပါတ်တစ်လုံးကို တစ်ကြိမ်သာ ကံစမ်းခွင့် ပြုပါသည်။ *
          </Box>
          <NrcInput
            label=""
            name1="nrc_state_number"
            name2="nrc_city"
            data={data}
            handleOnChange={handleOnChange}
          />
          <MultipleInput
            label=""
            name1="living_state"
            name2="living_city"
            data={data}
            handleOnChange={handleOnChange}
          />
          <Box>
            <TextField
              type="file"
              variant="outlined"
              fullWidth
              size="small"
              label="ပုံတင်ရန်"
              sx={{ mt: "2rem" }}
              name="file"
              InputLabelProps={{
                style: {
                  color: "white",
                },
              }}
              // value={data.file ? data.file.name : "No file chosen"}
              value={data.file}
              onChange={handleOnChange}
              focused
            />
            <SubmitButton
              onClick={handleClickOpen}
              fullWidth
              className="submit-btn"
              sx={{
                bgcolor: "secondary.main",
                mt: "2rem",
                mx: "auto",
                py: "1rem",
                display: "block",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Submit
            </SubmitButton>
          </Box>
        </Box>

        {/* Terms and conditions dialog box. */}
        <Dialog
          fullWidth
          open={open}
          aria-labelledby="customized-dialog-title"
          aria-describedby="customized-dialog-description"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              justifyItems: "center",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src="/images/ring.png"
              sx={{
                display: "block",
                width: "130px",
                m: "-3rem 0 0 -0.5rem",
              }}
            />
            <Box
              component="img"
              src="/images/Multiply.png"
              sx={{
                display: "block",
                width: "3rem",
                height: "3rem",
                m: "0.5rem 0.5rem 0 0",
                cursor: "pointer",
              }}
              onClick={handleClose}
            />
          </Box>
          <DialogTitle
            id="customized-dialog-title"
            sx={{ fontWeight: "bold", m: "auto" }}
          >
            {"စည်းကမ်းချက်များ"}
          </DialogTitle>
          <DialogContent>
            <Box
              sx={{
                width: "100%",
                bgcolor: "background.paper",
              }}
            >
              <List>
                <ListItem sx={{ padding: "10px 0" }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: "0.8rem" }}>
                    &#x2022; ဘူးပေါ်ကနာမည်နှင့် ဖောင်မှာဖြည့်ထားသော
                    နာမည်တူညီရမည်။
                  </Typography>
                </ListItem>
                <ListItem sx={{ padding: "10px 0" }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: "0.8rem" }}>
                    &#x2022; ဖေ့ဘွတ်အကောင့်တစ်ခုကိုတစ်ကြိမ်သာ ကံစမ်းခွင့်ရှိသည်။
                  </Typography>
                </ListItem>
                <ListItem sx={{ padding: "10px 0" }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: "0.8rem" }}>
                    &#x2022; ပါဝင်ကံစမ်းမည့်ဘူးပုံသည်လည်းတစ်ပုံကို တစ်ကြိမ်သာ
                    ကံစမ်းခွင့်ရှိသည်။
                  </Typography>
                </ListItem>
                <ListItem sx={{ padding: "10px 0" }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: "0.8rem" }}>
                    &#x2022; ပုံပေါ် ရှိအချက်အလက်များတို့သည်လည်း
                    ကြည်လင်ပြတ်သားရမည်။
                  </Typography>
                </ListItem>
                <ListItem sx={{ padding: "10px 0" }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: "0.8rem" }}>
                    &#x2022; ကံထူးရှင်သည်မိမိကံစမ်းထားသည့်ဘူးနှင့်
                    ကံစမ်းမဲကုတ်ဒ်ကို ပြသနိုင်ရမည်။
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </DialogContent>
          <DialogActions>
            <DialogButton
              loading={isLoading}
              onClick={handleClose}
              type="submit"
              sx={{
                color: "#fff",
                bgcolor: "secondary.main",
                ":hover": {
                  bgcolor: "primary.main",
                },
                borderRadius: "8px",
                mx: "auto",
                width: "450px",
                py: "1rem",
              }}
            >
              စည်းကမ်းချက်များအား နားလည်ပါသည်။
            </DialogButton>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default RegisterForm;
