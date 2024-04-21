package dev.erikhai.football;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FootballService {
    @Autowired
    private FootballRepository footballRepository;
    public List<Football> allFootballClubs(){
        return footballRepository.findAll();
    }

    public Optional<Football> singleFootballClub(String clubName){
        return footballRepository.findFootballClubByName(clubName);
    }
}
