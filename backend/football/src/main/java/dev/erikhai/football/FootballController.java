package dev.erikhai.football;

import org.apache.coyote.Response;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/football")
public class FootballController {
    @Autowired
    private FootballService footballService;
    @GetMapping
    public ResponseEntity<List<Football>> getAllFootballClubs(){
        return new ResponseEntity<List<Football>>(footballService.allFootballClubs(), HttpStatus.OK);
    }

    @GetMapping("/{name}")
    public ResponseEntity<Optional<Football>> getSingleFootballClub(@PathVariable String name){
        return new ResponseEntity<Optional<Football>>(footballService.singleFootballClub(name), HttpStatus.OK);
    }
}
