"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { log } from "console";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.clone().json();
      console.log("Backend response:", data);

      setLoading(false);

      if (res.ok) {
        router.refresh();
        console.log(data.role);

        // ⭐ Role-based redirect
        if (data.role === "ADMIN") {
          router.push("/admin");
        }
        if (data.role === "USER") {
          router.push("/");
        }
      } else {
        alert("Invalid credentials");
      }
    } catch {
      setLoading(false);
      alert("Login failed");
    }
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow w-96 space-y-5">
      {/* Title */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold"> Login</h2>
        <p className="text-sm text-gray-500">
          Welcome back! Please login to continue.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="flex justify-between text-sm text-gray-500">
          <Link href="/register" className="hover:text-purple-600">
            Create Account
          </Link>

          <Link href="/forgot-password" className="hover:text-purple-600">
            Forgot Password?
          </Link>
        </div>

        <button
          disabled={loading}
          className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
