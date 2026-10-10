// import React, { useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   ArrowLeft,
//   ArrowRight,
//   BriefcaseBusiness,
//   Building2,
//   Check,
//   ChevronDown,
//   Code2,
//   FileText,
//   Home,
//   Mail,
//   MapPin,
//   Paperclip,
//   Rocket,
//   Send,
//   ShieldCheck,
//   Trash2,
//   User,
//   X,
// } from "lucide-react";

// /* =========================================================
//    TYPES
// ========================================================= */

// type HireType = "company" | "project" | null;

// type Step = "select" | "company" | "project" | "success";

// /* =========================================================
//    CONSTANTS
// ========================================================= */

// const MAX_FILE_SIZE = 50 * 1024 * 1024;

// const ALLOWED_FILE_EXTENSIONS = [".pdf", ".doc", ".docx"];

// const ALLOWED_FILE_TYPES = [
//   "application/pdf",
//   "application/msword",
//   "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
// ];

// const PROJECT_TYPES = [
//   {
//     id: "website",
//     label: "Website",
//   },
//   {
//     id: "web-app",
//     label: "Web App",
//   },
//   {
//     id: "ecommerce",
//     label: "E-commerce",
//   },
//   {
//     id: "dashboard",
//     label: "Dashboard",
//   },
//   {
//     id: "ui-development",
//     label: "UI Development",
//   },
//   {
//     id: "other",
//     label: "Other",
//   },
// ];

// /* =========================================================
//    SHARED CLASSES
// ========================================================= */

// const inputClass = `
//   h-12 w-full rounded-xl
//   border border-slate-700/80
//   bg-slate-900/70
//   px-4
//   text-sm text-white
//   outline-none
//   transition
//   placeholder:text-slate-500
//   focus:border-cyan-400
//   focus:ring-2
//   focus:ring-cyan-400/10
// `;

// const labelClass = `
//   mb-2 block
//   text-sm font-medium
//   text-slate-200
// `;

// /* =========================================================
//    PRIVACY NOTE
// ========================================================= */

// function PrivacyNote() {
//   return (
//     <div
//       className="
//         flex items-center justify-center
//         gap-2
//         text-center text-xs
//         text-slate-500
//         sm:col-span-2
//       "
//     >
//       <ShieldCheck size={14} className="shrink-0" />

//       <span>Your information will only be used to respond to you.</span>
//     </div>
//   );
// }

// /* =========================================================
//    FLOATING HIRE ME BUTTON
// ========================================================= */

// interface FloatingHireMeButtonProps {
//   onClick: () => void;
// }

// function FloatingHireMeButton({ onClick }: FloatingHireMeButtonProps) {
//   return (
//     <motion.button
//       type="button"
//       onClick={onClick}
//       aria-label="Hire Me"
//       initial={{
//         opacity: 0,
//         scale: 0,
//       }}
//       animate={{
//         opacity: 1,
//         scale: 1,
//       }}
//       whileHover={{
//         scale: 1.08,
//       }}
//       whileTap={{
//         scale: 0.94,
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 260,
//         damping: 18,
//       }}
//       className="
//         group fixed
//         bottom-5 right-5
//         z-[900]

//         flex h-[78px] w-[78px]
//         items-center justify-center

//         rounded-full
//         border border-cyan-400/40
//         bg-[#06101d]/95

//         text-white

//         shadow-[0_10px_45px_rgba(6,182,212,0.25)]

//         backdrop-blur-xl

//         sm:bottom-8
//         sm:right-8
//         sm:h-[86px]
//         sm:w-[86px]
//       "
//     >
//       {/* Rotating Ring */}
//       <motion.span
//         animate={{
//           rotate: 360,
//         }}
//         transition={{
//           duration: 12,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         className="
//           absolute inset-1
//           rounded-full
//           border border-dashed
//           border-cyan-400/40
//         "
//       />

//       {/* Glow */}
//       <span
//         className="
//           absolute inset-0
//           rounded-full
//           bg-cyan-400/5
//           blur-xl

//           transition-all duration-300

//           group-hover:bg-cyan-400/20
//         "
//       />

//       {/* Button Content */}
//       <span
//         className="
//           relative z-10
//           flex flex-col
//           items-center
//           justify-center
//         "
//       >
//         <BriefcaseBusiness
//           size={20}
//           strokeWidth={1.8}
//           className="
//             mb-1
//             text-cyan-400
//             transition-transform
//             duration-300
//             group-hover:-translate-y-0.5
//           "
//         />

//         <span
//           className="
//             text-[11px]
//             font-bold
//             tracking-wide
//           "
//         >
//           Hire Me
//         </span>
//       </span>

//       {/* Arrow */}
//       <span
//         className="
//           absolute
//           -right-1
//           -top-1

//           flex h-6 w-6
//           items-center
//           justify-center

//           rounded-full

//           border border-slate-700
//           bg-slate-900
//           text-cyan-400

//           shadow-lg

//           transition-all duration-300

//           group-hover:border-cyan-400
//           group-hover:bg-cyan-400
//           group-hover:text-slate-950
//         "
//       >
//         <ArrowRight size={13} />
//       </span>
//     </motion.button>
//   );
// }

// /* =========================================================
//    MAIN MODAL
// ========================================================= */

// interface HireMeModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// function HireMeModal({ isOpen, onClose }: HireMeModalProps) {
//   const [step, setStep] = useState<Step>("select");

//   const [submittedType, setSubmittedType] = useState<HireType>(null);

//   /* =======================================================
//      COMPANY FORM
//   ======================================================= */

//   const [companyForm, setCompanyForm] = useState({
//     name: "",
//     email: "",
//     company: "",
//     role: "",
//     employmentType: "",
//     location: "",
//     compensation: "",
//     message: "",
//   });

