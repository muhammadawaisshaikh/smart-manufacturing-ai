import { Metadata } from "next";
import LandingLayout from "@/components/Layouts/LandingLayout";
import LandingPage from "@/components/Landing/Landing";

export const metadata: Metadata = {
  title: "Smart Manufacturing",
  description:
    "Revolutionizing industry through data-driven decisions, AI-powered analytics, and relentless innovation for unparalleled efficiency and quality",
};

export default function Home() {
  return (
    <LandingLayout>
      <LandingPage />
    </LandingLayout>
  );
}
