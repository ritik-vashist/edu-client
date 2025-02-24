import { useState } from "react";
import { useHistory } from "react-router-dom";
import Description from "../../components/courseDetails/description";
import Hero from "../../components/courseDetails/Hero";
import CardContainer from "../../components/cardContainer/cardContainer";
import SimpleCard from "../../components/simpleCard/simpleCard";
import { makeStyles } from "@material-ui/core/styles";
import courseDetail from "../../data/courseDetail.json";
import Perks from "../../components/courseDetails/perks";
import Schedule from "../../components/courseDetails/schedule";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Typography } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
const useStyles = makeStyles((theme) => ({
  navigation: {
    widht: "100%",
    height: "100px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 10px",
    backgroundColor: "white" /* For browsers that do not support gradients */,
    backgroundImage: "linear-gradient(#4C0098, white)",
  },
  courseDetail: {
    padding: "0 15px",
    textAlign: "start",
  },
  title: {
    fontWeight: "700",
    margin: "10px",
  },
  subTitle: {
    margin: "0 10px",
    padding: "0 15px",
  },
  svg: {
    color: "white",
    cursor: "pointer",
  },
  backtotop: {
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "24px",
  },
}));

const heroData = courseDetail[0].heroSection;
const descriptionData = courseDetail[0].descriptionSection;
const perksData = courseDetail[0].perksSection;
const coursesData = courseDetail[0].coursesSection;

function CourseDetail(props) {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className={classes.navigation}>
        <ArrowBackIcon className={classes.svg} onClick={() => history.goBack()} />
        <MoreVertIcon className={classes.svg} onClick={handleClick} />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Cart</MenuItem>
        </Menu>
      </div>
      <div className={classes.courseDetail}>
        <Hero
          title={heroData.title}
          description={heroData.description}
          startDate={heroData.startDate}
          duration={heroData.duration}
          languages={heroData.languages}
          thumbnail={heroData.thumbnail}
          videoUrl={heroData.videoUrl}
          price={heroData.price}
        />
        <Description description={descriptionData.description} mentors={descriptionData.mentors} />
        <Perks
          perks={perksData.perks}
          afterCourse={perksData.afterCourse}
          prerequisites={perksData.prerequisites}
        />
        <Schedule />
        <Typography className={classes.title} variant="subtitle2" color="primary">
          Beginner Courses
        </Typography>
      </div>
      <Typography className={classes.subTitle} variant="h2" component="h2">
        Learn something New
      </Typography>
      <CardContainer>
        {coursesData.map((course, index) => (
          <SimpleCard
            key={index}
            image={course.image}
            title={course.title}
            subTitle={course.subTitle}
            detail={course.detail}
            price={course.price}
            showIcon={true}
          />
        ))}
      </CardContainer>
      <Typography className={classes.subTitle} variant="h2" component="h2">
        Top Picks
      </Typography>
      <CardContainer>
        {coursesData.map((course, index) => (
          <SimpleCard
            key={index}
            image={course.image}
            title={course.title}
            subTitle={course.subTitle}
            detail={course.detail}
            price={course.price}
            showIcon={false}
          />
        ))}
      </CardContainer>
    </>
  );
}

export default CourseDetail;
