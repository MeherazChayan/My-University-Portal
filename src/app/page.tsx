"use client";
import "./profile-menu.css";
import {useState} from "react";
import {Bell, Bot, ChevronDown, ChevronLeft, ChevronRight, Expand, Search, Settings2} from "lucide-react";
import PortalAssistant from "@/components/PortalAssistant";

const nav=["Advising","Class and Exam Schedule","Scholarship & Waiver","Course Drop Application","Semester Drop Application","Grade Sheet","Probation","Attendance","Payslip","Service Request"];
const initials=["A","C","S","C","S","G","P","A","P","S"];
const days=Array.from({length:35},(_,i)=>i<3?28+i:i-2);

export default function Home(){const[assistant,setAssistant]=useState(false);const[profile,setProfile]=useState(false);return <div className="portal-shell">
  <aside className="lifecycle-sidebar">
    <div className="brand-row"><div className="uni-seal"><b>MY</b><small>UNIVERSITY</small></div><div><strong>Student Lifecycle</strong><strong>Management</strong></div></div>
    <nav aria-label="Student services">{nav.map((item,i)=>{const routes:Record<string,string>={"Advising":"/advising","Class and Exam Schedule":"/schedule","Scholarship & Waiver":"/scholarships","Course Drop Application":"/services/course-drop","Semester Drop Application":"/services/semester-drop","Grade Sheet":"/services/grade-sheet","Probation":"/services/probation","Attendance":"/services/attendance","Payslip":"/services/payslip","Service Request":"/services/requests"};return <a href={routes[item]} className="side-link" key={item}><span>{initials[i]}</span><b>{item}</b>{[0,2,9].includes(i)&&<ChevronDown size={15}/>}</a>})}</nav>
  </aside>
  <div className="portal-main">
    <header className="topbar"><button className="collapse" aria-label="Collapse navigation"><ChevronLeft/></button><span className="student-label">Student</span><div className="top-actions"><label className="search"><Search size={21}/><input aria-label="Search" placeholder="Search"/><kbd>CTRL</kbd><kbd>K</kbd></label><Expand/><div className="notification"><Bell/><span>2</span></div><div className="profile-wrap"><button className="avatar" onClick={()=>setProfile(v=>!v)} aria-expanded={profile} aria-label="Open Bruce Wayne profile">BW</button>{profile&&<><button className="profile-dismiss" aria-label="Close profile" onClick={()=>setProfile(false)}/><section className="profile-menu"><div className="profile-menu-head"><div className="profile-large">BW</div><div><strong>Bruce Wayne</strong><span>Student ID: MU20260017</span></div></div><dl><div><dt>Semester</dt><dd>8th Semester</dd></div><div><dt>Programme</dt><dd>CS</dd></div><div><dt>Department</dt><dd>Department of CSE</dd></div></dl><a href="/services/grade-sheet">View academic profile</a></section></>}</div></div></header>
    <div className="titlebar"><h1>Dashboard</h1><button><Settings2 size={18}/> Configure Dashboard <ChevronDown size={17}/></button></div>
    <main className="workspace">
      <section className="activity-panel panel"><h2>Activity</h2><div className="empty-activity"><div className="clipboards"><div/><div/></div><p>No active tasks found!</p></div></section>
      <section className="calendar-panel panel"><h2>Student Calendar</h2><div className="calendar-tools"><button><ChevronLeft/></button><button><ChevronRight/></button><strong>July<br/>2026</strong><button className="month">Month</button><button className="today">Today</button></div><div className="calendar"><div className="week">{["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(x=><b key={x}>{x}</b>)}</div><div className="dates">{days.map((d,i)=><span key={i} className={i<3?"muted":d===11?"selected":""}>{d}</span>)}</div></div></section>
    </main>
  </div>
  <button className="ai-fab" onClick={()=>setAssistant(true)} aria-label="Open AI Student Agent"><Bot size={27}/><span>AI Agent</span></button>
  {assistant&&<PortalAssistant onClose={()=>setAssistant(false)}/>} 
</div>}
