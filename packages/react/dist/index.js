'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { useStyles } from "./style";
export default function SayloFeedback({ apiKey }) {
    const classes = useStyles();
    const widgetRef = useRef(null);
    const openPopoverRef = useRef(null);
    const formRef = useRef(null);
    const fileInputRef = useRef(null);
    // States
    const [widgetState, setWidgetState] = useState("options");
    const [showWidgetPanel, setShowWidgetPanel] = useState(false);
    const [feedbackType, setFeedbackType] = useState(null);
    const [formLoading, setFormLoading] = useState(false);
    const [widgetHeader, setWidgetHeader] = useState("We'd love your feedback!");
    const [customization, setCustomization] = useState(null);
    const [error, setError] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    // Fetch widget customization
    useEffect(() => {
        const fetchCustomization = async () => {
            if (!apiKey) {
                setError("API key is missing.");
                return;
            }
            try {
                const response = await fetch(`https://www.saylo.io/api/widget-config?apiKey=${apiKey}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch widget customization.");
                }
                const data = await response.json();
                setCustomization(data);
            }
            catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error occurred.");
            }
        };
        if (apiKey) {
            fetchCustomization();
        }
    }, [apiKey]);
    // Memoizing derived values for class names to prevent unnecessary recalculations
    const buttonPositionClass = useMemo(() => {
        return customization?.button_position === "bottom-left"
            ? classes.positionLeft
            : classes.positionRight;
    }, [customization?.button_position, classes.positionLeft, classes.positionRight]);
    const shapeClass = useMemo(() => {
        return customization?.shape === "rounded" ? classes.shapeRounded : classes.shapeSquare;
    }, [customization?.shape, classes.shapeRounded, classes.shapeSquare]);
    const themeClass = useMemo(() => {
        return customization?.theme === "dark" ? "dark" : "light";
    }, [customization?.theme]);
    // Memoize handleTriggerClick using useCallback
    const handleTriggerClick = useCallback((event) => {
        const target = event.target;
        if (target && target.hasAttribute("data-saylo-widget-trigger")) {
            setShowWidgetPanel(true); // Open the widget panel
        }
    }, []);
    // Set up event listener for "custom-button"
    useEffect(() => {
        if (customization?.widget_type === "custom-button") {
            document.addEventListener("click", handleTriggerClick);
            return () => {
                document.removeEventListener("click", handleTriggerClick);
            };
        }
    }, [customization?.widget_type, handleTriggerClick]);
    // Handle file input changes
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files?.[0] || null);
    };
    const handleRemoveFile = () => {
        setSelectedFile(null);
        if (fileInputRef.current)
            fileInputRef.current.value = "";
    };
    // Handle feedback type selection
    const handleFeedbackTypeChange = (type, header) => {
        setFeedbackType(type);
        setWidgetState("form");
        setWidgetHeader(header);
    };
    const handleGoBack = () => {
        setFeedbackType(null);
        setWidgetState("options");
        setWidgetHeader("We'd love your feedback!");
        formRef.current.reset();
    };
    // Close widget when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (widgetRef.current &&
                !widgetRef.current.contains(event.target) &&
                !openPopoverRef.current?.contains(event.target)) {
                setFeedbackType(null);
                setWidgetState("options");
                setShowWidgetPanel(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    // Handle feedback submission
    const handleFeedbackSubmit = async (event) => {
        event.preventDefault();
        setFormLoading(true);
        try {
            const formData = new FormData(event.currentTarget);
            const type = feedbackType === "issue"
                ? "bug_report"
                : feedbackType === "idea"
                    ? "feature_request"
                    : "feedback";
            formData.append("type", type);
            formData.append("widget_id", customization.id);
            const response = await fetch("https://www.saylo.io/api/send-feedback", {
                method: "POST",
                body: formData,
            });
            if (!response.ok) {
                throw new Error("Failed to submit feedback.");
            }
            const result = await response.json();
            if (result.success) {
                setWidgetState("thanks");
                setWidgetHeader("Thank you for your feedback!");
                formRef.current.reset();
            }
            else {
                throw new Error(result.error || "Submission failed.");
            }
        }
        catch (err) {
            console.error("Feedback submission error:", err);
            setWidgetState("error");
            setWidgetHeader("Oops! Something went wrong.");
        }
        finally {
            setFormLoading(false);
        }
    };
    if (!customization)
        return;
    return (_jsxs("div", { "data-mode": themeClass, className: classes.base, children: [customization.widget_type === "floating-button" && _jsx("button", { ref: openPopoverRef, onClick: () => setShowWidgetPanel(true), "aria-label": "open widget", type: "button", style: {
                    backgroundColor: customization.button_color,
                }, className: `${classes.actionButton} ${buttonPositionClass}`, children: customization.floating_icon === "default" ? (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: classes.actionButtonSvg, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" }) })) : (_jsx("img", { src: customization.floating_icon_upload || "", alt: "Custom logo", width: 32, height: 32, className: classes.actionCustomImage })) }), _jsxs("div", { ref: widgetRef, className: `${classes.container} ${buttonPositionClass} ${shapeClass} ${showWidgetPanel ? classes.showFlex : classes.hide}`, children: [_jsxs("div", { className: `${classes.navigation} ${widgetState === "form"
                            ? `${classes.navBetween}`
                            : `${classes.navEnd}`}`, children: [widgetState === "form" && (_jsxs("button", { onClick: handleGoBack, className: classes.backButton, children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: _jsx("path", { d: "M5.21869 7.3333H13.3334V8.66664H5.21869L8.79469 12.2426L7.85202 13.1853L2.66669 7.99997L7.85202 2.81464L8.79469 3.7573L5.21869 7.3333Z" }) }), _jsx("span", { children: "Back" })] })), _jsxs("button", { onClick: () => {
                                    setShowWidgetPanel(false);
                                    formRef.current.reset();
                                    setWidgetState("options");
                                }, children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: _jsx("path", { d: "M7.99999 7.058L11.3 3.758L12.2427 4.70066L8.94266 8.00066L12.2427 11.3007L11.2993 12.2433L7.99932 8.94333L4.69999 12.2433L3.75732 11.3L7.05732 8L3.75732 4.7L4.69999 3.75866L7.99999 7.058Z", fill: "currentColor", className: classes.closeIconPath }) }), _jsx("span", { className: classes.srOnly, children: "Close widget Panel" })] })] }), _jsxs("div", { className: classes.header, children: [_jsx("p", { className: `${classes.headerTitle} ${widgetState === "thanks" || widgetState === "error"
                                    ? `${classes.headerTitleCenter}`
                                    : `${classes.headerTitleLeft}`}`, children: widgetHeader }), widgetState !== "thanks" && widgetState !== "error" && (_jsx("p", { className: classes.headerDescription, children: "Help us improve your experience" }))] }), _jsx("div", { className: `${classes.content}`, children: widgetState === "options" ? (_jsxs("div", { className: classes.buttonContainer, children: [_jsxs("button", { className: classes.button, onClick: () => handleFeedbackTypeChange("issue", "Report an Issue"), children: [_jsx("div", { className: `${classes.iconContainer} ${classes.issueIcon}`, children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: classes.feedbackIcon, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) }) }), _jsx("span", { className: classes.feedbackTitle, children: "Report an Issue" })] }), _jsxs("button", { className: classes.button, onClick: () => handleFeedbackTypeChange("idea", "Share an Idea"), children: [_jsx("div", { className: `${classes.iconContainer} ${classes.ideaIcon}`, children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: classes.feedbackIcon, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" }) }) }), _jsx("span", { className: classes.feedbackTitle, children: "Share an Idea" })] }), _jsxs("button", { className: classes.button, onClick: () => handleFeedbackTypeChange("other", "Other Feedback"), children: [_jsx("div", { className: `${classes.iconContainer} ${classes.otherIcon}`, children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: classes.feedbackIcon, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" }) }) }), _jsx("span", { className: classes.feedbackTitle, children: "Other Feedback" })] })] })) : widgetState === "form" ? (_jsxs("form", { onSubmit: handleFeedbackSubmit, ref: formRef, className: classes.form, children: [_jsx("input", { placeholder: "johndoe@email.com", name: "email", type: "email", required: true, style: {
                                        "--widget-color": customization.widget_color,
                                    } }), _jsx("textarea", { placeholder: "Type your message here.", name: "message", id: "message", style: {
                                        "--widget-color": customization.widget_color,
                                    }, required: true }), _jsxs("div", { children: [_jsx("input", { type: "file", ref: fileInputRef, accept: "image/*", onChange: handleFileChange, id: "fileUpload", name: "fileUpload" }), _jsx("div", { children: selectedFile ? (_jsxs("div", { children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: _jsx("path", { d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" }) }), _jsx("span", { children: selectedFile.name }), _jsx("button", { type: "button", onClick: handleRemoveFile, children: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [_jsx("path", { d: "M18 6 6 18" }), _jsx("path", { d: "m6 6 12 12" })] }) })] })) : (_jsxs("label", { htmlFor: "fileUpload", children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: _jsx("path", { d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" }) }), _jsx("span", { children: "Attach a file" })] })) }), _jsxs("button", { type: "submit", disabled: formLoading, className: classes.submitButton, style: { backgroundColor: customization.widget_color }, children: [formLoading && (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "saylo-animate-spin saylo-mr-2 saylo-h-4 saylo-w-4", children: _jsx("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }) })), "Submit"] })] })] })) : widgetState === "thanks" ? (_jsxs("div", { className: classes.thanks, children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "69", height: "68", viewBox: "0 0 69 68", fill: "none", children: _jsx("path", { d: "M34.5 62.3333C18.8515 62.3333 6.16663 49.6485 6.16663 34C6.16663 18.3515 18.8515 5.66666 34.5 5.66666C50.1485 5.66666 62.8333 18.3515 62.8333 34C62.8333 49.6485 50.1485 62.3333 34.5 62.3333ZM34.5 56.6667C40.5115 56.6667 46.2769 54.2786 50.5277 50.0278C54.7785  45.7769 57.1666 40.0116 57.1666 34C57.1666 27.9884 54.7785 22.2231 50.5277 17.9722C46.2769 13.7214 40.5115 11.3333 34.5 11.3333C28.4884 11.3333 22.723 13.7214 18.4722 17.9722C14.2214 22.2231 11.8333 27.9884 11.8333 34C11.8333 40.0116 14.2214 45.7769 18.4722 50.0278C22.723 54.2786 28.4884 56.6667 34.5 56.6667ZM31.6751 45.3333L19.6533 33.3115L23.6596 29.3052L31.6751 37.3207L47.7033 21.2925L51.7096 25.2988L31.6751 45.3333Z", fill: "#21AD21" }) }), _jsx("p", { children: "Your feedback has been recorded, thank you for your time." })] })) : (_jsxs("div", { className: classes.error, children: [_jsx("div", { children: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "saylo-h-12 saylo-w-12 saylo-text-destructive", children: [_jsx("path", { d: "M18 6 6 18" }), _jsx("path", { d: "m6 6 12 12" })] }) }), _jsx("p", { children: "Your feedback could not be recorded. Please try again later." }), _jsx("button", { onClick: () => {
                                        setWidgetState("options");
                                    }, children: "Try Again" })] })) }), customization?.saylo_visible && (_jsx("div", { className: classes.footerContainer, children: _jsxs("div", { className: classes.poweredByContainer, children: [_jsx("span", { children: "Powered by" }), _jsxs("div", { className: classes.sayloLogoContainer, children: [_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: [_jsx("path", { d: "M13.1424 0.499939H2.58108C1.16145 0.499939 0 1.66139 0 3.08102C0 3.54639 0.0659198 4.01175 0.281729 4.43003C0.541486 4.93385 0.94093 5.31446 1.38275 5.65661C2.29308 6.36054 3.28109 6.95775 4.22908 7.6091C4.85062 8.02973 5.47215 8.45037 6.08976 8.87649C6.29144 9.0154 6.49312 9.15508 6.69245 9.29713C6.77172 9.35363 6.86667 9.40856 6.93338 9.48233C6.43584 8.85609 4.21888 5.66211 4.30835 5.66211H13.1424C14.5621 5.66211 15.7235 4.50066 15.7235 3.08102C15.7235 1.66139 14.5621 0.499939 13.1424 0.499939Z", fill: "#92459A" }), _jsx("path", { d: "M2.58188 15.4434H13.1432C14.5628 15.4434 15.7243 14.2819 15.7243 12.8623C15.7243 12.3969 15.6584 11.9316 15.4426 11.5133C15.1828 11.0095 14.7834 10.6289 14.3415 10.2867C13.4312 9.58278 12.4432 8.98558 11.4952 8.33423C10.8737 7.91359 10.2521 7.49296 9.63454 7.06683C9.43285 6.92793 9.23117 6.78824 9.03184 6.6462C8.95258 6.5897 8.85762 6.53477 8.79092 6.461C9.28846 7.08724 11.5054 10.2812 11.4159 10.2812H2.58188C1.16224 10.2812 0.000793457 11.4427 0.000793457 12.8623C0.000793457 14.2819 1.16224 15.4434 2.58188 15.4434Z", fill: "#92459A" })] }), _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "47", height: "16", viewBox: "0 0 47 16", fill: "none", className: classes.sayloText, children: [_jsx("path", { d: "M7.13251 5.93677C6.51569 5.35526 5.81097 5.16142 4.98305 5.16142C3.96129 5.16142 3.39782 5.47846 3.39782 6.02466C3.39782 6.57085 3.9087 6.90516 5.01836 6.97579C6.65694 7.08173 8.73578 7.45136 8.73578 9.75935C8.73578 11.292 7.48487 12.6135 5.00109 12.6135C3.62697 12.6135 2.25286 12.3844 0.98468 11.0636L2.04176 9.53098C2.65858 10.2176 4.06801 10.7285 5.03641 10.7466C5.84707 10.7638 6.60437 10.3416 6.60437 9.70755C6.60437 9.10878 6.11075 8.86158 4.87789 8.79173C3.2393 8.66852 1.28367 8.06975 1.28367 6.09607C1.28367 4.12239 3.36251 3.38315 4.94773 3.38315C6.30459 3.38315 7.32635 3.64761 8.33006 4.52812L7.13251 5.93755V5.93677Z" }), _jsx("path", { d: "M16.9985 3.62956L16.9562 4.34212C16.4178 3.93404 15.7672 3.64604 15.0241 3.5189C14.7416 3.46946 14.4449 3.44435 14.1365 3.44435C11.3702 3.44435 9.64374 5.48787 9.64374 7.97165C9.64374 10.4554 11.3349 12.4997 14.1538 12.4997C14.4873 12.4997 14.8043 12.4715 15.1057 12.4173C15.8284 12.2878 16.4563 12.01 16.9758 11.6184L17.0338 12.3145H19.0593V3.62956H16.9985ZM12.7169 10.0654C12.6407 10.0058 12.5685 9.9414 12.5018 9.87312C12.4979 9.8692 12.4948 9.86607 12.4916 9.86214C12.4767 9.84723 12.4634 9.83311 12.45 9.81819C12.4281 9.79387 12.4061 9.76954 12.3857 9.74443C11.991 9.27122 11.7932 8.63242 11.7932 7.97165C11.7932 6.66816 12.6039 5.39998 14.1538 5.39998C15.5985 5.39998 16.5143 6.66816 16.5143 7.97165C16.5143 9.27514 15.7217 10.526 14.1538 10.526C13.5927 10.526 13.1312 10.3683 12.7694 10.1046C12.7514 10.0921 12.7341 10.0787 12.7169 10.0654Z" }), _jsx("path", { d: "M29.2597 3.62877L23.9571 15.9433H21.5965L23.217 12.1733L19.7468 3.62877H22.2486L23.5702 7.3815L24.3981 9.82996L25.2967 7.43408L26.8819 3.62877H29.2605H29.2597Z" }), _jsx("path", { d: "M32.5188 3.05176e-05V12.3145H30.3874V3.05176e-05H32.5188Z" }), _jsx("path", { d: "M43.0362 7.98028C43.0362 10.4821 41.327 12.5076 38.5089 12.5076C35.6909 12.5076 33.9989 10.4813 33.9989 7.98028C33.9989 5.47924 35.7254 3.45299 38.4909 3.45299C41.2564 3.45299 43.0362 5.49651 43.0362 7.98028ZM36.1484 7.98028C36.1484 9.30182 36.941 10.5347 38.5089 10.5347C40.0769 10.5347 40.8695 9.30182 40.8695 7.98028C40.8695 6.65874 39.9537 5.40783 38.5089 5.40783C36.959 5.40783 36.1484 6.67601 36.1484 7.98028Z" })] })] })] }) }))] })] }));
}
//# sourceMappingURL=index.js.map