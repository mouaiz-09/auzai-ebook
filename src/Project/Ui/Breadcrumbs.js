import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";

export default function BasicBreadcrumbs({
  breadcrumbs = [
    { value: "home", link: "/" },
    { value: "books", link: "/books" },
  ],
  BookName = "bookName",
}) {
  return (
    <Breadcrumbs aria-label="breadcrumbs">
      {breadcrumbs.map((item) => (
        <Link key={item} color="neutral" href={item.link}>
          {item.value}
        </Link>
      ))}
      <Typography sx={{ fontWeight: "900" }}>{BookName}</Typography>
    </Breadcrumbs>
  );
}
