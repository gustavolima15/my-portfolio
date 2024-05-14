import { styled, Grid, Container, Typography, Button} from "@mui/material"
import Avatar from "../../../../assets/image/avatar.jpeg"

const Hero = () => {
  
  
  
  const StyledHero = styled("div")(() => ({
     backgroundColor: "black",
     height: "100vh"

  }))

  const StyledImg = styled("img")(() => ({
    width: "100%",
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
                <Typography color="primary" variant="h1" textAlign= "center">Gustavo Lima</Typography>
                <Typography color="primary" variant="h2" textAlign= "center">Desenvolvedor Backend</Typography>
                <Button>Download CV</Button>
                <Button>Contato</Button>
              </Grid>
            </Grid>
          </Container>
        </StyledHero>
      </>
    )
  }
  export default Hero