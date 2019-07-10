import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Let's talk about YOU.</h2>
            <h5 className={classes.description}>
              Are you hoping to see a beautiful home in an area of your desires? How long have you been looking? 
              Here we can work to find you the Real Estate of your needs to find all of the best deals and finds on the market.
              Thank you for visiting our website, Please fill out the info below to help me assist you in your search.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Free Chat"
                description="Availibe 24/7, 365 days a week for any task you may need assitance with, while using the world class services of NRT. No Strings Attached!"
                icon={Chat}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Verified Users"
                description="We strive for Excellence, through our rigor of meeting people everyday, we have all earned a place in the heart of our customers. Find out more about us on Yelp!"
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Fingerprint"
                description="Working as hard as we do, we at Coldwell hold a high regard for our reputation and status here in Sarasota County. That is Why we are leading the market in listings for the 2nd year in a row, and are on track to completing our 3rd year!"
                icon={Fingerprint}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