//   /* =======================================================
//      PROJECT FORM
//   ======================================================= */

//   const [projectForm, setProjectForm] = useState({
//     name: "",
//     email: "",
//     company: "",
//     projectType: "",
//     budget: "",
//     timeline: "",
//     message: "",
//   });

//   /* =======================================================
//      FILE STATE
//   ======================================================= */

//   const [projectFile, setProjectFile] = useState<File | null>(null);

//   const [fileError, setFileError] = useState("");

//   const fileInputRef = useRef<HTMLInputElement | null>(null);

//   /* =======================================================
//      SELECT TYPE
//   ======================================================= */

//   const selectType = (type: HireType) => {
//     if (type === "company") {
//       setStep("company");
//     }

//     if (type === "project") {
//       setStep("project");
//     }
//   };

//   /* =======================================================
//      BACK
//   ======================================================= */

//   const goBack = () => {
//     if (step === "company" || step === "project") {
//       setStep("select");
//       return;
//     }

//     if (step === "success") {
//       setStep("select");
//       setSubmittedType(null);
//     }
//   };

//   /* =======================================================
//      FILE VALIDATION
//   ======================================================= */

//   const handleProjectFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFileError("");

//     const file = e.target.files?.[0];

//     if (!file) {
//       setProjectFile(null);
//       return;
//     }

//     /* -----------------------------------------------
//        Extension validation
//     ------------------------------------------------ */

//     const fileName = file.name.toLowerCase();

//     const hasValidExtension = ALLOWED_FILE_EXTENSIONS.some((extension) =>
//       fileName.endsWith(extension),
//     );

//     /* -----------------------------------------------
//        MIME validation
//     ------------------------------------------------ */

//     const hasValidMime = ALLOWED_FILE_TYPES.includes(file.type);

//     if (!hasValidExtension && !hasValidMime) {
//       setProjectFile(null);

//       setFileError(
//         "Invalid file type. Please upload only PDF, DOC, or DOCX files.",
//       );

//       e.target.value = "";

//       return;
//     }

//     /* -----------------------------------------------
//        Size validation
//     ------------------------------------------------ */

//     if (file.size > MAX_FILE_SIZE) {
//       setProjectFile(null);

//       setFileError("File size is too large. Maximum allowed size is 50 MB.");

//       e.target.value = "";

//       return;
//     }

//     /* -----------------------------------------------
//        Valid file
//     ------------------------------------------------ */

//     setProjectFile(file);
//   };

//   /* =======================================================
//      REMOVE FILE
//   ======================================================= */

//   const removeProjectFile = () => {
//     setProjectFile(null);
//     setFileError("");

//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   /* =======================================================
//      COMPANY SUBMIT
//   ======================================================= */

//   const handleCompanySubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     setSubmittedType("company");
//     setStep("success");
//   };

//   /* =======================================================
//      PROJECT SUBMIT
//   ======================================================= */

//   const handleProjectSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     /* File validation */
//     if (fileError) {
//       return;
//     }

//     if (projectFile && projectFile.size > MAX_FILE_SIZE) {
//       setFileError("File size is too large. Maximum allowed size is 50 MB.");

//       return;
//     }

//     setSubmittedType("project");
//     setStep("success");
//   };

//   /* =======================================================
//      CLOSE
//   ======================================================= */

//   const handleClose = () => {
//     setStep("select");

//     setSubmittedType(null);

//     setFileError("");

//     setProjectFile(null);

//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }

//     onClose();
//   };

//   if (!isOpen) {
//     return null;
//   }

//   /* =======================================================
//      MODAL
//   ======================================================= */

//   return (
//     <AnimatePresence>
//       <div
//         className="
//           fixed inset-0
//           z-[1000]

//           flex
//           items-center
//           justify-center

//           p-3
//           sm:p-5
//         "
//       >
//         {/* =================================================
//             BACKDROP
//         ================================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//           }}
//           animate={{
//             opacity: 1,
//           }}
//           exit={{
//             opacity: 0,
//           }}
//           onClick={handleClose}
//           className="
//             absolute inset-0
//             bg-slate-950/85
//             backdrop-blur-md
//           "
//         />

//         {/* =================================================
//             MODAL
//         ================================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             scale: 0.96,
//             y: 20,
//           }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//             y: 0,
//           }}
//           exit={{
//             opacity: 0,
//             scale: 0.96,
//             y: 20,
//           }}
//           transition={{
//             duration: 0.25,
//           }}
//           className="
//             relative

//             flex
//             w-full
//             max-w-5xl

//             max-h-[94vh]

//             flex-col
//             overflow-hidden

//             rounded-3xl

//             border
//             border-cyan-400/20

//             bg-[#07111f]

//             shadow-[0_25px_100px_rgba(0,0,0,0.65)]
//           "
//         >
//           {/* Background Glow */}
//           <div
//             className="
//               pointer-events-none
//               absolute

//               -left-32
//               -top-32

//               h-80
//               w-80

//               rounded-full

//               bg-cyan-500/10

//               blur-3xl
//             "
//           />

//           {/* =================================================
//               HEADER
//           ================================================== */}

//           <div
//             className="
//               relative

//               flex
//               shrink-0
//               items-center
//               justify-between

//               border-b
//               border-slate-800/80

//               px-5
//               py-4

//               sm:px-7
//             "
//           >
//             <div
//               className="
//                 flex
//                 items-center
//                 gap-3
//               "
//             >
//               {(step === "company" || step === "project") && (
//                 <button
//                   type="button"
//                   onClick={goBack}
//                   className="
//                     flex
//                     h-9
//                     w-9

//                     items-center
//                     justify-center

//                     rounded-lg

//                     border
//                     border-slate-700

//                     text-slate-300

//                     transition

