import React, { useEffect, useMemo, useState } from "react";
import { Eye, EyeOff, LogIn, UserPlus, } from "lucide-react";
import cakeImg from "../assets/images/logAndRegister.png";

export default function AuthPage({ homePath = "/" }) {
  const [activeTab, setActiveTab] = useState("login"); 
  const [notice, setNotice] = useState("");

  const STORAGE_KEY = "_auth_demo_users";
  const CURRENT_USER_KEY = "_auth_demo_current_user";

  const getUsers = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  };
  const setUsers = (users) => localStorage.setItem(STORAGE_KEY, JSON.stringify(users));

  const [reg, setReg] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    agree: false,
  });
  const [regShowPw, setRegShowPw] = useState(false);
  const [regErrors, setRegErrors] = useState({});

  // ---- LOGIN FORM STATE ----
  const [log, setLog] = useState({ email: "", password: "" });
  const [logShowPw, setLogShowPw] = useState(false);
  const [logErrors, setLogErrors] = useState({});

  // Basic validators
  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const validateRegister = () => {
    const e = {};
    if (!reg.email) e.email = "E-mail is required";
    else if (!isEmail(reg.email)) e.email = "Enter a valid e-mail";

    if (!reg.password) e.password = "Password is required";
    else if (reg.password.length < 6) e.password = "Minimum 6 characters";

    if (!reg.firstName) e.firstName = "First name is required";
    if (!reg.lastName) e.lastName = "Last name is required";

    if (!reg.agree) e.agree = "You must accept Terms and Privacy Policy";

    setRegErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateLogin = () => {
    const e = {};
    if (!log.email) e.email = "E-mail is required";
    else if (!isEmail(log.email)) e.email = "Enter a valid e-mail";
    if (!log.password) e.password = "Password is required";
    setLogErrors(e);
    return Object.keys(e).length === 0;
  };

  // Notifications helper
  const showNotice = (msg, timeout = 3000) => {
    setNotice(msg);
    if (timeout) setTimeout(() => setNotice(""), timeout);
  };

  // Handle Register
  const onRegister = (e) => {
    e.preventDefault();
    if (!validateRegister()) return;
    const users = getUsers();
    const exists = users.some((u) => u.email.toLowerCase() === reg.email.toLowerCase());
    if (exists) {
      showNotice("An account with this e-mail already exists. Please login.");
      setActiveTab("login");
      setLog((l) => ({ ...l, email: reg.email }));
      return;
    }
    const newUser = {
      email: reg.email.trim(),
      password: reg.password, 
      firstName: reg.firstName.trim(),
      lastName: reg.lastName.trim(),
      createdAt: Date.now(),
    };
    users.push(newUser);
    setUsers(users);

    // Reset form + switch to login
    setReg({ email: "", password: "", firstName: "", lastName: "", agree: false });
    setRegShowPw(false);
    setActiveTab("login");
    setLog({ email: newUser.email, password: "" });
    showNotice("Registration successful! Please login.");
  };

  // Handle Login
  const onLogin = (e) => {
    e.preventDefault();
    if (!validateLogin()) return;
    const users = getUsers();
    const match = users.find(
      (u) => u.email.toLowerCase() === log.email.toLowerCase() && u.password === log.password
    );
    if (!match) {
      // If email exists but wrong password
      const emailExists = users.some((u) => u.email.toLowerCase() === log.email.toLowerCase());
      if (!emailExists) {
        setActiveTab("register");
        showNotice("No account found. Please register.");
      } else {
        setLogErrors({ password: "Incorrect password" });
      }
      return;
    }

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(match));
    showNotice("Login successful! Redirecting...");
    setTimeout(() => {
      // redirect to provided home path
      window.location.assign(homePath);
    }, 700);
  };

  // Visual helpers
  const TabButton = ({ id, icon: Icon, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`${
        activeTab === id
          ? "bg-orange-500 text-white"
          : "text-orange-600 hover:bg-orange-50"
      } relative flex items-center gap-2 font-semibold tracking-wide px-6 py-4 rounded-r-2xl rounded-l-2xl transition-colors`}
      aria-pressed={activeTab === id}
    >
      <Icon className="w-5 h-5" />
      <span className="text-xl">{label}</span>
    </button>
  );

  // Fancy angled ribbon header
  const Header = () => (
  <div className="w-full flex border border-orange-300 rounded-md overflow-hidden">
    {/* Login tab - left side */}
    <button
      onClick={() => setActiveTab("login")}
      className={`relative flex items-center justify-center gap-2 w-1/2 px-6 py-4 font-bold text-lg transition-colors
        ${activeTab === "login"
          ? "bg-orange-50 text-orange-600"
          : "bg-orange-50 text-orange-600 hover:bg-orange-100"}`}
    >
      <LogIn className="w-5 h-5" />
      Login
    </button>

    {/* Register tab - right side */}
    <button
      onClick={() => setActiveTab("register")}
      className={`relative flex items-center justify-center gap-2 w-1/2 px-6 py-4 font-bold text-lg transition-colors
        ${activeTab === "register"
          ? "bg-orange-500 text-white"
          : "bg-orange-500 text-white hover:bg-orange-400"}`}
    >
      {/* Angled divider */}
      <span className="absolute left-0 top-0 bottom-0 w-6 bg-orange-500 before:content-[''] before:absolute before:-left-6 before:top-0 before:bottom-0 before:w-6 before:bg-orange-50 before:skew-x-[30deg]" />
      <UserPlus className="w-5 h-5" />
      Register
    </button>
  </div>
);


  // Input wrapper
  const Field = ({ label, error, children }) => (
    <label className="block w-full">
      <div className="text-gray-800 font-semibold mb-2">{label}</div>
      {children}
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </label>
  );

  // Shared styles
  const inputBase =
    "w-full rounded-xl border-2 focus:outline-none focus:ring-0 px-4 py-4 placeholder-gray-400 transition shadow-sm bg-white/90";

  // Decorative dessert image card (rotated gradient frame)
  const DessertCard = ({ position = "right" }) => (
    <div
      className={`relative max-w-md mx-auto ${
        position === "right" ? "order-2 md:order-2" : "order-1"
      }`}
    >
      <div className=" rounded-[32px] p-6 rotate-6 shadow-xl">
  <div className="rounded-2xl overflow-hidden">
    <img
      src={cakeImg}
      alt="Chocolate cake"
      className="w-full h-72 object-cover"
      loading="lazy"
    />
  </div>
</div>

    </div>
  );

  return (
    <div className="min-h-screen w-full bg-orange-50 flex items-start md:items-center justify-center py-10">
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Header Tabs */}
        <Header />

        <div className="mt-10 grid md:grid-cols-2 gap-12 items-start">
          {/* Image switches sides based on tab for parity with screenshots */}
          {activeTab === "login" ? (
            <>
              {/* Login form left, image right */}
              <form
                onSubmit={onLogin}
                className="order-1 bg-white/70 backdrop-blur-sm border border-orange-200 rounded-3xl p-8 shadow-sm"
              >
                <div className="text-2xl font-bold mb-6">Login</div>
                <Field label="E-Mail" error={logErrors.email}>
                  <div className="relative">
                    <input
                      type="email"
                      className={`${inputBase} ${
                        logErrors.email ? "border-red-500" : "border-orange-200 focus:border-orange-500"
                      }`}
                      placeholder="Enter Your E-Mail"
                      value={log.email}
                      onChange={(e) => setLog(prev => ({ ...prev, email: e.target.value }))}

                      required
                    />
                    
                  </div>
                </Field>
                <div className="mt-5" />
                <Field label="Password" error={logErrors.password}>
                  <div className="relative">
                    <input
                      type={logShowPw ? "text" : "password"}
                      className={`${inputBase} ${
                        logErrors.password ? "border-red-500" : "border-orange-200 focus:border-orange-500"
                      } pr-12`}
                      placeholder="Enter Your Password"
                      value={log.password}
                      onChange={(e) => setLog(prev => ({ ...prev, password: e.target.value }))}

                      required
                    />
                    <button
                      type="button"
                      onClick={() => setLogShowPw((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-gray-100"
                      aria-label={logShowPw ? "Hide password" : "Show password"}
                    >
                      {logShowPw ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </Field>

                <button
                  type="submit"
                  className="mt-8 w-full bg-yellow-400 hover:bg-yellow-300 text-white font-extrabold text-2xl py-4 rounded-2xl shadow transition"
                >
                  Login
                </button>

                <div className="mt-6 flex items-center gap-2 text-sm">
                  <span className="text-gray-700">Don’t Have An Account?</span>
                  <button
                    type="button"
                    onClick={() => setActiveTab("register")}
                    className="text-orange-600 font-semibold hover:underline"
                  >
                    Register
                  </button>
                </div>
              </form>

              <DessertCard position="right" />
            </>
          ) : (
            <>
              {/* Register image left */}
              <DessertCard position="left" />

              <form
                onSubmit={onRegister}
                className="order-2 bg-white/70 backdrop-blur-sm border border-orange-200 rounded-3xl p-8 shadow-sm"
              >
                <div className="text-2xl font-bold mb-6">Register</div>
                <Field label="E-Mail" error={regErrors.email}>
                  <div className="relative">
                    <input
                      type="email"
                      className={`${inputBase} ${
                        regErrors.email ? "border-red-500" : "border-orange-200 focus:border-orange-500"
                      }`}
                      placeholder="Enter Your E-Mail"
                      value={reg.email}
                     onChange={(e) => setReg(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                </Field>
                <div className="mt-5" />
                <Field label="Password" error={regErrors.password}>
                  <div className="relative">
                    <input
                      type={regShowPw ? "text" : "password"}
                      className={`${inputBase} ${
                        regErrors.password ? "border-red-500" : "border-orange-200 focus:border-orange-500"
                      } pr-12`}
                      placeholder="Enter Your Password"
                      value={reg.password}
                      onChange={(e) => setReg(prev => ({ ...prev, password: e.target.value }))}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setRegShowPw((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-gray-100"
                      aria-label={regShowPw ? "Hide password" : "Show password"}
                    >
                      {regShowPw ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </Field>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="First Name" error={regErrors.firstName}>
                    <div className="relative">
                      <input
                        type="text"
                        className={`${inputBase} ${
                          regErrors.firstName
                            ? "border-red-500"
                            : "border-orange-200 focus:border-orange-500"
                        }`}
                        placeholder="First Name"
                        value={reg.firstName}
                        onChange={(e) => setReg(prev => ({ ...prev, firstName: e.target.value }))}

                        required
                      />
                    </div>
                  </Field>
                  <Field label="Last Name" error={regErrors.lastName}>
                    <div className="relative">
                      <input
                        type="text"
                        className={`${inputBase} ${
                          regErrors.lastName
                            ? "border-red-500"
                            : "border-orange-200 focus:border-orange-500"
                        }`}
                        placeholder="Last Name"
                        value={reg.lastName}
                        onChange={(e) => setReg(prev => ({ ...prev, lastName: e.target.value }))}

                        required
                      />
                    </div>
                  </Field>
                </div>

                <div className="mt-6 flex items-start gap-3">
                  <input
                    id="agree"
                    type="checkbox"
                    className="mt-1 w-5 h-5 rounded border-2 border-orange-300 text-orange-600 focus:ring-0"
                    checked={reg.agree}
                   onChange={(e) => setReg(prev => ({ ...prev, agree: e.target.checked }))}

                    required
                  />
                  <label htmlFor="agree" className="text-gray-800">
                    I have read and agree to the <span className="text-orange-600 font-semibold">Terms</span> and
                    <span className="text-orange-600 font-semibold"> Privacy Policy</span>
                    {regErrors.agree && (
                      <span className="block text-red-600 text-sm mt-1">{regErrors.agree}</span>
                    )}
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-8 w-full bg-yellow-400 hover:bg-yellow-300 text-white font-extrabold text-2xl py-4 rounded-2xl shadow transition"
                >
                  Register
                </button>
              </form>
            </>
          )}
        </div>

        {/* Inline toast/notice */}
        {notice && (
          <div className="mt-8 mx-auto max-w-2xl bg-white border border-orange-200 text-orange-700 rounded-xl px-4 py-3 shadow">
            {notice}
          </div>
        )}
      </div>
    </div>
  );
}