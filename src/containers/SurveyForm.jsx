import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import React, { useState } from "react";
import { CardMedia } from "@mui/material";
import SingleInput from "../components/SingleInput";
import MultipleInput from "../components/MultipleInput";
import RadioInput from "../components/RadioInput";
import styled from "@emotion/styled";
import { useMutation } from "react-query";
import useAxios from "../hooks/useAxios";
import { useSetRecoilState } from "recoil";
import { withAlert } from "../recoil/snackbar";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { format } from "date-fns";
import { DatePicker, TimePicker } from "antd";

const Textarea = styled(TextareaAutosize)(
  () => `
    width: 100%;
    border-radius: 0.5rem ;
    padding: 1rem ;
    font-size: 1rem;
  `
);

const SubmitButton = styled(LoadingButton)(
  () => `
  &:hover {
    background-color: #ff8800;
  }
  `
);

const SurveyForm = () => {
  const api = useAxios();
  const openAlert = useSetRecoilState(withAlert);
  const [data, setData] = useState({
    birthday: null,
    birthtime: null,
    name: "",
    born_state: "",
    born_city: "",
    living_state: "",
    living_city: "",
    marital_status: "",
    days_of_birth: "",
    contact_phone: "",
    main_reason: "",
    job: "",
  });
  const daysOfBirth = [
    "တနင်္လာ",
    "အင်္ဂါ",
    "ဗုဒ္ဓဟူး",
    "ရာဟု",
    "ကြာသပတေး",
    "သောကြာ",
    "စနေ",
    "တနင်္ဂနွေ",
  ];
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
          birthday: null,
          birthtime: "",
          name: "",
          born_state: "",
          born_city: "",
          living_state: "",
          living_city: "",
          marital_status: "",
          days_of_birth: "",
          contact_phone: "",
          main_reason: "",
          job: "",
        });
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.birthday) {
      openAlert({
        status: 401,
        detail: "ကျေးဇူးပြု၍သင်၏မွေးနေ့ကိုဖြည့်သွင်းပါ။",
      });
      return;
    } else if (!data.birthtime) {
      openAlert({
        status: 401,
        detail: "ကျေးဇူးပြု၍သင်၏မွေးချိန်ကိုဖြည့်သွင်းပါ။",
      });
      return;
    }

    mutate();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ position: "relative", color: "#fff", pt: "10rem", pb: "5rem" }}
    >
      <CardMedia
        component="img"
        src="/images/background.png"
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          zIndex: -10,
        }}
        alt="background"
      />
      <Box
        sx={{
          bgcolor: "primary.main",
          p: { md: "3rem", xs: "2rem" },
          borderRadius: "15px",
          fontWeight: "fontWeightBold",
          mx: "auto",
          width: { xs: "90%", md: "50%" },
        }}
      >
        <Box
          component="img"
          src="/images/logo.png"
          sx={{
            display: "block",
            mx: "auto",
            mt: "-10rem",
          }}
        />

        <Typography
          sx={{
            fontWeight: "bold",
            color: "secondary.main",
            textAlign: "center",
            mt: "2rem",
          }}
        >
          (မင်္ဂလာပါ၊ Bubble Body Wash ရဲ့ နှစ်သစ်မှာ
          ကားအသစ်ကြီးနဲ့လန်းနိုင်ဖို့ Bubble နဲ့အတူကံစမ်းစို့အစီအစဥ်ရဲ့
          ကားဆုကြီးကို ပိုင်ဆိုင်ဖို့ အခုပဲ ပါဝင်ကံစမ်းလိုက်ရအောင်!)
        </Typography>

        <Box sx={{ mt: "2rem" }}>
          <Typography
            id="demo-radio-buttons-group-label"
            sx={{ color: "primary.light", fontWeight: "bold", mb: "0.5rem" }}
          >
            မွေးနေ့
            <span style={{ color: "red" }}> *</span>
          </Typography>
          <DatePicker
            format="MM/DD/YYYY"
            style={{
              bgcolor: "#fff",
              borderRadius: "0.5rem",
              mt: "1rem",
              width: "100%",
            }}
            onChange={(date, dateString) =>
              setData({
                ...data,
                birthday: dateString,
              })
            }
            placeholder=""
            size="large"
          />
        </Box>

        <Box sx={{ mt: { md: "2rem", xs: "1rem" } }}>
          <Typography
            sx={{ color: "primary.light", fontWeight: "bold", mb: "1rem" }}
          >
            မွေးချိန်
            <span style={{ color: "red" }}> *</span>
          </Typography>
          <TimePicker
            format="hh:mm:a"
            style={{
              bgcolor: "#fff",
              borderRadius: "0.5rem",
              width: "100%",
            }}
            onChange={(time) =>
              setData({
                ...data,
                birthtime: format(new Date(time), "HH:mm"),
              })
            }
            size="large"
            placeholder=""
          />
        </Box>
        <SingleInput
          label="အမည်"
          name="name"
          data={data.name}
          handleOnChange={handleOnChange}
        />
        <MultipleInput
          label="မွေးရပ်"
          name1="born_state"
          name2="born_city"
          data={data}
          handleOnChange={handleOnChange}
        />
        <SingleInput
          label="အလုပ်အကိုင်"
          name="job"
          data={data.job}
          placeholder="အလုပ်အကိုင် အမျိုးအစား"
          handleOnChange={handleOnChange}
        />
        <MultipleInput
          label="နေရပ်လိပ်စာ"
          data={data}
          name1="living_state"
          name2="living_city"
          handleOnChange={handleOnChange}
        />

        <RadioInput
          data={data}
          setData={setData}
          label="ချစ်သူ ရှိ/မရှိ"
          name="marital_status"
          rLabel1="ရှိ"
          rLabel2="မရှိ"
          handleOnChange={handleOnChange}
        />

        <Box sx={{ mt: { md: "2rem", xs: "1rem" } }}>
          <Typography
            sx={{ color: "primary.light", fontWeight: "bold", mb: "1rem" }}
          >
            နေ့နံ
            <span style={{ color: "red" }}> *</span>
          </Typography>

          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ mt: "-0.5rem", bgcolor: "transparent", fontWeight: "bold" }}
            >
              နေ့နံရွေးချယ်ပါ
            </InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data.days_of_birth}
              name="days_of_birth"
              size="small"
              sx={{ bgcolor: "#fff", borderRadius: "0.5rem", mt: "rem" }}
              onChange={handleOnChange}
            >
              {daysOfBirth.map((days, index) => (
                <MenuItem key={index} value={days}>
                  {days}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ mt: { md: "2rem", xs: "1rem" } }}>
          <Typography
            sx={{ color: "primary.light", fontWeight: "bold", mb: "1rem" }}
          >
            အဓိကသိချင်သောအကြောင်းအရာ
            <span style={{ color: "red" }}> *</span>
          </Typography>
        </Box>
        <Textarea
          required
          aria-label="about textarea"
          placeholder="အဓိကသိချင်သောအကြောင်းအရာ"
          minRows={10}
          name="main_reason"
          value={data.main_reason}
          onChange={handleOnChange}
        />
        <SingleInput
          label="ဆက်သွယ်ရမည့်ဖုန်းနံပါတ်"
          name="contact_phone"
          data={data.contact_phone}
          placeholder="09xxxxxxxxxxx"
          handleOnChange={handleOnChange}
        />
        <SubmitButton
          loading={isLoading}
          type="submit"
          className="submit-btn"
          sx={{
            bgcolor: "secondary.main",
            mt: "2rem",
            mx: "auto",
            display: "block",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          အတည်ပြုမည်
        </SubmitButton>
      </Box>
    </Box>
  );
};

export default SurveyForm;
