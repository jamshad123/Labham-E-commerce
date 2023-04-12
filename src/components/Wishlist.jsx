import React from "react";
// import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";

function WishList() {
  const wishlistItemsString = localStorage.getItem("wishlistd");

  const wishlistd = JSON.parse(wishlistItemsString);
  console.log(wishlistd);

  const DeleteWishlist = (id) => {
    const wishlistItemsString = localStorage.getItem("wishlistd");
    let wishlistItems = JSON.parse(wishlistItemsString);
  
    const itemIndex = wishlistItems.findIndex(
      (item) => item.id === id
    );
    wishlistItems.splice(itemIndex, 1);
    localStorage.setItem("wishlistd", JSON.stringify(wishlistItems));
    window.location.reload(false);
  };

  return (
    <div className="row px-5 gy-5 mt-3">
      <h1> WishList</h1>
      {wishlistd.map((first) => {
        return (
          <>
            <Card className="col-lg-3 p-1" key={first}>
              <Card.Body>
            
                <Card.Title>{first.title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <p>User id: {first.id}</p>
               
                <Button
                  className="btn btn-danger"
                  onClick={() => DeleteWishlist(first.isbn13)}
                >
                  <AiFillDelete />
                  <span className="ms-2">Delete</span>
                </Button>
              </Card.Body>
            </Card>
          </>
        );
      })}
    </div>
  );
}

export default WishList;
