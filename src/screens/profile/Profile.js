import React from "react";
import "./style.css";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

const dataProfile = [{
    id: 1,
    firstName: "Amy",
    lastName: "Mayer",
    email: "amymay@gmail.com",
    birthday: "12/04/1991",
    image: "images/photo.jpg",
}, ];

function Profile() {
    return ( <
        div className = "profile" >
        <
        div className = "container" > { " " } {
            dataProfile.map((profileData) => ( <
                div key = { profileData.id }
                className = "row" >
                <
                div className = "col-lg-3 left" >
                <
                div className = "ll" >
                <
                div className = "image" >
                <
                img src = { profileData.image }
                alt = "img" / > { " " } <
                /div>{" "} <
                h5 > { " " } { profileData.firstName } { profileData.lastName } { " " } <
                /h5>{" "} <
                /div>{" "} <
                ul >
                <
                li >
                <
                a > My Orders < /a>{" "} <
                /li>{" "} <
                li >
                <
                a > Wishlist < /a>{" "} <
                /li>{" "} <
                li >
                <
                a > Notifcations < /a>{" "} <
                /li>{" "} <
                li >
                <
                a > Settings < /a>{" "} <
                /li>{" "} <
                /ul>{" "} <
                /div>{" "} <
                div className = "col-lg-6 right" >
                <
                div className = "rr" >
                <
                div >
                <
                h5 > My Profile < /h5>{" "} <
                div className = "data" > { " " } <
                label > First Name: < /label>{" "} <
                p > { profileData.firstName } < /p>{" "} <
                /div>{" "} <
                div className = "data" > { " " } <
                label > Last Name: < /label> <p> {profileData.lastName} </p > { " " } <
                /div>{" "} <
                div className = "data" > { " " } <
                label > Email: < /label> <p>{profileData.email}</p >
                <
                /div>{" "} <
                div className = "data" > { " " } <
                label > Birthday: < /label> <p> {profileData.birthday} </p >
                <
                /div>{" "} <
                Button children = "Change Password" / >
                <
                /div>{" "} <
                div >
                <
                div className = "image" >
                <
                img src = { profileData.image }
                alt = "img" / > { " " } <
                /div>{" "} <
                Button children = "Upload new photo" / > { " " } <
                Link to = "/ProductList" >
                <
                h5 > Products < /h5>{" "} <
                /Link>{" "} <
                /div>{" "} <
                /div>{" "} <
                /div>{" "} <
                /div>
            ))
        } { " " } <
        /div>{" "} <
        /div>
    );
}

export default Profile;