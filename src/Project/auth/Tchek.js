// في ملف App.js

import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase"; // نستورد 'auth'

function Tchek() {
  const [user, setUser] = useState(null); // لحفظ بيانات المستخدم

  useEffect(() => {
    // هذه الدالة تتنفذ مرة واحدة عند تشغيل التطبيق
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // إذا كان فيه مستخدم مسجل الدخول، currentUser يكون فيه البيانات نتاعو
      // إذا ماكانش مسجل الدخول، currentUser يكون يساوي null
      setUser(currentUser);
      console.log("حالة المستخدم تغيرت. المستخدم الحالي:", currentUser);
    });

    // مهم: هذه الدالة توقف الـ Listener عند إغلاق المكون
    return () => unsubscribe();
  }, []);

  // دالة الخروج (Sign Out)
  const handleSignOut = () => {
    auth.signOut(); // دالة بسيطة للخروج
  };

  return (
    <div>
      {/* هنا نتحقق إذا كان المستخدم مسجل الدخول */}
      {user ? (
        // عرض واجهة المستخدم المسجل
        <div>
          <h1>أهلاً بك في مكتبة Auzia، {user.email}!</h1>
          {/* هنا تعرض مكونات المكتبة الخاصة بالكتب */}
          <p>الـ User ID نتاعك هو: {user.uid}</p>
          <button onClick={handleSignOut}>خروج</button>
        </div>
      ) : (
        // عرض واجهة المستخدم غير المسجل (صفحة الدخول والتسجيل)
        <div>
          <SignIn />
          <SignUp />
        </div>
      )}
    </div>
  );
}

export default Tchek;
