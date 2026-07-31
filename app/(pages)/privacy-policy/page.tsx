export const dynamic = "force-static";
import React from "react";
import PrivacyPolicySection from "./sections";

export const metadata = {
  title: "Privacy Policy | Sunbeam ABA Therapy",
  description:
    "Read Sunbeam Center INC's Privacy Policy to learn how we collect, use, disclose, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicySection />;
}
