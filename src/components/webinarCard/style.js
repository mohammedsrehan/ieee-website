import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
card: {
    display: 'flex',
    maxWidth: '500px',
    position: 'relative',
},
image: {
    width: '900px',
    height: 'auto',
},
speakerDetails: {
    borderLeft: '4px solid #c21430',
    padding: '3px 10px',
},
content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
},
name: {
    color: '#c21430',
},
date: {
    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 49% 100%, 0 80%)',
    backgroundColor: '#c21430',
    position: 'absolute',
    top: '0',
    right: '0',
    width: '40px',
    height: '60px',
},
dateContent: {
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: '1.23',
}
}));

