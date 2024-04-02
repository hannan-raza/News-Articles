import React, { useState, useEffect } from "react";
import { fetchHeadlines } from "../../utils/api";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
  CardMedia,
} from "@material-ui/core";

const Home = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headlinesData = await fetchHeadlines();
        setHeadlines(headlinesData);
      } catch (error) {
        console.log("Error fetching headlines:", error);
      }
    };

    fetchData();
  }, []);

  const handleReadMoreClick = (url) => {
    window.open(url, "_blank"); // Open the URL in a new tab
  };

  return (
    <>
      <div>Home</div>
      <Grid container spacing={3}>
        {headlines.map((headline, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              {headline.urlToImage ? (
                <CardMedia
                  component="img"
                  height="200"
                  image={headline.urlToImage}
                  alt="News Image"
                />
              ) : (
                <CardMedia
                  component="img"
                  height="200"
                  image="https://via.placeholder.com/200x200" // Fallback image URL
                  alt="Placeholder"
                />
              )}
              <CardContent style={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h2">
                  {headline.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {headline.description}
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleReadMoreClick(headline.url)}
                >
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
