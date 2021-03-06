import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '8%',
    textAlign:'center',
    marginBottom: '3%',
    [theme.breakpoints.up('xs')]: {
      marginTop : '60px'
    },
    [theme.breakpoints.up('lg')]: {
      marginTop : '8%'
    }
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
  price:{
    marginBottom: 50,
  },
  empty:{
    color : 'black',
    textDecoration:'none'
  },
  center:{
    textAlign: 'center',
  }
}));