//                     hover:border-cyan-400
//                     hover:text-cyan-400
//                   "
//                   aria-label="Go back"
//                 >
//                   <ArrowLeft size={17} />
//                 </button>
//               )}

//               <div>
//                 <p
//                   className="
//                     text-[10px]
//                     font-medium
//                     uppercase
//                     tracking-[0.22em]
//                     text-cyan-400

//                     sm:text-xs
//                   "
//                 >
//                   Let's Work Together
//                 </p>

//                 <h2
//                   className="
//                     mt-1
//                     text-base
//                     font-semibold
//                     text-white

//                     sm:text-lg
//                   "
//                 >
//                   {step === "select" && "How can I help?"}

//                   {step === "company" && "Company Opportunity"}

//                   {step === "project" && "Start a Project"}

//                   {step === "success" && "Request Submitted"}
//                 </h2>
//               </div>
//             </div>

//             <button
//               type="button"
//               onClick={handleClose}
//               aria-label="Close"
//               className="
//                 flex
//                 h-9
//                 w-9

//                 items-center
//                 justify-center

//                 rounded-lg

//                 text-slate-400

//                 transition

//                 hover:bg-slate-800
//                 hover:text-white
//               "
//             >
//               <X size={20} />
//             </button>
//           </div>

//           {/* =================================================
//               CONTENT
//           ================================================== */}

//           <div
//             className="
//               relative
//               overflow-y-auto
//             "
//           >
//             <AnimatePresence mode="wait">
//               {/* =================================================
//                   SELECT
//               ================================================== */}

//               {step === "select" && (
//                 <motion.div
//                   key="select"
//                   initial={{
//                     opacity: 0,
//                     x: 20,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     x: 0,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     x: -20,
//                   }}
//                   className="
//                     px-5
//                     py-9

//                     sm:px-10
//                     sm:py-12
//                   "
//                 >
//                   {/* Intro */}
//                   <div
//                     className="
//                       mx-auto
//                       max-w-2xl
//                       text-center
//                     "
//                   >
//                     <div
//                       className="
//                         mx-auto

//                         flex
//                         h-16
//                         w-16

//                         items-center
//                         justify-center

//                         rounded-2xl

//                         border
//                         border-cyan-400/20

//                         bg-cyan-400/10

//                         text-cyan-400
//                       "
//                     >
//                       <Rocket size={28} />
//                     </div>

//                     <h3
//                       className="
//                         mt-5
//                         text-2xl
//                         font-bold
//                         tracking-tight
//                         text-white

//                         sm:text-3xl
//                       "
//                     >
//                       What are you looking for?
//                     </h3>

//                     <p
//                       className="
//                         mx-auto
//                         mt-3
//                         max-w-lg

//                         text-sm
//                         leading-6
//                         text-slate-400

//                         sm:text-base
//                       "
//                     >
//                       Choose an option below to get started. I'll show you a
//                       form tailored to your needs.
//                     </p>
//                   </div>

//                   {/* Options */}
//                   <div
//                     className="
//                       mx-auto
//                       mt-8
//                       grid
//                       max-w-3xl
//                       grid-cols-1
//                       gap-4

//                       sm:grid-cols-2
//                     "
//                   >
//                     {/* Company */}
//                     <button
//                       type="button"
//                       onClick={() => selectType("company")}
//                       className="group text-left"
//                     >
//                       <div
//                         className="
//                           h-full
//                           rounded-2xl

//                           border
//                           border-slate-700

//                           bg-slate-900/60

//                           p-6

//                           transition
//                           duration-300

//                           hover:-translate-y-1

//                           hover:border-cyan-400/60

//                           hover:bg-slate-900
//                         "
//                       >
//                         <div
//                           className="
//                             flex
//                             items-start
//                             justify-between
//                           "
//                         >
//                           <div
//                             className="
//                               flex
//                               h-12
//                               w-12

//                               items-center
//                               justify-center

//                               rounded-xl

//                               bg-cyan-400/10

//                               text-cyan-400
//                             "
//                           >
//                             <Building2 size={24} />
//                           </div>

//                           <ArrowRight
//                             size={20}
//                             className="
//                               text-slate-600

//                               transition

//                               group-hover:translate-x-1
//                               group-hover:text-cyan-400
//                             "
//                           />
//                         </div>

//                         <h4
//                           className="
//                             mt-6
//                             text-xl
//                             font-semibold
//                             text-white
//                           "
//                         >
//                           Company Opportunity
//                         </h4>

//                         <p
//                           className="
//                             mt-2
//                             text-sm
//                             leading-6
//                             text-slate-400
//                           "
//                         >
//                           Looking for a developer to join your team for a
//                           full-time, part-time, contract, or remote role?
//                         </p>

//                         <span
//                           className="
//                             mt-6
//                             inline-flex
//                             items-center
//                             gap-2

//                             text-sm
//                             font-semibold
//                             text-cyan-400
//                           "
//                         >
//                           Continue
//                           <ArrowRight size={15} />
//                         </span>
//                       </div>
//                     </button>

//                     {/* Project */}
//                     <button
//                       type="button"
//                       onClick={() => selectType("project")}
//                       className="group text-left"
//                     >
//                       <div
//                         className="
//                           h-full
//                           rounded-2xl

//                           border
//                           border-slate-700

//                           bg-slate-900/60

//                           p-6

//                           transition
//                           duration-300

//                           hover:-translate-y-1

//                           hover:border-cyan-400/60

//                           hover:bg-slate-900
//                         "
//                       >
//                         <div
//                           className="
//                             flex
//                             items-start
//                             justify-between
//                           "
//                         >
//                           <div
//                             className="
//                               flex
//                               h-12
//                               w-12

//                               items-center
//                               justify-center

//                               rounded-xl

//                               bg-cyan-400/10

//                               text-cyan-400
//                             "
//                           >
//                             <Rocket size={24} />
//                           </div>

