import React, { useState } from "react";
import AuthTabs from "./AuthTabs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white rounded-lg overflow-hidden">
      <AuthTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "login" ? <LoginForm /> : <RegisterForm />}
    </div>
  );
}
