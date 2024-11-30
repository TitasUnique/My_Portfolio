import React from "react";
import './Personalproj.css';
import 'animate.css'
import Project from "../../components/Projects/Projects"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Images = [
  "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

const Personalproj = () => {

  const handleShare = (link) => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
      });
  };

  const handleCode = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Project text={"PERSONAL"} images={Images} />
      <div className="per-pro-div">
        <Card className="per-pro-cards" sx={{
          maxWidth: 345,
          height: 370,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1)"
          }
        }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://images.pexels.com/photos/5904075/pexels-photo-5904075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "left" }}>
              Portfolio
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "left" }}>
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleShare("https://my-portfolio-neon-nine-10.vercel.app/My_Portfolio")}>Share</Button>
            <Button size="small" onClick={() => handleCode("https://github.com/TitasUnique/My_Portfolio")}>Code</Button>
          </CardActions>
        </Card>

        <Card className="per-pro-cards" sx={{
          maxWidth: 345,
          height: 370,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1)"
          }
        }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://images.pexels.com/photos/7234229/pexels-photo-7234229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "left" }}>
              Movie-Ticket-Booking
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "left" }}>
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleShare("https://movie-ticket-booking-five-tau.vercel.app/")}>Share</Button>
            <Button size="small" onClick={() => handleCode("https://github.com/TitasUnique/movie-ticket-booking")}>Code</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}

export default Personalproj;