//                           <ArrowRight
//                             size={20}
//                             className="
//                               text-slate-600

//                               transition

//                               group-hover:translate-x-1
//                               group-hover:text-cyan-400
//                             "
//                           />
//                         </div>

//                         <h4
//                           className="
//                             mt-6
//                             text-xl
//                             font-semibold
//                             text-white
//                           "
//                         >
//                           Start a Project
//                         </h4>

//                         <p
//                           className="
//                             mt-2
//                             text-sm
//                             leading-6
//                             text-slate-400
//                           "
//                         >
//                           Have an idea, website, dashboard, web app, or
//                           e-commerce project you'd like to build?
//                         </p>

//                         <span
//                           className="
//                             mt-6
//                             inline-flex
//                             items-center
//                             gap-2

//                             text-sm
//                             font-semibold
//                             text-cyan-400
//                           "
//                         >
//                           Continue
//                           <ArrowRight size={15} />
//                         </span>
//                       </div>
//                     </button>
//                   </div>

//                   {/* Direct Email */}
//                   <div
//                     className="
//                       mt-8

//                       flex
//                       flex-wrap
//                       items-center
//                       justify-center
//                       gap-2

//                       text-xs
//                       text-slate-500
//                     "
//                   >
//                     <Mail size={14} />

//                     <span>Prefer a direct conversation?</span>

//                     <a
//                       href="mailto:ahadm3016@gmail.com"
//                       className="
//                         text-slate-300
//                         transition
//                         hover:text-cyan-400
//                       "
//                     >
//                       ahadm3016@gmail.com
//                     </a>
//                   </div>
//                 </motion.div>
//               )}

//               {/* =================================================
//                   COMPANY FORM
//               ================================================== */}

//               {step === "company" && (
//                 <motion.div
//                   key="company"
//                   initial={{
//                     opacity: 0,
//                     x: 20,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     x: 0,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     x: -20,
//                   }}
//                   className="
//                     px-5
//                     py-7

//                     sm:px-8
//                     sm:py-8
//                   "
//                 >
//                   {/* Header */}
//                   <div className="mb-7">
//                     <div
//                       className="
//                         mb-3
//                         inline-flex
//                         items-center
//                         gap-2

//                         rounded-full

//                         border
//                         border-cyan-400/20

//                         bg-cyan-400/10

//                         px-3
//                         py-1.5

//                         text-xs
//                         font-medium
//                         text-cyan-400
//                       "
//                     >
//                       <Building2 size={14} />
//                       Company
//                     </div>

//                     <h3
//                       className="
//                         text-2xl
//                         font-bold
//                         text-white
//                       "
//                     >
//                       Let's talk about the role
//                     </h3>

//                     <p
//                       className="
//                         mt-2
//                         text-sm
//                         leading-6
//                         text-slate-400
//                       "
//                     >
//                       Tell me about the opportunity and your organization.
//                     </p>
//                   </div>

//                   <form
//                     onSubmit={handleCompanySubmit}
//                     className="
//                       grid
//                       grid-cols-1
//                       gap-5

//                       sm:grid-cols-2
//                     "
//                   >
//                     {/* Full Name */}
//                     <div>
//                       <label className={labelClass}>
//                         Full Name <span className="text-cyan-400">*</span>
//                       </label>

//                       <div className="relative">
//                         <User
//                           size={17}
//                           className="
//                             absolute
//                             left-4
//                             top-1/2
//                             -translate-y-1/2
//                             text-slate-500
//                           "
//                         />

//                         <input
//                           required
//                           value={companyForm.name}
//                           onChange={(e) =>
//                             setCompanyForm({
//                               ...companyForm,
//                               name: e.target.value,
//                             })
//                           }
//                           placeholder="Your name"
//                           className={`${inputClass} pl-11`}
//                         />
//                       </div>
//                     </div>

//                     {/* Email */}
//                     <div>
//                       <label className={labelClass}>
//                         Work Email <span className="text-cyan-400">*</span>
//                       </label>

//                       <div className="relative">
//                         <Mail
//                           size={17}
//                           className="
//                             absolute
//                             left-4
//                             top-1/2
//                             -translate-y-1/2
//                             text-slate-500
//                           "
//                         />

//                         <input
//                           required
//                           type="email"
//                           value={companyForm.email}
//                           onChange={(e) =>
//                             setCompanyForm({
//                               ...companyForm,
//                               email: e.target.value,
//                             })
//                           }
//                           placeholder="you@company.com"
//                           className={`${inputClass} pl-11`}
//                         />
//                       </div>
//                     </div>

//                     {/* Company */}
//                     <div>
//                       <label className={labelClass}>
//                         Company Name <span className="text-cyan-400">*</span>
//                       </label>

//                       <div className="relative">
//                         <Building2
//                           size={17}
//                           className="
//                             absolute
//                             left-4
//                             top-1/2
//                             -translate-y-1/2
//                             text-slate-500
//                           "
//                         />

//                         <input
//                           required
//                           value={companyForm.company}
//                           onChange={(e) =>
//                             setCompanyForm({
//                               ...companyForm,
//                               company: e.target.value,
//                             })
//                           }
//                           placeholder="Your company"
//                           className={`${inputClass} pl-11`}
//                         />
//                       </div>
//                     </div>

//                     {/* Role */}
//                     <div>
//                       <label className={labelClass}>
//                         Job Title / Role{" "}
//                         <span className="text-cyan-400">*</span>
//                       </label>

//                       <input
//                         required
//                         value={companyForm.role}
//                         onChange={(e) =>
//                           setCompanyForm({
//                             ...companyForm,
//                             role: e.target.value,
//                           })
//                         }
//                         placeholder="e.g. Frontend Developer"
//                         className={inputClass}
//                       />
//                     </div>

