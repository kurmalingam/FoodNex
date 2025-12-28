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
    transition: theme.transitions.smooth,
  },
  avatar: {
    margin: `0 auto ${theme.spacing.lg}`,
    background: `linear-gradient(135deg, ${theme.colors.primary.main} 0%, ${theme.colors.primary.dark} 100%)`,
    fontSize: "3rem",
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
    fontSize: theme.typography.size['2xl'],
  },

  showPasswordButton: {
    color: theme.colors.neutral.gray,
    "&:hover": {
      color: theme.colors.primary.main,
      background: "none",
    },
  },
  rememberMeContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: theme.typography.size.sm,
    marginTop: theme.spacing.lg,
    "& .MuiIconButton-label": {
      color: theme.colors.neutral.charcoal,
    },
    "& .MuiIconButton-root": {
      transform: "scale(5)",
      "&:hover": {
        backgroundColor: "transparent",
        border: "none",
      },
    },
  },
  forgotPasswordLink: {
    color: theme.colors.neutral.charcoal,
    textDecoration: "none",
    fontFamily: theme.typography.fontFamily.secondary,
    "&:hover": {
      textDecoration: "underline",
      color: theme.colors.primary.main,
    },
  },
  termsAndConditionsText: {
    fontFamily: theme.typography.fontFamily.secondary,
    color: theme.colors.neutral.gray,
    textAlign: "center",
    lineHeight: theme.typography.lineHeight.normal,
    paddingLeft: theme.spacing.sm,
    paddingRight: theme.spacing.sm,
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    fontSize: theme.typography.size.xs,
  },
  loginButton: {
    color: theme.colors.neutral.white,
    backgroundColor: theme.colors.primary.main,
    border: `2px solid ${theme.colors.primary.main}`,
    margin: `${theme.spacing.lg} 0`,
    fontFamily: theme.typography.fontFamily.primary,
    fontWeight: theme.typography.weight.medium,
    "&:disabled": {
      backgroundColor: theme.colors.neutral.gray,
      color: theme.colors.neutral.white,
      borderColor: theme.colors.neutral.gray,
    },
    "&:hover": {
      backgroundColor: theme.colors.primary.dark,
      borderColor: theme.colors.primary.dark,
      boxShadow: theme.shadows.md,
    },
  },
  privacyText: {
    marginLeft: "4px",
    textDecoration: "underline",
    color: theme.colors.neutral.charcoal,
    fontSize: theme.typography.size.sm,
    "&:hover": {
      color: theme.colors.primary.main,
    },
  },
  createAccount: {
    fontSize: theme.typography.size.base,
    fontWeight: theme.typography.weight.medium,
    color: theme.colors.neutral.charcoal,
    paddingLeft: theme.spacing.sm,
    "&:hover": {
      color: theme.colors.primary.main,
      textDecoration: "underline",
    },
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: theme.borderRadius.base,
      "&:hover fieldset": {
        borderColor: theme.colors.primary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.colors.primary.main,
        borderWidth: "2px",
      },
      "& .MuiOutlinedInput-input": {
        padding: "16px 14px",
        fontSize: theme.typography.size.base,
        fontFamily: theme.typography.fontFamily.secondary,
      },
    },
    "& .MuiInputLabel-root": {
      color: theme.colors.neutral.gray,
      fontSize: theme.typography.size.base,
      fontFamily: theme.typography.fontFamily.secondary,
      "&.Mui-focused": {
        color: theme.colors.primary.main,
      },
    },
  },
  inputField: {
    marginBottom: theme.spacing.lg,
    width: "100%",
  },
}));

export default useStyles;

