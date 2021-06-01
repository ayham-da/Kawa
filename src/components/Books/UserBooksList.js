import React           from 'react';
import PlaceItem       from './BookItem'
import {Card}          from 'react-bootstrap'
import                      'bootstrap/dist/css/bootstrap.min.css';
import                      './UserBooksList.css'


const UserbooksList = props => {
    if (props.items.length === 0){
        return ( 
        <>
        <div className="center">
        <Card text="light">
        <Card.Body>
           <Card.Text >
               {<h2>No Books found!!</h2>}
           </Card.Text>
           
           </Card.Body>    
       </Card>
        </div>
        </>
        );
    }else{
        return(
            <>
            <ul className="books-list">
                {props.items.map(book =>{
                    return(<>
                    <PlaceItem 
                        key={book.id} 
                        id={book.id} 
                        image={book.imageUrl} 
                        title={book.title} 
                        description={book.description} 
                        creatorId={book.creator}
                        
                    />
                    </>
                    )
                    
                })}
            </ul>
            </>
        )
       }
};
export default UserbooksList;