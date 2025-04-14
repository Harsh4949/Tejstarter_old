import { getDatabase, ref, get, set, update, remove } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";

// Your Firebase configuration (as you provided)
const firebaseConfig = {
  apiKey: "AIzaSyB_J53IJwR3z2IXmufvkLWLsNpUtcY7-3E",
  authDomain: "tejstarter-afd20.firebaseapp.com",
  projectId: "tejstarter-afd20",
  storageBucket: "tejstarter-afd20.firebasestorage.app",
  messagingSenderId: "879237123522",
  appId: "1:879237123522:web:2a6ff1c2a7f7e6c1b99a5b",
  measurementId: "G-58ESH0LEPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
console.log("Firebase Config Opened...");

export function storeUserToDatabase(uniqueUserId, college, dob, educationLevel, email, fullName, majorField, phone, subLevel) {
  console.log("Firebase loaded");
  set(ref(db, uniqueUserId), {
    college: college,
    dob: dob,
    educationLevel: educationLevel,
    email: email,
    fullName: fullName,
    majorField: majorField,
    phone: phone,
    subLevel: subLevel
  })
  .then(() => {
    console.log("✅ Data saved for user:", uniqueUserId);
    window.location.href = "registration_successful.html";
  })
  .catch((error) => {
    console.error("❌ Error saving data:", error);
  });
}


export async function exportToExcel() {
  const predefinedPassword = "Tejas@2025";
  const userPassword = prompt("Enter password to export data:");

  if (userPassword !== predefinedPassword) {
    alert("Incorrect password!");
    return;
  }

  try {
    const dbRef = ref(db, '/');
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      const data = snapshot.val();

      const rows = Object.entries(data).map(([id, user]) => ({
        id: id || "",
        name: user.fullName || "",
        dob: user.dob || "",
        phone_number: user.phone || "",
        email: user.email || "",
        educationlevel: user.educationLevel || "",
        sublevel: user.subLevel || "",
        majorfield: user.majorField || "",
        collegename: user.college || ""
      }));

      const worksheet = XLSX.utils.json_to_sheet(rows);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "TEJSTARTER_Users");

      XLSX.writeFile(workbook, "TEJSTARTER_DATA.xlsx");
    } else {
      alert("No data found!");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("Error fetching data.");
  }
}