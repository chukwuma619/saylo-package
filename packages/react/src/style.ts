import { createUseStyles } from "react-jss";

export const useStyles: ReturnType<typeof createUseStyles> = createUseStyles({
    "@font-face": [
      {
        fontFamily: "Inter",
        src: "url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap')",
      },
    ],
    base: {
      color: "#111827",
      boxSizing: "border-box",
      "&  *, & ::before, & ::after": {
        boxSizing: "border-box",
        border: "0 solid #e5e7eb",
        margin: 0,
      },
  
      "& *": {
        fontFamily:
          'Inter, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
  
      "& button, & input:where([type='button']), & input:where([type='reset']), & input:where([type='submit'])":
        {
          "-webkit-appearance": "button",
          backgroundColor: "transparent",
          backgroundImage: "none",
        },
      "& button, & [role='button']": {
        cursor: "pointer",
      },
      "&[data-mode='dark'] $actionButtonSvg": {
        color: "white",
      },
  
      "&[data-mode='dark'] $container": {
        backgroundColor: " #1f2937",
      },
  
      "&[data-mode='dark'] $closeIconPath": {
        color: "white",
      },
  
      "&[data-mode='dark'] $backButton:hover": {
        color: "#d1d5db",
      },
  
      "&[data-mode='dark'] $backButton:hover path": {
        fill: "#d1d5db",
      },
  
      "&[data-mode='dark'] $headerTitle": {
        color: "#f3f4f6",
      },
  
      "&[data-mode='dark'] $headerDescription": {
        color: "#9ca3af",
      },
  
      "&[data-mode='dark'] $form> div> div > label, &[data-mode='dark'] $form>div> div > div, &[data-mode='dark'] $form>  div> div > div > button, &[data-mode='dark'] $error > p, &[data-mode='dark'] $thanks > p":
        {
          color: "#f3f4f6",
        },
  
      "&[data-mode='dark'] $form>  div> div > div > button:hover": {
        color: "#9ca3af",
        backgroundColor: "initial",
      },
  
      "&[data-mode='dark'] $poweredByContainer>span": {
        color: "#d1d5db",
      },
  
      "&[data-mode='dark'] $sayloText": {
        fill: "#ffffff",
      },
  
      "&[data-mode='dark'] $button": {
        backgroundColor: "#374151 !important",
        color: "#f3f4f6",
      },
  
      "&[data-mode='dark'] $button:hover": {
        backgroundColor: "#4b5563 !important",
      },
  
      "&[data-mode='dark'] $form> input[type='email'], &[data-mode='dark'] $form>textarea":
        {
          backgroundColor: "rgb(55, 65, 81)",
          color: "rgb(243, 244, 246)",
          borderColor: "rgb(75, 85, 99)",
        },
  
      "&[data-mode='dark'] $form> div > div > label > svg": {
        //  Dark mode here
      },
    },
    actionButton: {
      position: "fixed",
      alignItems: "center",
      bottom: "2rem",
      display: "flex",
      height: "3.5rem",
      justifyContent: "center",
      marginTop: "0px",
      padding: "0.5rem 1rem",
      width: "3.5rem",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      fontWeight: "500",
      textAlign: "center",
      color: "#ffffff",
      borderRadius: "9999px",
      cursor: "pointer",
      boxShadow:
        "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
      transitionDuration: "0.15s",
      transitionProperty:
        "color, background-color, border-color, text-decoration-color, fill, stroke",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    positionLeft: {
      left: "1.25rem",
    },
  
    positionRight: {
      right: "1.25rem",
    },
  
    shapeRounded: {
      borderRadius: "0.75rem",
    },
  
    shapeSquare: {
      borderRadius: "0",
    },
  
    showFlex: {
      display: "flex",
    },
  
    hide: {
      display: "none",
    },
  
    actionButtonSvg: {
      width: "1.5rem",
      height: "1.5rem",
    },
    actionCustomImage: {
      width: "2rem",
      height: "2rem",
      objectFit: "contain",
    },
    srOnly: {
      position: "absolute",
      width: "1px",
      height: "1px",
      padding: 0,
      margin: "-1px",
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      borderWidth: 0,
    },
    container: {
      position: "fixed",
      bottom: "4rem",
      zIndex: "999",
      height: "25rem",
      width: "20rem",
      transform: "matrix(1, 0, 0, 1, 0, 0)",
      flexDirection: "column",
      backgroundColor: "#ffffff",
      padding: "1rem",
      boxShadow:
        "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px",
      transitionDuration: "0.3s",
      transitionProperty: "all",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    navigation: {
      alignItems: "center",
      flexGrow: 0,
      width: "100%",
      display: "flex",
      marginBottom: "0.5rem",
    },
  
    navEnd: {
      justifyContent: "flex-end",
    },
  
    navBetween: {
      justifyContent: "space-between",
    },
  
    backButton: {
      display: "flex",
      gap: "0.25rem",
      color: "#9ca3af",
      "&:hover": {
        color: "#374151",
      },
      "& path": {
        fill: "#9ca3af",
      },
  
      "& span": {
        fontSize: "0.75rem",
        lineHeight: "1rem",
      },
  
      "&:hover path": {
        fill: "#374151",
      },
    },
  
    closeIconPath: {
      color: "black",
    },
    header: {
      width: "100%",
      flexGrow: 0,
      borderBottomWidth: "1px",
      borderColor: "rgba(3, 7, 18, 0.05)",
      paddingBottom: "1.5rem",
    },
  
    headerTitle: {
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      fontWeight: "600",
      color: "#111827",
    },
  
    headerTitleLeft: {
      textAlign: "left",
    },
  
    headerTitleCenter: {
      textAlign: "center",
      maxWidth: "16rem",
    },
    headerDescription: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      color: "#6b7280",
      textAlign: "left",
    },
  
    content: {
      position: "relative",
      height: "100%",
      flexGrow: "1",
      paddingTop: "1rem",
      paddingBottom: "1rem",
    },
  
    buttonContainer: {
      width: "100%",
      display: "grid",
      height: "100%",
      gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
      gap: "1rem",
    },
  
    "@keyframes spin": {
      from: {
        transform: "rotate(0deg)",
      },
      to: {
        transform: "rotate(360deg)",
      },
    },
  
    button: {
      display: "inline-flex",
      height: "auto",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: "1rem",
      whiteSpace: "nowrap",
      borderRadius: "0.375rem",
      borderWidth: "1px",
      borderColor: "rgb(226, 232, 240)",
      backgroundColor: "rgb(255, 255, 255) !important",
      padding: "0.5rem 1rem",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      fontWeight: "500",
      color: "rgb(17, 24, 39)",
      transitionProperty:
        "color, background-color, border-color, text-decoration-color, fill, stroke",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: "150ms",
      "&:hover": {
        color: "rgb(15, 23, 42)",
        backgroundColor: "rgb(241, 245, 249) !important",
      },
  
      "&:focus-visible": {
        boxShadow:
          "rgb(255, 255, 255) 0px 0px 0px 2px, rgb(148, 163, 184) 0px 0px 0px 4px, rgba(0, 0, 0, 0) 0px 0px 0px 0px",
        outline: "2px solid transparent",
        outlineOffset: "2px",
      },
    },
  
    submitButton: {
      display: "inline-flex",
      height: "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem",
      whiteSpace: "nowrap",
      borderRadius: "0.375rem",
      padding: "0.5rem 1rem",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      fontWeight: "500",
      color: "#ffffff",
      transitionProperty:
        "color, background-color, border-color, text-decoration-color, fill, stroke",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: "150ms",
      "&:disabled": {
        opacity: 0.5,
        cursor: "not-allowed",
      },
  
      "&> svg": {
        animation: "$spin 1s linear infinite",
      },
    },
  
    iconContainer: {
      display: "flex",
      width: "26px",
      height: "26px",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "9999px",
      color: "rgb(255, 255, 255)",
    },
    issueIcon: {
      backgroundColor: "rgb(190, 24, 93)",
      boxShadow:
        "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(190, 24, 93, 0.8) 0px 0px 8px 0px",
    },
  
    ideaIcon: {
      backgroundColor: "rgb(15, 118, 110)",
      boxShadow:
        "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(15, 118, 110, 0.8) 0px 0px 8px 0px",
    },
  
    otherIcon: {
      backgroundColor: "rgb(14, 116, 144)",
      boxShadow:
        "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(14, 116, 144, 0.8) 0px 0px 8px 0px",
    },
  
    feedbackIcon: {
      pointerEvents: "none",
      width: "1rem",
      height: "1rem",
      flexShrink: "0",
    },
  
    feedbackTitle: {
      fontWeight: "600",
    },
    footerContainer: {
      display: "flex",
      width: "100%",
      flexGrow: "0",
      alignItems: "center",
      justifyContent: "center",
    },
  
    poweredByContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      "& > span": {
        fontSize: "0.75rem",
        lineHeight: "1rem",
      },
    },
    sayloLogoContainer: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      gap: "1.25px",
    },
    sayloText: {
      fill: "black",
    },
  
    form: {
      position: "relative",
      display: "flex",
      height: "100%",
      width: "100%",
      flexDirection: "column",
  
      "&> input[type='email']": {
        display: "flex",
        width: "100%",
        height: "2.5rem",
        flexShrink: "0",
        flexGrow: "0",
        borderRadius: "0.375rem",
        borderWidth: "1px",
        borderColor: "rgb(226, 232, 240)",
        backgroundColor: "#ffffff",
        padding: "0.5rem 0.75rem",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
      },
  
      "&> input[type='email']:focus-visible, &>textarea:focus-visible": {
        outline: "2px solid transparent",
        outlineOffset: "2px",
        boxShadow:
          "rgb(255, 255, 255) 0px 0px 0px 2px, var(--widget-color) 0px 0px 0px 4px, rgba(0, 0, 0, 0) 0px 0px 0px 0px",
      },
  
      "&> textarea": {
        display: "flex",
        height: "100%",
        width: "100%",
        minHeight: "80px",
        flexGrow: 1,
        resize: "none",
        borderRadius: "0.375rem",
        borderWidth: "1px",
        padding: "0.5rem 0.75rem",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        marginTop: "1rem",
      },
  
      "&> div": {
        display: "flex",
        marginTop: "1rem",
        gap: "0.5rem",
        alignItems: "center",
        flexGrow: "0",
        flexShrink: "0",
  
        "&>input[type='file']": {
          display: "none",
        },
  
        "&> div": {
          flex: "1 1 0%",
  
          "& > div": {
            display: "flex",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            gap: "0.5rem",
            alignItems: "center",
            color: "#71717a",
            "& > svg": {
              height: "1rem",
              width: "1rem",
              flexShrink: 0,
            },
  
            "& > span": {
              overflow: "hidden",
              display: "-webkit-box",
              "-webkit-box-orient": "vertical",
              "-webkit-line-clamp": 1,
            },
  
            "& > button": {
              display: "inline-flex",
              height: "1rem",
              width: "1rem",
              justifyContent: "center",
              gap: "0.5rem",
              whiteSpace: "nowrap",
              borderRadius: "calc(0.5rem - 2px)",
              fontWeight: "500",
              transitionProperty:
                "color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDuration: "150ms",
  
              "&> svg": {
                width: "1rem",
                height: "1rem",
                flexShrink: "0",
              },
            },
  
            "& > button:hover": {
              backgroundColor: "#f4f4f5",
            },
  
            "& > button:focus-visible": {
              outline: "2px solid transparent",
              outlineOffset: "2px",
              boxShadow:
                "rgb(255, 255, 255) 0px 0px 0px 2px, rgb(161, 161, 170) 0px 0px 0px 4px, rgba(0, 0, 0, 0) 0px 0px 0px 0px",
            },
          },
  
          "& > label": {
            color: "#71717a",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            gap: "0.5rem",
            alignItems: "center",
            cursor: "pointer",
            display: "flex",
  
            "&>svg": {
              width: "1rem",
              height: "1rem",
            },
          },
        },
      },
    },
  
    thanks: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      "&> :not([hidden]) ~ :not([hidden])": {
        marginTop: "1.5rem",
        marginBottom: "1.5rem",
      },
  
      "& > p": {
        fontSize: "1rem",
        lineHeight: "1.5rem",
        fontWeight: 400,
        textAlign: "center",
      },
  
      "& > button": {
        fontSize: "1rem",
        lineHeight: "1.5rem",
        fontWeight: 400,
        textAlign: "center",
      },
    },
  
    error: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      "&> :not([hidden]) ~ :not([hidden])": {
        marginTop: "1.5rem",
      },
  
      "& > div": {
        borderRadius: "9999px",
        backgroundColor: "rgba(239, 68, 68, 0.1)",
        padding: "0.75rem",
  
        "& > svg": {
          height: "3rem",
          width: "3rem",
          color: "rgb(239, 68, 68)",
        },
      },
  
      "& > p": {
        fontSize: "1rem",
        lineHeight: "1.5rem",
        fontWeight: 400,
        textAlign: "center",
      },
      "& > button": {
        display: "inline-flex",
        height: "auto",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        whiteSpace: "nowrap",
        borderRadius: "0.375rem",
        backgroundColor: "rgb(239, 68, 68)",
        color: "white",
        padding: "0.5rem 1rem",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: "500",
        transitionProperty:
          "color, background-color, border-color, text-decoration-color, fill, stroke",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDuration: "150ms",
      },
    },
  });