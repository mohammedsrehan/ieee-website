import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
},
image__div: {
    backgroundColor: '#1f79ac',
 },
image: {
    width: '100%',
    height: '300px',
    backgroundSize: 'contain',
},
speakerDetails: {
    borderLeft: '4px solid #c21430',
    padding: '3px 10px',
},
content: {
    display: 'flex',
    flexDirection: 'column',
    // flex: '1 0 auto',
    gap: '15px',
},
name: {
    color: '#c21430',
},
dateContent: {
    lineHeight: '1.23',
},
title: {
    marginRight: '24px',
}
}));