//                     {/* Employment Type */}
//                     <div className="sm:col-span-2">
//                       <label className={labelClass}>
//                         Employment Type <span className="text-cyan-400">*</span>
//                       </label>

//                       <div
//                         className="
//                           grid
//                           grid-cols-2
//                           gap-2

//                           sm:grid-cols-4
//                         "
//                       >
//                         {["Full-time", "Part-time", "Contract", "Remote"].map(
//                           (type) => (
//                             <button
//                               key={type}
//                               type="button"
//                               onClick={() =>
//                                 setCompanyForm({
//                                   ...companyForm,
//                                   employmentType: type,
//                                 })
//                               }
//                               className={`
//                               rounded-xl
//                               border
//                               px-4
//                               py-3

//                               text-sm
//                               font-medium

//                               transition

//                               ${
//                                 companyForm.employmentType === type
//                                   ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
//                                   : "border-slate-700 bg-slate-900/60 text-slate-400 hover:border-slate-600 hover:text-white"
//                               }
//                             `}
//                             >
//                               {type}
//                             </button>
//                           ),
//                         )}
//                       </div>
//                     </div>

//                     {/* Location */}
//                     <div>
//                       <label className={labelClass}>Location</label>

//                       <div className="relative">
//                         <MapPin
//                           size={17}
//                           className="
//                             absolute
//                             left-4
//                             top-1/2
//                             -translate-y-1/2
//                             text-slate-500
//                           "
//                         />

//                         <input
//                           value={companyForm.location}
//                           onChange={(e) =>
//                             setCompanyForm({
//                               ...companyForm,
//                               location: e.target.value,
//                             })
//                           }
//                           placeholder="Dhaka / Remote"
//                           className={`${inputClass} pl-11`}
//                         />
//                       </div>
//                     </div>

//                     {/* Compensation */}
//                     <div>
//                       <label className={labelClass}>
//                         Compensation{" "}
//                         <span className="text-xs text-slate-500">
//                           (Optional)
//                         </span>
//                       </label>

//                       <input
//                         value={companyForm.compensation}
//                         onChange={(e) =>
//                           setCompanyForm({
//                             ...companyForm,
//                             compensation: e.target.value,
//                           })
//                         }
//                         placeholder="e.g. $20K – $40K"
//                         className={inputClass}
//                       />
//                     </div>

//                     {/* Message */}
//                     <div className="sm:col-span-2">
//                       <label className={labelClass}>
//                         About the Opportunity{" "}
//                         <span className="text-cyan-400">*</span>
//                       </label>

//                       <textarea
//                         required
//                         rows={5}
//                         maxLength={1000}
//                         value={companyForm.message}
//                         onChange={(e) =>
//                           setCompanyForm({
//                             ...companyForm,
//                             message: e.target.value,
//                           })
//                         }
//                         placeholder="Tell me about the role, responsibilities, team, requirements, and anything else I should know..."
//                         className="
//                           w-full
//                           resize-none
//                           rounded-xl

//                           border
//                           border-slate-700/80

//                           bg-slate-900/70

//                           px-4
//                           py-3

//                           text-sm
//                           leading-6
//                           text-white

//                           outline-none
//                           transition

//                           placeholder:text-slate-500

//                           focus:border-cyan-400
//                           focus:ring-2
//                           focus:ring-cyan-400/10
//                         "
//                       />

//                       <div
//                         className="
//                           mt-1
//                           text-right
//                           text-xs
//                           text-slate-600
//                         "
//                       >
//                         {companyForm.message.length}
//                         /1000
//                       </div>
//                     </div>

//                     {/* Submit */}
//                     <div className="sm:col-span-2">
//                       <button
//                         type="submit"
//                         className="
//                           group

//                           flex
//                           w-full
//                           items-center
//                           justify-center
//                           gap-2

//                           rounded-xl

//                           bg-gradient-to-r
//                           from-cyan-400
//                           to-blue-500

//                           px-6
//                           py-3.5

//                           text-sm
//                           font-bold
//                           text-slate-950

//                           shadow-lg
//                           shadow-cyan-500/10

//                           transition

//                           hover:scale-[1.01]
//                         "
//                       >
//                         <Send size={17} />
//                         Send Opportunity
//                         <ArrowRight
//                           size={16}
//                           className="
//                             transition
//                             group-hover:translate-x-1
//                           "
//                         />
//                       </button>
//                     </div>

//                     <PrivacyNote />
//                   </form>
//                 </motion.div>
//               )}

//               {/* =================================================
//                   PROJECT FORM
//               ================================================== */}

//               {step === "project" && (
//                 <motion.div
//                   key="project"
//                   initial={{
//                     opacity: 0,
//                     x: 20,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     x: 0,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     x: -20,
//                   }}
//                   className="
//                     px-5
//                     py-7

//                     sm:px-8
//                     sm:py-8
//                   "
//                 >
//                   {/* Header */}
//                   <div className="mb-7">
//                     <div
//                       className="
//                         mb-3
//                         inline-flex
//                         items-center
//                         gap-2

//                         rounded-full

//                         border
//                         border-cyan-400/20

//                         bg-cyan-400/10

//                         px-3
//                         py-1.5

//                         text-xs
//                         font-medium
//                         text-cyan-400
//                       "
//                     >
//                       <Rocket size={14} />
//                       Project Based
//                     </div>

//                     <h3
//                       className="
//                         text-2xl
//                         font-bold
//                         text-white
//                       "
//                     >
//                       Let's build something great
//                     </h3>

//                     <p
//                       className="
//                         mt-2
//                         text-sm
//                         leading-6
//                         text-slate-400
//                       "
//                     >
//                       Share your project details and let's turn your idea into
//                       something real.
//                     </p>
//                   </div>

