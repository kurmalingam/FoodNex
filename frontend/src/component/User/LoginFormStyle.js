import { makeStyles } from "@mui/styles";
import theme from "../theme";

const useStyles = makeStyles(() => ({
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "7rem",
    paddingBottom: "3rem",
    minHeight: "100vh",
    background: theme.colors.gradients.hero,
  },

  form: {
    width: "450px",
    margin: "auto",
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.xl,
    boxShadow: theme.shadows.card,
    backgroundColor: theme.colors.neutral.white,
  },

  avatar: {
    margin: `0 auto ${theme.spacing.lg}`,
    background: `linear-gradient(135deg, ${theme.colors.primary.main} 0%, ${theme.colors.primary.dark} 100%)`,
    width: "70px",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: theme.shadows.md,
  },

  heading: {
    textAlign: "center",
    marginBottom: theme.spacing.xl,
    color: theme.colors.neutral.charcoal,
    fontFamily: theme.typography.fontFamily.primary,
    fontWeight: theme.typography.weight.bold,
    fontSize: theme.typography.size["2xl"],
  },

  /* ✅ INPUT SPACING FIX */
  textField: {
    marginBottom: theme.spacing.lg,

    "& .MuiOutlinedInput-root": {
      borderRadius: theme.borderRadius.base,
      "&:hover fieldset": {
        borderColor: theme.colors.primary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.colors.primary.main,
        borderWidth: "2px",
      },
    },

    "& .MuiInputLabel-root": {
      fontFamily: theme.typography.fontFamily.secondary,
      "&.Mui-focused": {
        color: theme.colors.primary.main,
      },
    },
  },

  showPasswordButton: {
    color: theme.colors.neutral.gray,
    "&:hover": {
      color: theme.colors.primary.main,
      background: "none",
    },
  },

  /* ✅ CHECKBOX SECTION FIX */
  gridcheckbox: {
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.sm,
  },

  checkbox: {
    "& .MuiCheckbox-root": {
      padding: theme.spacing.sm,
    },
    "& .MuiFormControlLabel-label": {
      fontSize: theme.typography.size.sm,
    },
  },

  termsAndConditionsText: {
    textAlign: "center",
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    fontSize: theme.typography.size.xs,
    color: theme.colors.neutral.gray,
  },

  loginButton: {
    marginTop: theme.spacing.lg,
    backgroundColor: theme.colors.primary.main,
    color: theme.colors.neutral.white,
    "&:hover": {
      backgroundColor: theme.colors.primary.dark,
    },
  },

  createAccount: {
    paddingLeft: theme.spacing.sm,
    fontWeight: theme.typography.weight.medium,
    color: theme.colors.neutral.charcoal,
    "&:hover": {
      color: theme.colors.primary.main,
      textDecoration: "underline",
    },
  },

  /* ✅ AVATAR UPLOAD */
  root: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing.md,
  },

  avatar2: {
    width: "60px",
    height: "60px",
    marginRight: theme.spacing.md,
    borderRadius: "50%",
    border: `2px solid ${theme.colors.primary.main}`,
  },

  input: {
    display: "none",
  },

  privacyText :{
  marginLeft: theme.spacing.xs,     
  },


  uploadAvatarButton: {
    backgroundColor: theme.colors.primary.main,
    color: theme.colors.neutral.white,
    "&:hover": {
      backgroundColor: theme.colors.primary.dark,
    },
  },
  rememberMeContainer: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: theme.spacing.lg,
  marginBottom: theme.spacing.lg,
},

forgotPasswordLink: {
  fontSize: theme.typography.size.sm,
  color: theme.colors.primary.main,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
},

}));

export default useStyles;
