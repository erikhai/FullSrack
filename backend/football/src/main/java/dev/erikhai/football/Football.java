package dev.erikhai.football;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "football")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Football {
    @Id
    private ObjectId id;
    private String name;
    private int founded;
    private String manager;
    private String captain;
    private String currentLeague;
    private String logo;
    private List<String> images;
    private String video;

    @DocumentReference
    private List<Review> reviewIds;
}