//                   <form
//                     onSubmit={handleProjectSubmit}
//                     className="
//                       grid
//                       grid-cols-1
//                       gap-5

//                       sm:grid-cols-2
//                     "
//                   >
//                     {/* Full Name */}
//                     <div>
//                       <label className={labelClass}>
//                         Full Name <span className="text-cyan-400">*</span>
//                       </label>

//                       <div className="relative">
//                         <User
//                           size={17}
//                           className="
//                             absolute
//                             left-4
//                             top-1/2
//                             -translate-y-1/2
//                             text-slate-500
//                           "
//                         />

//                         <input
//                           required
//                           value={projectForm.name}
//                           onChange={(e) =>
//                             setProjectForm({
//                               ...projectForm,
//                               name: e.target.value,
//                             })
//                           }
//                           placeholder="Your name"
//                           className={`${inputClass} pl-11`}
//                         />
//                       </div>
//                     </div>

//                     {/* Email */}
//                     <div>
//                       <label className={labelClass}>
//                         Email Address <span className="text-cyan-400">*</span>
//                       </label>

//                       <div className="relative">
//                         <Mail
//                           size={17}
//                           className="
//                             absolute
//                             left-4
//                             top-1/2
//                             -translate-y-1/2
//                             text-slate-500
//                           "
//                         />

//                         <input
//                           required
//                           type="email"
//                           value={projectForm.email}
//                           onChange={(e) =>
//                             setProjectForm({
//                               ...projectForm,
//                               email: e.target.value,
//                             })
//                           }
//                           placeholder="you@example.com"
//                           className={`${inputClass} pl-11`}
//                         />
//                       </div>
//                     </div>

//                     {/* Company */}
//                     <div className="sm:col-span-2">
//                       <label className={labelClass}>
//                         Company / Organization{" "}
//                         <span className="text-xs text-slate-500">
//                           (Optional)
//                         </span>
//                       </label>

//                       <div className="relative">
//                         <Building2
//                           size={17}
//                           className="
//                             absolute
//                             left-4
//                             top-1/2
//                             -translate-y-1/2
//                             text-slate-500
//                           "
//                         />

//                         <input
//                           value={projectForm.company}
//                           onChange={(e) =>
//                             setProjectForm({
//                               ...projectForm,
//                               company: e.target.value,
//                             })
//                           }
//                           placeholder="Your company or organization"
//                           className={`${inputClass} pl-11`}
//                         />
//                       </div>
//                     </div>

//                     {/* Project Type */}
//                     <div className="sm:col-span-2">
//                       <label className={labelClass}>
//                         What do you want to build?{" "}
//                         <span className="text-cyan-400">*</span>
//                       </label>

//                       <div
//                         className="
//                           grid
//                           grid-cols-2
//                           gap-2

//                           sm:grid-cols-3
//                         "
//                       >
//                         {PROJECT_TYPES.map((type) => (
//                           <button
//                             key={type.id}
//                             type="button"
//                             onClick={() =>
//                               setProjectForm({
//                                 ...projectForm,
//                                 projectType: type.id,
//                               })
//                             }
//                             className={`
//                                 flex
//                                 items-center
//                                 gap-2

//                                 rounded-xl

//                                 border
//                                 px-3
//                                 py-3

//                                 text-left
//                                 text-sm

//                                 transition

//                                 ${
//                                   projectForm.projectType === type.id
//                                     ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
//                                     : "border-slate-700 bg-slate-900/60 text-slate-400 hover:border-slate-600 hover:text-white"
//                                 }
//                               `}
//                           >
//                             <Code2 size={17} />

//                             {type.label}
//                           </button>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Budget */}
//                     <div>
//                       <label className={labelClass}>
//                         Budget Range <span className="text-cyan-400">*</span>
//                       </label>

//                       <div className="relative">
//                         <select
//                           required
//                           value={projectForm.budget}
//                           onChange={(e) =>
//                             setProjectForm({
//                               ...projectForm,
//                               budget: e.target.value,
//                             })
//                           }
//                           className={`
//                             ${inputClass}
//                             appearance-none
//                           `}
//                         >
//                           <option value="" disabled>
//                             Select budget
//                           </option>

//                           <option value="300-500">$300 – $500</option>

//                           <option value="500-1000">$500 – $1,000</option>

//                           <option value="1000-2500">$1,000 – $2,500</option>

//                           <option value="2500+">$2,500+</option>

//                           <option value="discuss">Let's Discuss</option>
//                         </select>

//                         <ChevronDown
//                           size={17}
//                           className="
//                             pointer-events-none

//                             absolute
//                             right-4
//                             top-1/2

//                             -translate-y-1/2

//                             text-slate-500
//                           "
//                         />
//                       </div>
//                     </div>

//                     {/* Timeline */}
//                     <div>
//                       <label className={labelClass}>
//                         Expected Timeline{" "}
//                         <span className="text-cyan-400">*</span>
//                       </label>

//                       <div className="relative">
//                         <select
//                           required
//                           value={projectForm.timeline}
//                           onChange={(e) =>
//                             setProjectForm({
//                               ...projectForm,
//                               timeline: e.target.value,
//                             })
//                           }
//                           className={`
//                             ${inputClass}
//                             appearance-none
//                           `}
//                         >
//                           <option value="" disabled>
//                             Select timeline
//                           </option>

//                           <option value="asap">ASAP</option>

//                           <option value="1-2-weeks">1–2 Weeks</option>

//                           <option value="2-4-weeks">2–4 Weeks</option>

//                           <option value="1-3-months">1–3 Months</option>

//                           <option value="flexible">Flexible</option>
//                         </select>

//                         <ChevronDown
//                           size={17}
//                           className="
//                             pointer-events-none

//                             absolute
//                             right-4
//                             top-1/2

//                             -translate-y-1/2

