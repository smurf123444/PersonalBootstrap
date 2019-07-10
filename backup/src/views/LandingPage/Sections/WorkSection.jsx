import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import axios from 'axios';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
    }
  }
 ;

  handleFormSubmit( event ) {
    event.preventDefault();
    const API_PATH = 'localhost:3000/api/regi.php';
   
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        })
      })
      .catch(error => this.setState({ error: error.message }));
  }

  render() {
    
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Excited to Help,</h2>
            <h4 className={classes.description}>
              Let me know how to get a hold of you!
              <p>Thank you for visiting :)
              - Christopher Manning</p>
            </h4>
            </GridItem>
            </GridContainer>
    <div>
    <p>Contact Me</p>
    <div>
    <form action="/action_page.php">
    <label>First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." 
     value={this.state.fname}
     onChange={e => this.setState({ fname: e.target.value })}/>
    <label>Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." 
    value={this.state.lname}
    onChange={e => this.setState({ lname: e.target.value })}/>


    <label>Email</label>
    <input type="email" id="email" name="email" placeholder="Your email" 
    value={this.state.email}
    onChange={e => this.setState({ email: e.target.value })}/>


    <label>Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.."
     onChange={e => this.setState({ message: e.target.value })}
     value={this.state.message}></textarea>
    <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
    </form>
      </div>
      </div>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
