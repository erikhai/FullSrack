package dev.erikhai.football;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Review createReview(String reviewBody, String name) {
        Review review = new Review(reviewBody);
        review = reviewRepository.insert(review);

        mongoTemplate.updateFirst(
                Query.query(Criteria.where("name").is(name)),
                new Update().push("reviewIds", review.getId()),
                Football.class
        );

        return review;
    }
}