//                             text-slate-500
//                           "
//                         />
//                       </div>
//                     </div>

//                     {/* Project Details */}
//                     <div className="sm:col-span-2">
//                       <label className={labelClass}>
//                         Project Details <span className="text-cyan-400">*</span>
//                       </label>

//                       <textarea
//                         required
//                         rows={6}
//                         maxLength={1000}
//                         value={projectForm.message}
//                         onChange={(e) =>
//                           setProjectForm({
//                             ...projectForm,
//                             message: e.target.value,
//                           })
//                         }
//                         placeholder="Tell me about your idea, requirements, features, references, or anything else you'd like to share..."
//                         className="
//                           w-full
//                           resize-none
//                           rounded-xl

//                           border
//                           border-slate-700/80

//                           bg-slate-900/70

//                           px-4
//                           py-3

//                           text-sm
//                           leading-6
//                           text-white

//                           outline-none
//                           transition

//                           placeholder:text-slate-500

//                           focus:border-cyan-400
//                           focus:ring-2
//                           focus:ring-cyan-400/10
//                         "
//                       />

//                       <div
//                         className="
//                           mt-1
//                           text-right
//                           text-xs
//                           text-slate-600
//                         "
//                       >
//                         {projectForm.message.length}
//                         /1000
//                       </div>
//                     </div>

//                     {/* =================================================
//                         FILE UPLOAD
//                     ================================================== */}

//                     <div className="sm:col-span-2">
//                       <div
//                         className="
//                           mb-2
//                           flex
//                           items-center
//                           justify-between
//                           gap-3
//                         "
//                       >
//                         <label className={labelClass}>
//                           Project Document{" "}
//                           <span
//                             className="
//                               text-xs
//                               font-normal
//                               text-slate-500
//                             "
//                           >
//                             (Optional)
//                           </span>
//                         </label>

//                         <span
//                           className="
//                             text-[11px]
//                             text-slate-500
//                           "
//                         >
//                           PDF, DOC, DOCX · Max 50 MB
//                         </span>
//                       </div>

//                       {/* Upload Box */}
//                       <label
//                         htmlFor="project-file"
//                         className={`
//                           group

//                           flex
//                           min-h-[125px]

//                           cursor-pointer

//                           flex-col
//                           items-center
//                           justify-center

//                           rounded-2xl

//                           border
//                           border-dashed

//                           px-5
//                           py-6

//                           text-center

//                           transition

//                           ${
//                             fileError
//                               ? "border-red-400/60 bg-red-400/5"
//                               : "border-slate-700 bg-slate-900/50 hover:border-cyan-400/60 hover:bg-cyan-400/[0.03]"
//                           }
//                         `}
//                       >
//                         <div
//                           className="
//                             flex
//                             h-11
//                             w-11

//                             items-center
//                             justify-center

//                             rounded-xl

//                             bg-cyan-400/10

//                             text-cyan-400

//                             transition

//                             group-hover:bg-cyan-400/15
//                           "
//                         >
//                           <Paperclip size={21} />
//                         </div>

//                         <p
//                           className="
//                             mt-3
//                             text-sm
//                             font-medium
//                             text-slate-200
//                           "
//                         >
//                           Attach your project document
//                         </p>

//                         <p
//                           className="
//                             mt-1
//                             text-xs
//                             text-slate-500
//                           "
//                         >
//                           Click to browse or choose a file
//                         </p>

//                         <p
//                           className="
//                             mt-2
//                             text-[11px]
//                             text-slate-600
//                           "
//                         >
//                           PDF, DOC or DOCX · Maximum 50 MB
//                         </p>

//                         <input
//                           ref={fileInputRef}
//                           id="project-file"
//                           type="file"
//                           className="hidden"
//                           accept="
//                             .pdf,
//                             .doc,
//                             .docx,
//                             application/pdf,
//                             application/msword,
//                             application/vnd.openxmlformats-officedocument.wordprocessingml.document
//                           "
//                           onChange={handleProjectFileChange}
//                         />
//                       </label>

//                       {/* =================================================
//                           FILE ERROR
//                       ================================================== */}

//                       {fileError && (
//                         <motion.div
//                           initial={{
//                             opacity: 0,
//                             y: -5,
//                           }}
//                           animate={{
//                             opacity: 1,
//                             y: 0,
//                           }}
//                           className="
//                             mt-2

//                             flex
//                             items-start
//                             gap-2

//                             rounded-lg

//                             border
//                             border-red-400/20

//                             bg-red-400/5

//                             px-3
//                             py-2.5

//                             text-xs
//                             text-red-400
//                           "
//                         >
//                           <X
//                             size={14}
//                             className="
//                               mt-0.5
//                               shrink-0
//                             "
//                           />

//                           <span>{fileError}</span>
//                         </motion.div>
//                       )}

//                       {/* =================================================
//                           SELECTED FILE
//                       ================================================== */}

//                       {projectFile && !fileError && (
//                         <motion.div
//                           initial={{
//                             opacity: 0,
//                             y: -5,
//                           }}
//                           animate={{
//                             opacity: 1,
//                             y: 0,
//                           }}
//                           className="
//                               mt-3

//                               flex
//                               items-center
//                               justify-between
//                               gap-3

//                               rounded-xl

//                               border
//                               border-cyan-400/20

//                               bg-cyan-400/[0.05]

//                               px-3
//                               py-3
//                             "
//                         >
//                           <div
//                             className="
//                                 flex
//                                 min-w-0
//                                 items-center
//                                 gap-3
//                               "
//                           >
//                             <div
//                               className="
//                                   flex
//                                   h-10
//                                   w-10
//                                   shrink-0

//                                   items-center
//                                   justify-center

//                                   rounded-lg

//                                   bg-cyan-400/10

