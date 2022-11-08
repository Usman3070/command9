import { makeStyles } from "@material-ui/core/styles";
import bg from "./assets/images/bg.png";
const useStyles = makeStyles((theme) => ({
  backgroundIMG: {
    backgroundImage: `url(${bg})`,
    height: "100%",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    // backgroundColor: theme.palette.mode === "#761275" ? "#761275" : "#000618",
    // ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
export default useStyles;

{
  /* <CardMedia
                image='/images/gridVector.png'
                sx={{
                  height: "351.61px",
                  width: "263px",
                  "&:hover": {
                    backgroundColor: "purple",
                  },
                }}
              /> */
}
