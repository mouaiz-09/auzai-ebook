import Button from '@mui/material/Button';
import FuzzyText from '../Animation/Text/Fuzzy';
import "./Styles/Component.css"
import { Link } from 'react-router-dom';
export default function Error(params) {
    return(
        <div className="error">
          
                <FuzzyText 
                   baseIntensity={0.2} 
                   hoverIntensity 
                   enableHover={true}
                 >
                      404 !!
                 </FuzzyText>

                <FuzzyText 
                   baseIntensity={0.2} 
                   hoverIntensity 
                   enableHover={true}
                    color='rgb(200, 32, 10)'
                 >
                   Not Found . 
                 </FuzzyText>

                 <div
                   style={{
                   position:"relative",
                   top:"80px"
                  }}>



                  <Button  variant='contained' color='warning' style={{fontWeight:"900"  , color:"whitesmoke"}} > 
                    <Link to="/" >
                     return Home
                    </Link>
                  </Button>
                 </div>
        </div>
    )
    
}