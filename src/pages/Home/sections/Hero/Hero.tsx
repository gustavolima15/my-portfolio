import { styled, Grid, Container} from "@mui/material"
import Avatar from "../../../../assets/image/avatar.jpeg"

const Hero = () => {
  
  
  
  const StyledHero = styled("div")(() => ({
     backgroundColor: "black"
  }))

  const StyledImg = styled("img")(() => ({
    width: "30%",
    borderRadius: "50%"
  }))

    
  
  return (
      <>
        <StyledHero>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <StyledImg src={Avatar} />
              </Grid>
              <Grid item xs={8}>
                xs=4
              </Grid>
            </Grid>
          </Container>
        </StyledHero>
      </>
    )
  }
  export default Hero