//                                   text-cyan-400
//                                 "
//                             >
//                               <FileText size={19} />
//                             </div>

//                             <div
//                               className="
//                                   min-w-0
//                                 "
//                             >
//                               <p
//                                 className="
//                                     truncate
//                                     text-sm
//                                     font-medium
//                                     text-slate-200
//                                   "
//                               >
//                                 {projectFile.name}
//                               </p>

//                               <p
//                                 className="
//                                     mt-0.5
//                                     text-xs
//                                     text-slate-500
//                                   "
//                               >
//                                 {(projectFile.size / (1024 * 1024)).toFixed(2)}{" "}
//                                 MB
//                               </p>
//                             </div>
//                           </div>

//                           <button
//                             type="button"
//                             onClick={removeProjectFile}
//                             aria-label="Remove attached file"
//                             className="
//                                 flex
//                                 h-8
//                                 w-8
//                                 shrink-0

//                                 items-center
//                                 justify-center

//                                 rounded-lg

//                                 text-slate-500

//                                 transition

//                                 hover:bg-red-400/10
//                                 hover:text-red-400
//                               "
//                           >
//                             <Trash2 size={16} />
//                           </button>
//                         </motion.div>
//                       )}
//                     </div>

//                     {/* =================================================
//                         PROJECT SUBMIT
//                     ================================================== */}

//                     <div className="sm:col-span-2">
//                       <button
//                         type="submit"
//                         disabled={!!fileError}
//                         className="
//                           group

//                           flex
//                           w-full

//                           items-center
//                           justify-center
//                           gap-2

//                           rounded-xl

//                           bg-gradient-to-r
//                           from-cyan-400
//                           to-blue-500

//                           px-6
//                           py-3.5

//                           text-sm
//                           font-bold
//                           text-slate-950

//                           shadow-lg
//                           shadow-cyan-500/10

//                           transition

//                           hover:scale-[1.01]

//                           disabled:cursor-not-allowed
//                           disabled:opacity-50
//                           disabled:hover:scale-100
//                         "
//                       >
//                         <Send size={17} />
//                         Send Project Request
//                         <ArrowRight
//                           size={16}
//                           className="
//                             transition

//                             group-hover:translate-x-1
//                           "
//                         />
//                       </button>
//                     </div>

//                     <PrivacyNote />
//                   </form>
//                 </motion.div>
//               )}

//               {/* =================================================
//                   SUCCESS
//               ================================================== */}

//               {step === "success" && (
//                 <motion.div
//                   key="success"
//                   initial={{
//                     opacity: 0,
//                     scale: 0.97,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     scale: 1,
//                   }}
//                   className="
//                     px-5
//                     py-12
//                     text-center

//                     sm:px-10
//                     sm:py-16
//                   "
//                 >
//                   {/* Success Icon */}
//                   <div
//                     className="
//                       mx-auto

//                       flex
//                       h-20
//                       w-20

//                       items-center
//                       justify-center

//                       rounded-full

//                       border
//                       border-cyan-400/30

//                       bg-cyan-400/10

//                       text-cyan-400
//                     "
//                   >
//                     <Check size={38} strokeWidth={2.5} />
//                   </div>

//                   <h3
//                     className="
//                       mt-7
//                       text-2xl
//                       font-bold
//                       text-white

//                       sm:text-3xl
//                     "
//                   >
//                     {submittedType === "company"
//                       ? "Opportunity Details Sent!"
//                       : "Project Request Sent!"}
//                   </h3>

//                   <p
//                     className="
//                       mx-auto
//                       mt-3
//                       max-w-md

//                       text-sm
//                       leading-6
//                       text-slate-400
//                     "
//                   >
//                     Thanks for reaching out! I'll review your information and
//                     get back to you as soon as possible.
//                   </p>

//                   {/* Next Steps */}
//                   <div
//                     className="
//                       mx-auto
//                       mt-8
//                       max-w-md

//                       rounded-2xl

//                       border
//                       border-cyan-400/20

//                       bg-slate-900/70

//                       p-5

//                       text-left
//                     "
//                   >
//                     <div
//                       className="
//                         flex
//                         gap-3
//                       "
//                     >
//                       <div
//                         className="
//                           flex
//                           h-10
//                           w-10
//                           shrink-0

//                           items-center
//                           justify-center

//                           rounded-lg

//                           bg-cyan-400/10

//                           text-cyan-400
//                         "
//                       >
//                         <Mail size={19} />
//                       </div>

//                       <div>
//                         <h4
//                           className="
//                             text-sm
//                             font-semibold
//                             text-white
//                           "
//                         >
//                           What happens next?
//                         </h4>

//                         <div
//                           className="
//                             mt-3
//                             space-y-2

//                             text-xs
//                             leading-5
//                             text-slate-400
//                           "
//                         >
//                           <p>01. I'll review your submission</p>

//                           <p>02. I'll get back to you via email</p>

//                           <p>03. We'll discuss the next steps</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Back */}
//                   <button
//                     type="button"
//                     onClick={handleClose}
//                     className="mt-8 inline-flex items-center gap rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
//                   >
//                     <Home size={16} />
//                     Back to Portfolio
//                   </button>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </motion.div>
//       </div>
//     </AnimatePresence>
//   );
// }

// /* =========================================================
//    COMPLETE HIRE ME COMPONENT

//    Put this component outside your Routes so it
//    appears on every page.
// ========================================================= */

// export function HireMe() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <FloatingHireMeButton onClick={() => setIsOpen(true)} />

//       <HireMeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
//     </>
//   );
// }

// =======================================

import React, { useState } from "react";
import FloatingHireMeButton from "./FloatingHireMeButton";
import HireMeModal from "./HireMeModal";

const HireMe = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FloatingHireMeButton onClick={() => setIsOpen(true)} />

      <HireMeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default HireMe;
