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

  uploadAvatarText: {
    fontSize: theme.typography.size.sm,
    fontWeight: theme.typography.weight.medium,
  },

  /* Admin Layout Styles */
  updateProduct: {
    display: "flex",
    height: "100vh",
  },

  firstBox1: {
    width: "20%",
    backgroundColor: theme.colors.neutral.white,
    boxShadow: theme.shadows.md,
  },

  toggleBox1: {
    width: "5%",
    backgroundColor: theme.colors.neutral.white,
    boxShadow: theme.shadows.md,
  },

  secondBox1: {
    width: "80%",
    backgroundColor: theme.colors.neutral.offWhite,
    overflowY: "auto",
  },

  navBar1: {
    height: "70px",
    backgroundColor: theme.colors.neutral.white,
    boxShadow: theme.shadows.sm,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `0 ${theme.spacing.lg}`,
  },

  formContainer2: {
    padding: theme.spacing.xl,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    minHeight: "calc(100vh - 70px)",
  },

  form2: {
    width: "600px",
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.xl,
    boxShadow: theme.shadows.card,
    backgroundColor: theme.colors.neutral.white,
  },

  nameInput: {
    marginBottom: theme.spacing.lg,
  },

  passwordInput: {
    marginBottom: theme.spacing.lg,
  },

  selectOption: {
    marginBottom: theme.spacing.lg,
  },

  formControl: {
    width: "100%",
  },

  select: {
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
  },

  menu: {
    "& .MuiPaper-root": {
      borderRadius: theme.borderRadius.base,
      boxShadow: theme.shadows.md,
    },
  },

  labelText: {
    fontSize: theme.typography.size.sm,
    color: theme.colors.neutral.gray,
    marginBottom: theme.spacing.sm,
  },

  descriptionInput: {
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
  },

  descriptionIcon: {
    color: theme.colors.neutral.gray,
  },

  imgIcon: {
    marginRight: theme.spacing.md,
    color: theme.colors.primary.main,
  },

  imageArea: {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing.md,
    marginTop: theme.spacing.lg,
  },

  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: theme.borderRadius.base,
    border: `1px solid ${theme.colors.neutral.lightGray}`,
  },

}));

export default useStyles;
