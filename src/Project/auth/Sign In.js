// في ملف Sign_In.js أو LoginPage.js

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./fairbaseAuth"; // نستورد 'auth' من ملف الإعداد نتاعنا

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // الدالة نتاع تسجيل الدخول
  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // هذه هي الدالة تاع Firebase اللي تدير تسجيل الدخول
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("تم تسجيل الدخول بنجاح. المستخدم هو:", userCredential.user);
      // بعد تسجيل الدخول، المستخدم الآن هو (Authenticated)، وتقدر توجهه لصفحة المكتبة الرئيسية.
    } catch (firebaseError) {
      // في حالة وجود خطأ (مثلاً: كلمة سر خاطئة، حساب غير موجود، إلخ.)
      console.error("خطأ في تسجيل الدخول:", firebaseError.message);
      setError("خطأ في الإيميل أو كلمة السر. يرجى التأكد والمحاولة مرة أخرى.");
    }
  };

  return (
    <div>
      <h2>تسجيل الدخول</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="الإيميل"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="كلمة السر"
          required
        />
        <button type="submit">دخول</button>
      </form>

      {/* عرض رسالة الخطأ */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default SignIn;
