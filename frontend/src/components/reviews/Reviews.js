// Reviews.js

import React, { useEffect, useRef, useState } from "react";
import api from "../../api/axiosConfig";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";

const Reviews = ({ footballClubs }) => {
    const [club, setClub] = useState(null);
    const [reviews, setReviews] = useState([]);
    const revText = useRef();
    const navigate = useNavigate();
    const params = useParams();
    const clubName = params.name;

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch club data
                const clubResponse = await api.get(`/api/v1/football/${clubName}`);
                setClub(clubResponse.data);
                
                // Fetch all reviews for the club
                const reviewsResponse = await api.get(`/api/v1/reviews/${clubName}`);
                setReviews(reviewsResponse.data);
            } catch (error) {
                console.error("Error fetching club data and reviews: ", error);
            }
        };

        fetchData();
    }, [clubName]);

    const addReview = async (e) => {
        e.preventDefault();
        if (revText && revText.current) {
            const rev = revText.current;
            try {
                await api.post("/api/v1/reviews", { reviewBody: rev.value, name: clubName });
                // After successfully adding the review, refetch the reviews for the club
                const reviewsResponse = await api.get(`/api/v1/reviews/${clubName}`);
                setReviews(reviewsResponse.data);
                rev.value = "";
            } catch (err) {
                console.log(err);
            }
        } else {
            console.error("revText is null or undefined");
        }
    };
    
    return (
        <Container>
            <Row>
                <Col><h3>{club ? club.name : "Club"} Reviews</h3></Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a review?" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
            {reviews && reviews.length > 0 ? (
                reviews.map((review, index) => (
                    <Row key={index}>
                        <Col>{review.body}</Col>
                    </Row>
                ))
            ) : (
                <Row>
                    <Col>No reviews yet.</Col>
                </Row>
            )}
            <Row>
                <Col>
                    <button onClick={() => navigate(`/Reviews/${clubName}`)}>Navigate to Reviews</button>
                    <hr />
                </Col>
            </Row>
        </Container>
    );
};

export default Reviews;
