import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import CardMedia from '@mui/material/CardMedia';
import Logo from "../Photo/books.png"
export default function CardVariants({Src , Titel}) {
    return (
   
        
        <div    className='CardCategory' variant="soft"  >
          <CardMedia style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}>
            <img  style={{
              width:"100px"
            }
            }  src={Src} alt='Books'></img>
          </CardMedia>
        <CardContent >
          <h1  className='CardCategoryH1'  level="title-lg">{Titel}</h1>
        
        </CardContent>
       
      </div>
      ) }
      