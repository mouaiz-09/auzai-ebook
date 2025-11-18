// في ملف Sign_Up.js أو RegistrationPage.js

import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./fairbaseAuth"; // نستورد 'auth' من ملف الإعداد نتاعنا

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // الدالة نتاع التسجيل
  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null); // نمحي الأخطاء السابقة
    setSuccess(false); // نمحي رسالة النجاح

    try {
      // هذه هي الدالة تاع Firebase اللي تدير التسجيل
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("تم تسجيل الحساب بنجاح:", userCredential.user);
      setSuccess(true);

      // هنا تقدر تزيد تدير:
      // 1. توجيه (Redirection) المستخدم لصفحة أخرى.
      // 2. أو إضافة بيانات أولية لهذا المستخدم في Firestore (هذه الخطوة نديروها من بعد).
    } catch (firebaseError) {
      // في حالة وجود خطأ (مثلاً: إيميل خاطئ، كلمة سر ضعيفة، إلخ.)
      console.error("خطأ في التسجيل:", firebaseError.message);
      setError(
        "حدث خطأ في التسجيل. تأكد من الإيميل وكلمة السر (6 أحرف على الأقل)."
      );
    }
  };

  return (
    <div>
      <h2>إنشاء حساب جديد</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="أدخل الإيميل"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="أدخل كلمة السر (6 أحرف على الأقل)"
          required
        />
        <button type="submit">تسجيل</button>
      </form>

      {/* عرض رسالة الخطأ أو النجاح */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && (
        <p style={{ color: "green" }}>
          تم التسجيل بنجاح! يمكنك الآن تسجيل الدخول.
        </p>
      )}
    </div>
  );
}

export default SignUp;
