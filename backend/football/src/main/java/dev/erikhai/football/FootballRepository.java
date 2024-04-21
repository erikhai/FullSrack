package dev.erikhai.football;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FootballRepository extends MongoRepository<Football, ObjectId> {
    Optional<Football> findFootballClubByName(String clubName);

}
