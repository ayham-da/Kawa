import React                     from 'react';

import book1  from '../../assets/booksImg/b1.png'
import book2  from '../../assets/booksImg/b2.png'

import { Container, Row, Col} from 'react-bootstrap';
import UserPlacesList            from '../../components/Books/UserBooksList'
import Footer from '../../components/footer/footer';
import '../Books/Books.css';

import Animate from 'react-smooth';
import Particles from 'react-particles-js';
import particles from '../../const/particle.js';
import {Helmet} from 'react-helmet';


const Fake_PLACES = [
    {
      id: 'p1',
      title: 'Volksgarten',
      description: 'One of the most famous garden in Düsseldorf!',
      imageUrl: book1 ,
      creator: 'Samer Alnajjar'
    },
    {
      id: 'p2',
      title: 'Volksgarten',
      description: 'One of the most famous garden in Düsseldorf!',
      imageUrl: book2 ,
      creator: 'Samer Alnajjar'
    }
  ];

const UserPlaces = () => {
    const loadedPlaces = Fake_PLACES
    return (
        <Page loader={"bar"} color={"white"} size={9} duration={1}>
        <Helmet>
                 <meta charSet="utf-8" />
                 <title>Samer Alnajjar</title>
                 <link rel="canonical" href="#" />
                 <meta name="description" content="Samer Alnajjar| Author" />
        </Helmet>
         {/* <Animate to="1" from="0" attributeName="opacity">
           <Particles params={particles} className="particle"/> */}

            {/* <List component="nav" aria-label="contacts">
            <ListItem style={{display:"contents"}}>
                <Flip left>
                    <div className={classes.root}>
                        <Card style={{borderRadius:"10px"}}>
                            <Paper variant="outlined">
                                <CardContent align="center">
                                    <img alt="image"
                                    src={user.imageURL}
                                    className={classes.imgStyle}
                                    />
                                <TableRow className={classes.row}>
                                    <TableCell color="dark">
                                        Name :  &nbsp;  {user.fullName} 
                                     </TableCell>
                                </TableRow>

                                <TableRow className={classes.row}>
                                    <TableCell color="textSecondary">
                                        Vorname :  &nbsp;  {user.firstName} 
                                     </TableCell>
                                </TableRow>

                                <TableRow className={classes.row}>
                                    <TableCell color="textSecondary">
                                        Nachname :  &nbsp;  {user.lastName} 
                                     </TableCell>
                                </TableRow>

                                <TableRow
                               className={classes.row}
                                >
                                    <TableCell
                                     color="textSecondary"
                                     >
                                 Role : &nbsp;   {user.role} 
                                     </TableCell>
                                </TableRow>
                                <TableRow
                               className={classes.row}
                                >
                                    <TableCell
                                     color="textSecondary"
                                     >
                                Liga : &nbsp;   {user.lig} 
                                     </TableCell>
                                </TableRow>

                                <TableRow
                               className={classes.row}
                                >
                                    <TableCell
                                     color="textSecondary"
                                     >
                                 E-Mail Adresse :  &nbsp;  {user.email} 
                                     </TableCell>
                                </TableRow>

                                </CardContent>
                               <TableRow
                               className={classes.row}
                               >
                                   <TableCell
                                   className={classes.edit}
                                   >
                                <Link to={`/profile/captain/${user.id}`}
                                style={{color:"black", textDecoration:"none"}}
                                >
                                  Benutzer Bearbeiten
                            </Link>
                                   </TableCell>
                               </TableRow>
                            </Paper>
                            </Card>
                            </div>
                            </Flip>
                            )

                })
                    ) : null}

                </ListItem>
            </List> */}
        </Page>
    //          </Col>
    //        </Row>
    //        <Row className="Books-footer">
    //          <Footer />
    //        </Row>
    //    </Container> */}
    //* </Animate>
     //</div> */}
    
    );
};
export default UserPlaces;