"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      setLoading(false);

      if (res.ok) {
        router.push("/login");
      } else {
        alert("Registration failed");
      }
    } catch {
      setLoading(false);
      alert("Error registering user");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow w-96 space-y-5">

        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Create Account</h2>
          <p className="text-sm text-gray-500">
            Join us and start shopping
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border p-3 rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <div className="text-sm text-gray-500 flex justify-between">
            <Link href="/login" className="hover:text-purple-600">
              Already have account?
            </Link>
          </div>

          <button
            disabled={loading}
            className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

        </form>
      </div>
    </div>
  );
}