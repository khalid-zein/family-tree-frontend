import { Link } from "react-router-dom";

function About() {
  return (
    <div className="test">
      <p className="test1">
        مكتب تسجيل أنساب السادة آل باعلوي شرق إفريقيا بدار المدثر - ماليندي
        كينيا
      </p>
      <p className="test2">
        Ofisi ya Usajili wa Nasaba ya Al-Baalawi Mashariki ya Afrika. Dar
        Al-Muddathir - Malindi, Kenya
      </p>
      <p className="test2">
        Genealogy Registration Office of Al-Baalawi East Africa. Dar
        Al-Muddathir - Malindi, Kenya
      </p>
      <Link to="/aboutus"><button>LEARN MORE</button></Link>
    </div>
  );
}

export default About;
