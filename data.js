const students = [
  { id:1, name:"Aarav Sharma", rollNo:"CS2024001", course:"Computer Science", email:"aarav@college.edu", attendance:92,
    marks:[{subject:"Mathematics",code:"MTH101",marks:85,total:100},{subject:"Data Structures",code:"CS201",marks:78,total:100},{subject:"Physics",code:"PHY101",marks:72,total:100}]},
  { id:2, name:"Priya Patel", rollNo:"CS2024002", course:"Computer Science", email:"priya@college.edu", attendance:88,
    marks:[{subject:"Mathematics",code:"MTH101",marks:92,total:100},{subject:"Data Structures",code:"CS201",marks:88,total:100},{subject:"Physics",code:"PHY101",marks:79,total:100}]},
  { id:3, name:"Rohan Gupta", rollNo:"CS2024003", course:"Information Technology", email:"rohan@college.edu", attendance:75,
    marks:[{subject:"Mathematics",code:"MTH101",marks:65,total:100},{subject:"Data Structures",code:"CS201",marks:70,total:100},{subject:"Physics",code:"PHY101",marks:58,total:100}]},
  { id:4, name:"Sneha Reddy", rollNo:"CS2024004", course:"Computer Science", email:"sneha@college.edu", attendance:95,
    marks:[{subject:"Mathematics",code:"MTH101",marks:95,total:100},{subject:"Data Structures",code:"CS201",marks:91,total:100},{subject:"Physics",code:"PHY101",marks:88,total:100}]},
  { id:5, name:"Arjun Singh", rollNo:"CS2024005", course:"Electronics", email:"arjun@college.edu", attendance:82,
    marks:[{subject:"Mathematics",code:"MTH101",marks:74,total:100},{subject:"Data Structures",code:"CS201",marks:68,total:100},{subject:"Physics",code:"PHY101",marks:81,total:100}]},
  { id:6, name:"Kavya Nair", rollNo:"CS2024006", course:"Computer Science", email:"kavya@college.edu", attendance:91,
    marks:[{subject:"Mathematics",code:"MTH101",marks:88,total:100},{subject:"Data Structures",code:"CS201",marks:82,total:100},{subject:"Physics",code:"PHY101",marks:90,total:100}]},
  { id:7, name:"Vikram Joshi", rollNo:"CS2024007", course:"Information Technology", email:"vikram@college.edu", attendance:68,
    marks:[{subject:"Mathematics",code:"MTH101",marks:55,total:100},{subject:"Data Structures",code:"CS201",marks:62,total:100},{subject:"Physics",code:"PHY101",marks:48,total:100}]},
  { id:8, name:"Ananya Mishra", rollNo:"CS2024008", course:"Computer Science", email:"ananya@college.edu", attendance:87,
    marks:[{subject:"Mathematics",code:"MTH101",marks:79,total:100},{subject:"Data Structures",code:"CS201",marks:84,total:100},{subject:"Physics",code:"PHY101",marks:76,total:100}]},
  { id:9, name:"Rahul Verma", rollNo:"CS2024009", course:"Electronics", email:"rahul@college.edu", attendance:79,
    marks:[{subject:"Mathematics",code:"MTH101",marks:71,total:100},{subject:"Data Structures",code:"CS201",marks:66,total:100},{subject:"Physics",code:"PHY101",marks:73,total:100}]},
  { id:10, name:"Diya Kapoor", rollNo:"CS2024010", course:"Computer Science", email:"diya@college.edu", attendance:94,
    marks:[{subject:"Mathematics",code:"MTH101",marks:90,total:100},{subject:"Data Structures",code:"CS201",marks:93,total:100},{subject:"Physics",code:"PHY101",marks:87,total:100}]}
];

function getGrade(avg) {
  if (avg >= 90) return "A+";
  if (avg >= 80) return "A";
  if (avg >= 70) return "B+";
  if (avg >= 60) return "B";
  if (avg >= 50) return "C";
  return "F";
}

function getAvgMarks(s) {
  return Math.round(s.marks.reduce((a, m) => a + m.marks, 0) / s.marks.length);
}

function attendanceBadge(val) {
  if (val >= 85) return 'badge-success';
  if (val >= 75) return 'badge-warning';
  return 'badge-danger';
}

function gradeBadge(g) {
  if (g.startsWith('A')) return 'badge-success';
  if (g === 'B+' || g === 'B') return 'badge-info';
  return 'badge-danger';
}

// Sidebar toggle
function initSidebar() {
  const burger = document.querySelector('.burger');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  if (burger) burger.addEventListener('click', () => { sidebar.classList.add('open'); overlay.classList.add('show'); });
  if (overlay) overlay.addEventListener('click', () => { sidebar.classList.remove('open'); overlay.classList.remove('show'); });
}
document.addEventListener('DOMContentLoaded', initSidebar);
