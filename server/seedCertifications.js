const mongoose = require('mongoose');
require('dotenv').config();

// 1. Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Connected to MongoDB Atlas');
  insertCertifications();
})
.catch(err => console.error('❌ MongoDB connection error:', err));

// 2. Create Schema
const certificationSchema = new mongoose.Schema({
  title: String,
  provider: String,
  link: String
});

const Certification = mongoose.model('Certification', certificationSchema);

// 3. Data to insert
const certifications = [
  { title: "🏆 Hackathon Winner", provider: "Yashwantrao Chavan College, Nagpur", link: "/Hakhathon.jpg" },
  { title: "Intern – Compiler Technology", provider: "Compilers Tech", link: "/internsheep.jpg" },
  { title: "Paper Publication in Industrial Engineering Journal", provider: "IE Journal, UGC Care", link: "/Pepar_Publish.pdf" },
  { title: "National Trade Certificate - ICTSM", provider: "Government of India / ITI", link: "/ITI_certificate.pdf" },
  { title: "Data Structure Using Java", provider: "Aapna College", link: "/DSA_using_Java.pdf" },
  { title: "Frontend Development", provider: "Great Learning", link: "/frontend.jpg" },
  { title: "The Joy of Computing using Python", provider: "NPTEL", link: "/TJOCUP_nptl.pdf" },
  { title: "AI/ML Training", provider: "EduSkill", link: "/AI-ML_EduSkill.pdf" },
  { title: "Android Developer Training", provider: "EduSkill", link: "/Android-Developer_EduSkill.pdf" },
  { title: "Google Developer Group Participation", provider: "Google Developer Groups", link: "/Google_Devloper.pdf" },
  { title: "MSCIT", provider: "Government of Maharashtra", link: "/MSCIT.jpeg" }
];

// 4. Insert Function
async function insertCertifications() {
  try {
    await Certification.insertMany(certifications);
    console.log('✅ Certifications inserted successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('❌ Error inserting certifications:', error);
    mongoose.connection.close();
  }
}
