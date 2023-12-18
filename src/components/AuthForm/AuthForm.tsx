import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  useForm,
  Controller,
  SubmitHandler,
  useFormState,
} from "react-hook-form";
import { nameRules, emailRules, passwordRules } from "./validation";

interface IForm {
  name: string;
  email: string;
  password: string;
}

const AuthForm = () => {
  const { handleSubmit, control } = useForm<IForm>({
    mode: "onBlur",
  });
  const { errors } = useFormState({
    control,
  });

  const onSubmitHandler: SubmitHandler<IForm> = () => alert("Sent");

  return (
    <div className="authform">
      <Typography variant="h4" gutterBottom>
        Get Started Now
      </Typography>
      <form className="authform__form" onSubmit={handleSubmit(onSubmitHandler)}>
        <Controller
          control={control}
          name="name"
          rules={nameRules}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <TextField
              id="name"
              label="Name"
              margin="normal"
              variant="outlined"
              fullWidth={true}
              size="small"
              onChange={(e) => onChange(e)}
              onBlur={() => onBlur()}
              value={value}
              color="success"
              error={!!errors.name?.message}
              helperText={errors.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          rules={emailRules}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <TextField
              id="email"
              type="email"
              label="Email"
              margin="normal"
              variant="outlined"
              fullWidth={true}
              size="small"
              onChange={(e) => onChange(e)}
              onBlur={() => onBlur()}
              value={value}
              color="success"
              error={!!errors.email?.message}
              helperText={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={passwordRules}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <TextField
              id="password"
              type="password"
              label="Password"
              margin="normal"
              variant="outlined"
              fullWidth={true}
              size="small"
              onChange={(e) => onChange(e)}
              onBlur={() => onBlur()}
              value={value}
              color="success"
              error={!!errors.password?.message}
              helperText={errors.password?.message}
            />
          )}
        />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            required
            label="I agree to the terms & policy"
          />
        </FormGroup>
        <button type="submit" className="authform__button">
          Signup
        </button>
      </form>
    </div>
  );
};

//I agree to the terms & policy

export default AuthForm;
