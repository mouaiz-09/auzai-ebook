import Breadcrumbs from "@mui/joy/Breadcrumbs";

import Typography from "@mui/joy/Typography";
import { Link } from "react-router-dom";

export default function BasicBreadcrumbs({
  breadcrumbs = [
    { value: "الصفحة الرئيسة", link: "/" },
    { value: "الكتب", link: "/books" },
  ],
  BookName = ["bookName" , "/"],
}) {
  return (
    <Breadcrumbs aria-label="breadcrumbs">
      {breadcrumbs.map((item) => (
        <Link key={item} color="neutral" to={item.link}>
          {item.value}
        </Link>
      ))}
       <Link to={BookName[1]} >
       <Typography sx={{ fontWeight: "900" }}>{BookName[0]}</Typography>
       </Link>
    </Breadcrumbs>
  );
}
